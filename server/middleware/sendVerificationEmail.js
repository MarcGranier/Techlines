import nodemailer from 'nodemailer';

export const sendVerificationEmail = (token, email, name) => {
	const html = `
  <html>
    <body>
      <h3>Dear ${name}</h3>
      <p>Thanks for signing up at Tech Lines!</p>
      <p>Use the link below to verify your email</p>
      <a href="http://localhost:3000/email-verify/${token}">Click here!</a>
    </body>  
  </html>
  `;

	const appPass = process.env.APP_PASSWORD;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'techlines03@gmail.com',
			pass: appPass,
		},
	});

	const mailOptions = {
		from: 'techlines03@gmail.com',
		to: email,
		subject: 'Verify your email address',
		html: html,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log(`Email sent to ${email}`);
			console.log(info.response);
		}
	});
};
