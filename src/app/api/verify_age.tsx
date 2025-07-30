import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Get IP address (works differently based on your hosting)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    // Here you would typically store the IP in your database
    // along with the verification status
    // This is just a placeholder for the concept
    
    console.log(`Age verified for IP: ${ip}`);
    
    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}