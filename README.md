# Rafflebot

- Slack bot
- axios (request) + cheerio

# Features

1.  Crawling Page (Nike The Draw , Worksout Raffle Page), and Make in json format
2.  Post Message using Slack API[Incoming Webhook](#https://api.slack.com/messaging/webhooks)

# Incoming Webhook ?

- 슬랙에 메시지를 보내는 방법
- Incoming Webhook을 생성하면 Unique한 URL 제공(keep safe 하게 유지필요). HTTP POST Method 이용하여 메시지 전송 가능

```
POST https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
Content-type: application/json
{
   "text": "Hello, world."
}
```

# AWS 배포
```
npm install
```

- serverless
```
npm install -g serverless
serverless config credentials --provider aws --key [KEY] --secret [SECRET]
```

- 배포
```
serverless deploy
```
- 실행
```
serverless invoke -f hello
```