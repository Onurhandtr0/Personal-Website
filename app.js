const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const userRoutes = require('./routes/user');

// app.post('/send', (req, res) => {
//     const output = `
//       <p>You have a new contact</p>
//       <h3>Contact details</h3>
//       <ul>
//         <li>Name: ${req.body.email}</li>
//         <li>Name: ${req.body.name}</li>
//         <li>Name: ${req.body.message}</li>
//       </ul>
//     `;

//     app.post('/contact', async (req, res) => {
//         // create reusable transporter object using the default SMTP transport
//         let transporter = nodemailer.createTransport({
//             host: "smtp.ethereal.email",
//             port: 587,
//             secure: false, // true for 465, false for other ports
//             auth: {
//                 user: 'onurhankisisel@gmail.com', // ethereal user
//                 pass: '168465188Onur', // ethereal password
//             },
//         });
        
//         const msg = {
//             from: '"Personal Contact" <onurhandtr@gmail.com>', // sender address
//             to: "onurhandtr@gmail.com", // list of receivers
//             subject: "İletişim İsteği", // Subject line
//             text: "Merhaba, sizinle iletişime geçmek istiyorum.",
//             html: output 
//         }
//         // send mail with defined transport object
//         const info = await transporter.sendMail(msg);      
//         res.render('contact', {msg: 'Formunuz başarıyla gönderildi!'})
//     })
// })

const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', userRoutes);

app.use(errorController.get404Page);

app.listen(3000, () => {
    console.log("Server run on 3000...");
});
