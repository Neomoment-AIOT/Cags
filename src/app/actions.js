// app/actions.js
'use server';

import { Resend } from 'resend';

export async function subscribeNewsletter(prevState, formData) {
  const email = formData.get('email');
  if (!email) {
    return { message: 'Email is required.' };
  }

  // Ensure you have your RESEND_API_KEY in your .env.local file
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Newsletter <onboarding@resend.dev>', // IMPORTANT: This must be an email from your verified domain in Resend.
      
      // Emails will be sent to both of these addresses.
      to: ['sales@cagstobacco.com', 'rnasir15@gmail.com'], 
      
      subject: 'New Newsletter Subscription',
      html: `<p>You have a new newsletter subscription from: <strong>${email}</strong></p>`,
    });

    return { message: 'Success! Thank you for subscribing.' };
  } catch (error) {
    console.error(error);
    return { message: 'Error: Could not subscribe. Please try again.' };
  }
}