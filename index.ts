import crawler from "./crawler";
import sendMessage from "./slack";
import {Handler} from 'aws-lambda';
import end from './crawler/end';
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";


export const hello = async (event: any, context: any) => {
  try {
    for (let getInfo of crawler) {
      const result = await getInfo();
      if(result) {
        await sendMessage(result);
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({message: 'SUCCESS'}),
    }
   } catch (err) {
     return {
       statusCode: 403,
       body: JSON.stringify({message : err.message}),
     }   
   }
  
}
