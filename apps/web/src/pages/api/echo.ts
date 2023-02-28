import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
	return res.json({ message: 'hello world' });
}

export default handler;
