import type { Request, Response } from 'express';

export const getList = (req: Request, res: Response) => {
  try {
    const users = [{
      name: "John",
      surname: "Doe"
    }]
    res.json({ success: "get call succeed!", url: req.url, data: users });
  } catch (e) {
    console.error(e);
    res.json({ success: "fail", url: req.url });
  }
}

export const getOne = (req: Request, res: Response) => {
  try {
    const users = [{
      name: "Jame",
      surname: "Theerakarn"
    }]
    res.json({ success: "get call succeed!", url: req.url, data: users });
  } catch (e) {
    console.error(e);
    res.json({ success: "fail", url: req.url });
  }
}