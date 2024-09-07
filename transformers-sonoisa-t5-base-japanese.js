import { pipeline } from '@xenova/transformers';

// https://huggingface.co/sonoisa/t5-base-japanese
const pipe = await pipeline('text2text-generation', 'sonoisa/t5-base-japanese');
const output = await pipe('私の猫は今、');
console.log(output);

// Transformers.js に対応していないので、分かってたけど動かず。
// Error: Could not locate file: "https://huggingface.co/sonoisa/t5-base-japanese/resolve/main/tokenizer.json".
