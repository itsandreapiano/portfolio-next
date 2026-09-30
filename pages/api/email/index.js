import { BrevoClient } from "@getbrevo/brevo";
import fillTemplate from "./template/fillTemplate.js";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  if (!process.env.BREVO_API_KEY) {
    return res.status(500).json({
      success: false,
      error: "BREVO_API_KEY is not configured",
    });
  }

  if (!process.env.ACCOUNT_EMAIL) {
    return res.status(500).json({
      success: false,
      error: "ACCOUNT_EMAIL is not configured",
    });
  }

  const { data } = req.body;

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({
      success: false,
      error: "Invalid payload",
    });
  }

  try {
    const results = await Promise.all(
      data.map(async (email) => {
        const { from, subject, message, type } = email;

        if (!subject || !message || !type) {
          throw new Error("Missing required email fields");
        }

        const to = type === "greetings" ? from : process.env.ACCOUNT_EMAIL;

        if (!to) {
          throw new Error("Missing recipient email");
        }

        console.log("EMAIL DEBUG:", {
          type,
          to,
          sender: process.env.ACCOUNT_EMAIL,
          subject,
        });

        const result = await brevo.transactionalEmails.sendTransacEmail({
          sender: {
            email: process.env.ACCOUNT_EMAIL,
          },

          to: [
            {
              email: to,
            },
          ],

          subject,

          textContent: message,

          htmlContent: fillTemplate(email),
        });

        console.log("BREVO SEND RESULT:", result);

        return {
          to,
          subject,
          messageId: result?.messageId || null,
          result,
        };
      }),
    );

    return res.status(200).json({
      success: true,
      sent: results.length,
      results,
    });
  } catch (err) {
    console.error("BREVO EMAIL ERROR:", {
      message: err?.message,
      statusCode: err?.statusCode,
      body: err?.body,
      rawResponse: err?.rawResponse,
    });

    return res.status(err?.statusCode || 500).json({
      success: false,
      error: err?.body?.message || err?.message || "Email sending failed",
      statusCode: err?.statusCode || 500,
      details: err?.body || null,
    });
  }
}
