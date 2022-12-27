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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    let errorMsg = 'Something went wrong. Please try again later.';
    if (error && error.response && error.response.body) {
      errorMsg =
        error.response.body.title === 'Member Exists'
          ? `${email} is already subscribed`
          : error.response.body.title;
    }
    return res.status(500).json({ error: errorMsg });
  }
}
