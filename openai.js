import 'dotenv/config';
import OpenAI from 'openai';

const openAiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: openAiApiKey
});
// https://platform.openai.com/docs/models
// https://openai.com/api/pricing/
const response = await openai.completions.create({
  model: 'gpt-3.5-turbo-instruct',
  prompt: 'あなたは猫を飼っています。今その猫は何をしていますか？',
  max_tokens: 256
});
console.log(response);

// text-ada-001 は Deprecated
// NotFoundError: 404 The model `text-ada-001` has been deprecated, learn more here: https://platform.openai.com/docs/deprecations
// 
// gpt-3.5-turbo-instruct が text-ada-001 の代替として紹介されていた: https://platform.openai.com/docs/deprecations/2023-07-06-gpt-and-embeddings
// {
//   id: 'cmpl-9tumUOWhN5wMcjkcBOwyy6DajepsN',
//   object: 'text_completion',
//   created: 1723113334,
//   model: 'gpt-3.5-turbo-instruct',
//   choices: [
//     {
//       text: '\n' +
//         '\n' +
//         '私は猫を飼っていますが、今は私が仕事をしている時なので、居間でソファの上でお昼寝をしていると思います。たまに私の近くに来て甘えてきたり、鳴いたりするので、作業に集中しづらいですが、可愛いので許していま す。日中はほとんど寝ている時間が多いですが、夜になると活発になり、私の後をついて歩いたり、遊びたがったりします。私が帰宅すると、玄関まで来て出迎えてくれるので、とても癒されます。そして、一緒に過ごす時間が私にとっては貴重なリラックスタイムになっています。',
//       index: 0,
//       logprobs: null,
//       finish_reason: 'stop'
//     }
//   ],
//   usage: { prompt_tokens: 25, completion_tokens: 231, total_tokens: 256 }
// }
// 
// babbage-002 はイマイチ
// 透视自己概要のクチコミ記事 2 人気の有名な猫を飼っているリアルコミュニティです毎日新聞は、猫を飼っている最高です。毎日新聞最大のお問合せは毎日約約1.1億人を超えた猫飼込ですから、Mさんのすべての人気 記事の猫を飼っている紹介しています。異動パチンコ…皆さんが！ 人気愛した飼い主に悩まされていることで知らないことがあります。 また、飼い主業務ごとにけにゆるゆると業務ごとに悩まされてしまうことがあります。そんなよ うなことを解決しようと思っています。
// 
// davinci-002 は英語で返ってくる
// When a female cat becomes sexually mature, she will reach puberty, around 5-9 months of age.
