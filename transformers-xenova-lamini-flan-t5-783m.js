import { pipeline } from '@xenova/transformers';

// https://huggingface.co/docs/transformers.js/api/pipelines#pipelinestext2textgenerationpipeline
const pipe = await pipeline('text2text-generation', 'Xenova/LaMini-Flan-T5-783M');
const output = await pipe('What do a cat usually do?', {
  max_new_tokens: 100
});
console.log(output);

// 以下の回答が固定で返ってくる
// [
//   {
//     generated_text: 'A cat usually sleeps, eats food, and grooms itself.'
//   }
// ]
