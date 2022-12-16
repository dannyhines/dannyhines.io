import mailchimp from '@mailchimp/mailchimp_marketing';
import type { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_KEY?.split('-')[1],
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = JSON.parse(req.body);
  const listId = process.env.MAILCHIMP_AUDIENCE_ID ?? '';

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed',
    });

    return res.status(201).json({ error: '' });
  } catch (error: unknown) {
    return res.status(500).json({ error: 'Failed to add email' });
  }
}
