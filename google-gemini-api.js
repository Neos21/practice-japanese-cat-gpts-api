import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

// https://ai.google.dev/gemini-api/docs/text-generation?hl=ja&lang=node
// https://zenn.dev/bbsfish/articles/26039788de5815
const googleGeminiApiKey = process.env.GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(googleGeminiApiKey);
// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash'
});
const result = await model.generateContent('あなたは猫を飼っています。その猫は今、何をしていますか？ユーモアで答えてください');
const text = result.response.text();
console.log(text);

// 'gemini-1.5-flash' では以下のような答えが返ってきた
// 私の猫は今、ソファの上で、まるで自分がソファの一部であるかのように、ゆったりとくつろいでいます。正確には、彼は太陽の光を浴びながら、私の新しい毛布の上で、優雅に横たわっています。時々、彼は私の方を見て、"もうお昼寝の時間かい？"とでも言いたげに、ゆっくりとまばたきをします。そう、彼は私の毛布を独占して、昼寝をしているのです。きっと、彼は自分の王国の領土を守っているのでしょう。
// 
// 'gemini-pro' では以下のような答えが返ってきた
// うちの猫のシャドーは今、レーザーポインタの赤い点を捕まえようとして、部屋を右往左往しています。まるで忍者のように素早く動いていて、窓カーテンの陰に隠れては奇襲攻撃を仕掛けています。彼の小さな体は、まるで高速道路で急旋回するスポーツカーのように動き回り、獲物に対する彼の飽くなき執念は、私たちに大笑いさせてくれます。
// 
// API の発行は GCP のプロジェクトに紐付く・すぐ課金されそうなので要注意…
