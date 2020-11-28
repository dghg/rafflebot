import crawler from "./crawler";
import sendMessage from "./slack";
import {Handler, Context} from 'aws-lambda';
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export const hello: Handler = async (event: any, context: Context) => {
  crawler.forEach((result) => {
    result().
    then(async (_) => {
      _ && (await sendMessage(_));
    })
    .catch((err : Error)=>{
      return {
        statusCode: 403,
        body: err.message,
      }
    })
  })
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Success"}),
  }
};
