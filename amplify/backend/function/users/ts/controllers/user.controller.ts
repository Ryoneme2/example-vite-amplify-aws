import type { Request, Response } from 'express';
import * as service from '../services/user.service';

export const getList = async (req: Request, res: Response) => {
  try {
    const users = await service.getList()
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