const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      subject,
      html,
    });

    if (error) {
      console.error("Email send error:", error);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};

module.exports = sendEmail;