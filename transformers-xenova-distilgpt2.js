import { pipeline } from '@xenova/transformers';

// https://huggingface.co/docs/transformers.js/api/pipelines#pipelinestextgenerationpipeline
const pipe = await pipeline('text-generation', 'Xenova/distilgpt2');
const output = await pipe('My cat is', {
  temperature: 2,
  max_new_tokens: 10,
  repetition_penalty: 1.5,
  no_repeat_ngram_size: 2,
  num_beams: 2,
  num_return_sequences: 2
});
console.log(output);

// 以下の回答が固定で返ってくる
// [
//   { generated_text: "My cat is a little bit of an animal, but she's" },
//   { generated_text: 'My cat is a little bit of an animal, but I think' }
// ]
