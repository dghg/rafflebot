import crawler from "./crawler";
import sendMessage from "./slack";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export const hello= async (event: any, context: any) => {
  crawler.forEach((result) => {
    result().
    then(async (_) => {
      _ && (await sendMessage(_));
    })
    .then(()=>{
      return {
        statusCode: 200,
        body: JSON.stringify({message: "Success"}),
      }
    })
    .catch((err : Error)=>{
      return {
        statusCode: 403,
        body: err.message,
      }
    })
  })
};
