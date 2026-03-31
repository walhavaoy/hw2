import { Request, Response } from 'express';
import { greetings } from '../data/greetings.js';

function greetingHandler(req: Request, res: Response): void {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  res.status(200).json({ greeting });
}

export { greetingHandler };
