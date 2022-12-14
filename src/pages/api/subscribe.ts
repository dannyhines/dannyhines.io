import mailchimp from '@mailchimp/mailchimp_marketing';
import type { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID ?? '';
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: 'subscribed',
    });

    return res.status(201);
  } catch (error: unknown) {
    return res.status(500).json({ error: 'Failed to add email' });
  }
}
