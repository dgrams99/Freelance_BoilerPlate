const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

module.exports = {
    Email: function (req, res) {
      
    },

    create: function (req, res) {
        console.log(req.body.Fullname)

        ContactPage = new Contact({
            FullName: req.body.FullName,
            Phone: req.body.Phone,
            Email: req.body.Email,
            Description: req.body.Description,

        }).save((err, doc) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Message Sent',

            })
        })
        async function main(){          
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
              service: 'EMAIl',
              auth: {
                user: 'EMAIl', // generated ethereal user
                pass: 'PASSWORD' // generated ethereal password
              }
            });
          
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: 'EMAIl', // sender address
              to: "EMAIl", // list of receivers
              subject: "Hello ✔", // Subject line
              
              html: req.body.FullName // html body
            });
          
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          }
          
          main().catch(console.error);
    }



};