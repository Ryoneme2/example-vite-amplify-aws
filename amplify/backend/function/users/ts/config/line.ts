import denv from 'dotenv';
denv.config()

export const CONFIG = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET
};