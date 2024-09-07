import 'dotenv/config';
import { HfInference } from '@huggingface/inference';

const huggingFaceApiKey = process.env.HUGGING_FACE_API_KEY;
const inference = new HfInference(huggingFaceApiKey);
// https://huggingface.co/docs/huggingface.js/index#huggingfaceinference-examples
const out = await inference.chatCompletion({
  model: 'mistralai/Mistral-7B-Instruct-v0.2',
  messages: [{ role: 'user', content: 'What is my cat doing?' }],
  max_tokens: 100
});
console.log(out.choices[0].message);

// 以下のような回答が返ってくる
// {
//   role: 'assistant',
//   content: " I'd be happy to help you interpret your cat's behavior, but I'll need some more information to provide an accurate answer. Here are some common cat behaviors and what they might signify:\n" +
//     '\n' +
//     "1. Purring: Cats often purr when they're happy and content, but they can also purr when they're sick, stressed, or in pain.\n" +
//     '2. Chasing: Cats may chase toys, other animals, or even their own t'
// }
