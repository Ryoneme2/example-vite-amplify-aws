import * as line from '@line/bot-sdk';
import dotenv from 'dotenv';
import express from 'express';
// import { CONFIG } from '../config/line';
import * as control from '../controllers/webhook.controller';

dotenv.config()

const route = express.Router()

route.post('/', line.middleware({
  channelAccessToken: 'FpkQv1AkHWjABxYWAdTSMgjxXhMXxm+UDFYT2pCHHbqbL/prSlSA1OQTmMmmCQkjjAVIXPPv9ArHPXUEV/DOwM3L9Xaio2C7M6poeVO7n2g9LZhNOZuW3TkcsNWAqEsL/lk+Kb9aVii4hOw6B4INAgdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'aeea31ae5db32f638d87d39afec2f124'
}), control.getList)

export default route