// app/actions.js
'use server';

import { Resend } from 'resend';

export async function subscribeNewsletter(prevState, formData) {
  const email = formData.get('email');
  if (!email) {
    return { message: 'Email is required.' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Newsletter <onboarding@resend.dev>', // IMPORTANT: Use an email from your verified domain
      to: ['your-email@example.com'], // CHANGE THIS to your actual recipient email(s)
      subject: 'New Newsletter Subscription',
      html: `<p>New subscription from: <strong>${email}</strong></p>`,
    });
    return { message: 'Success! Thank you for subscribing.' };
  } catch (error) {
    console.error(error);
    return { message: 'Error: Could not subscribe. Please try again.' };
  }
}