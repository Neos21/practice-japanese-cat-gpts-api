import 'dotenv/config';
import fetch from 'node-fetch';

// https://huggingface.co/docs/api-inference/detailed_parameters?code=js#text-generation-task
const huggingFaceApiKey = process.env.HUGGING_FACE_API_KEY;
const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${huggingFaceApiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    inputs: 'My cat is in my house. The cat is'
  })
});
const responseJson = await response.json();
const generatedText = responseJson[0].generated_text;
console.log(generatedText);

// 以下のように同じ回答が返ってくる
// 
// 「私の猫は今、」
// → 私の猫は今、何事が住会蟳でも大神に途藤すると話いて40718長まりようならで。
// 
// 「My cat is in my house. The cat is」
// → My cat is in my house. The cat is sleeping in my white kitty litter box.
