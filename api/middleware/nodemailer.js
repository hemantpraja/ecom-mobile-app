import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email, verificationToken) => {
    //  create a nodemailer transport
    const transporter = nodemailer.createTransport({
      // configure the email service
      service: 'gmail',
      auth: {
        user:"prajapatihemantmotivation@gmail.com",
        pass: "ozfo mcpj zfvh ezuz"
      },
    });

    // compose the email message
    const mailOption = {
      from: 'prajapatihemantmotivation@gmail.com',
      to: email,
      subject: 'Email Verification',
      text: `Please click the following link to verify your E-mail : http://localhost:8000/verify/${verificationToken}`,
    };

    // send email
    try {
      const res = await transporter.sendMail(mailOption);
      console.log("Email response :  ",res)
    } catch (error) {
      console.log('Error sending the verification E-mail', error);
    }
  };

