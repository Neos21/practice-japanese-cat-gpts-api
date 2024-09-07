import 'dotenv/config';
import fetch from 'node-fetch';

// https://qiita.com/DEmodoriGatsuO/items/d702f81816a6697caf19
const huggingFaceApiKey = process.env.HUGGING_FACE_API_KEY;
const response = await fetch('https://api-inference.huggingface.co/models/line-corporation/japanese-large-lm-3.6b', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${huggingFaceApiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    inputs: '私の猫は今、',
    options: {
      wait_for_model: true
    }
  })
});
const responseJson = await response.json();
console.log(responseJson);

// 以下の内容が固定で返ってくる。初回はかなり重く `wait_for_model: true` が必要
// [
//   {
//     generated_text: '私の猫は今、商品<0x0A>本文: 西口杏里沙/哀愁のカナリア/千の夜をこえて 【CD】西口杏里沙(ニシグチ アンリサ)/発売日:2018/01/24/KMSGK-3//西口杏里沙/<収録内容>'
//   }
// ]
