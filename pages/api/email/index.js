import sgMail from "@sendgrid/mail";
import fillTemplate from "./template/fillTemplate.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { data } = req.body;

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  try {
    const results = await Promise.all(
      data.map((email) => {
        const { from, subject, message, type } = email;

        if (!subject || !message || !type) {
          throw new Error("Missing required email fields");
        }

        const to = type === "greetings" ? from : process.env.ACCOUNT_EMAIL;

        const fromEmail = process.env.ACCOUNT_EMAIL;

        return sgMail.send({
          to,
          from: fromEmail,
          subject,
          text: message,
          html: fillTemplate(email),
        });
      }),
    );

    return res.status(200).json({
      success: true,
      sent: results.length,
      results,
    });
  } catch (err) {
    console.error("EMAIL API ERROR:", err);

    if (err.response && err.response.body && err.response.body.errors) {
      return res.status(500).json({
        success: false,
        error: err.response.body.errors.map((e) => e.message).join(", "),
      });
    }

    return res.status(500).json({
      success: false,
      error: err.message || "Email sending failed",
    });
  }
}
