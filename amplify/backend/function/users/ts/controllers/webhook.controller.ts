import * as line from '@line/bot-sdk';
import type { Request, Response } from 'express';
import { CONFIG } from '../config/line';

export const getList = async (req: Request, res: Response) => {
  try {
    if (!CONFIG.channelAccessToken || !CONFIG.channelSecret) return res.json({ success: "fail", url: req.url });
    const conf = {
      channelAccessToken: CONFIG.channelAccessToken || '',
      channelSecret: CONFIG.channelSecret || ''
    }
    const client = new line.Client(conf);

    function handleEvent(event: line.WebhookEvent) {
      if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
      }

      return client.replyMessage(event.replyToken, {
        type: 'text',
        text: event.message.text
      });
    }

    const x = await Promise.all(req.body.events.map(handleEvent))
    res.json({ success: "get call succeed! here data", url: req.url, data: x });
  } catch (e) {
    console.error(e);
    res.json({ success: "fail", url: req.url });
  }
}
