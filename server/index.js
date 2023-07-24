const express = require("express");
const cors=require("cors");
const nodemailer = require("nodemailer");
const dotenv=require("dotenv")
dotenv.config();
const app=express();


//middleware
app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));


app.post("/signup", async (req, res) => {
  const { email } = req.body;
  const verificationCode = Math.floor(Math.random() * 1000000);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Email Verification",
    text: `OTP :${verificationCode}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Error sending verification email" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: `${ verificationCode }` });
    }
  });
});


app.listen(8000,()=>{
    console.log(`server 8000`); 
});

