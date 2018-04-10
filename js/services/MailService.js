// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'ajgihan@gmail.com',
//         pass: '********'
//     }
// });
// var mailOptions = {
//     from: 'ajgihan@gmail.com',
//     to: 'anjana.wijesooriya@dev.cms.lk',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// var SendMail = function () {
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// }