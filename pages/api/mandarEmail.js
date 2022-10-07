import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async (req, res) => {
  const { receiver, subject, text } = req.body
  const msg = {
    to: receiver,
    from: 'enyus@hotmail.com',
    subject,
    text,
  };
  // console.log(msg)

  try {
    await sgMail.send(msg);
    // console.log(`Email has been sent`)
    res.json({ message: `Email has been sent` })
  } catch (error) {
    console.log('Error sending email')
    res.status(500).json({ error: 'Error sending email' })
  }
}