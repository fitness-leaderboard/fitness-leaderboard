require('dotenv').config()

const { Resend } = require('resend');
const express = require('express');

const app = express();
const resend = new Resend("re_WgidY1fc_45Y1mZFdW2MLFdqGtMK8ZvNB");
const PORT = 8080

const fs = require('fs');
const path = require('path');

const verifyEmail = fs.readFileSync(path.join(__dirname, './public/verifyEmail.html'), 'utf8');
// add in request body for receipient email
app.get("/sendTestEmail", async (req, res) => {
  let receipientEmail = req.query.email
  if(!receipientEmail) {
    return res.status(400).json({ error: "No receipient email provided" });
  }

  const { data, error } = await resend.emails.send({
    from: 'Husky Pack <husky-leaderboard@kenny-lin.me>',
    to: receipientEmail,
    subject: "Join the Pack",
    html: verifyEmail,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});


app.listen(
    PORT, 
    () => console.log(`Listening on http://localhost:${PORT}`)
)

