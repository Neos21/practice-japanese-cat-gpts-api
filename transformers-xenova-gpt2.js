import { pipeline } from '@xenova/transformers';

// https://huggingface.co/Xenova/gpt2
const pipe = await pipeline('text-generation', 'Xenova/gpt2');
const output = await pipe('My cat is in my house. The cat is', {
  max_new_tokens: 20,
  do_sample: true,
  top_k: 5
});
console.log(output);

// 以下のような出力がランダムに返ってくる・パラメータのいじり甲斐がありそう
// [
//   {
//     generated_text: 'My cat is in my house. The cat is in my house. She has no food or water. She has no clothes. The cat has no'
//   }
// ]
