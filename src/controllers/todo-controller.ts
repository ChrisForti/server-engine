import { Request, Response } from "express";

export function todo(req: Request, res: Response) {
  res.json({ serverMessage: "pong" });
}
