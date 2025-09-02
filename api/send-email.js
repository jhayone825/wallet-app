import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { name, email, car_model, message } = req.body;

  // Configure transporter (example: Gmail SMTP)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,  // your email
      pass: process.env.EMAIL_PASS   // your email app password
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // where you want to receive messages
      subject: `New Car Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Car Model: ${car_model}
        Message: ${message}
      `
    });

    // Redirect after success
    res.writeHead(302, { Location: "/thank-you.html" });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Email failed to send." });
  }
}

?>
