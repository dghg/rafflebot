import { IncomingWebhook } from "@slack/webhook";
import dotenv from "dotenv";
import { crawlerReturnType } from "./crawler/types";

dotenv.config();

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const sendMessage = async ({ result, pageInfo }: crawlerReturnType) => {
  const mapToBlocks = result.map((val) => {
    return {
      type: "section",
      text: {
        type: "plain_text",
        text: `${val.title} : ${val.info}`,
      },
    };
  });

  try {
    await webhook.send({
      text: `오늘의 ${pageInfo} 라플입니다.`,
      attachments: [
        {
          blocks: mapToBlocks,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

export default sendMessage;
