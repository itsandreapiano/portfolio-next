import fillTemplate from './template/fillTemplate.js';

export default function (req, res) {

  require('dotenv').config()

  let nodemailer = require('nodemailer');

  const {data} = req.body;
  
  if(data){

    let promises = [];

    for(let email of data){

      const {from, subject, message, type} = email;

      if(from && subject && message && type){

        const promise = new Promise((resolve, reject) => {

          let sendTo = "";

          switch(type) {  
            case 'greetings':
              sendTo = from;
              break;
            case 'summary':
              sendTo = process.env.ACCOUNT_EMAIL;
              break;
            default:
              sendTo = process.env.ACCOUNT_EMAIL;
          }
      
          const transporter = nodemailer.createTransport({
            port: process.env.PORT_EMAIL,
            host: process.env.HOST_EMAIL,
            auth: {
              user: process.env.ACCOUNT_EMAIL,
              pass: process.env.APP_PASSWORD,
            },
            secure: process.env.PORT_EMAIL == 465 ? true : false,
            requireTLS: true,
          });
        
          const mailData = {
              from: process.env.ACCOUNT_EMAIL,
              to: sendTo,
              subject: subject,
              text: message,
              html: fillTemplate(email)
          };
        
          transporter.sendMail(mailData, function (err, info) {
            
              if(err){
                console.log(err)
                reject(res.status(500).send(err));
              }else{
                resolve(res.status(200).send(info));
              }
          });
          
        });

        promises.push(promise);
       
      }

    }

    Promise.all(promises).then((values) => {
      console.log(values);
    });

  }else{
    res.status(500).send({error:'Not valid content'})
  }


}