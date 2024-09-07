import { pipeline } from '@xenova/transformers';

// https://huggingface.co/Xenova/t5-base
const pipe = await pipeline('text2text-generation', 'Xenova/t5-base');
const output = await pipe('My cat is');
console.log(output);

// 以下の回答が固定で返ってくる
// [ { generated_text: 'My cat is a kitty.' } ]
