const router = require('express').Router();
let Contact = require('../models/contact.model');


router.route('/').post((req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const subject = req.body.subject;
	const message = req.body.message;
	const contact = new Contact( {name, email, subject, message});

	contact.save()
	.then(() => res.json(contact))
	.catch(err => res.status(400).json('Error: ' + err))
});




router.route('/').get((req, res) => {
	Contact.find()
	.then(contacts => res.json(contacts))
	.catch(err => res.status(400).json('Error : ' + err))
}) 






// router.route('/').post((req, res) => {
// 	const output = `
// 	<h3>Your Credit Details:</h3>
// 	<ul>
// 		<li>Name: ${req.body.name}</li>
// 		<li>Email: ${req.body.email}</li>
// 		<li>Subject: ${req.body.subject}</li>
// 	</ul>
// 	<h3>Message</h3>
// 	<p> ${req.body.message}</p>
// 	`;
// 	let transporter = nodemailer.createTransport({
// 		host: "smtp.gmail.com",
// 		port: 587,
// 		secure: false, // true for 465, false for other ports
// 		auth: {
// 		  user: 'osa.bank.test@gmail.com', 
// 		  pass: 'oussemasiwarahmed', 
// 		},
// 		tls: {
// 			rejectUnauthorized:false
// 		}
// 	  });
	
// 	  let info =  transporter.sendMail({
// 		from: '"OSA Bank" <osa.bank.test@gmail.com>', 
// 		to: `${req.body.email}`, 
// 		subject: "Your Credit Semilator Details", 
// 		text: "Hello!", 
// 		html: output,
// 	  });
	
// 	  console.log("Message sent: %s", info.messageId);
// 	  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// });


module.exports = router;