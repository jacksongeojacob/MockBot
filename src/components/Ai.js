import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI('');
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // export const generateStory = async (prompt) => {
// //     try {
// //         const result = await model.generateContent(prompt);
// //         return result.response.text();
// //     } catch (error) {
// //         console.error("Error generating content:", error);
// //         throw error; // Re-throw the error for further handling if needed
// //     }
// // };




// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI('');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chathistory = [
  {
    role: "user",
    parts: [{ text: 'respond to me in a mocking manner whenever I say something. But in a responsible way as if I ask someting important you should respond to it in a good manner. Always keep a sense of humor in all your responses' }],
  },
 
];
async function generateStory(prompt) {
  const chat = model.startChat({
    history: chathistory
  });

  let result = await chat.sendMessage(prompt);



  
  const history = [
    {
      role: "user",
      parts: [{ text: prompt }],
    },
    {
      role: "model",
      parts: [{ text: result.response.text() }],
    },
  ];
  


  // chat._history = [...chat._history, ...history];
  chathistory.push(...history);


  return result.response.text();
}

// Example usage
// const response = await getResponseFromChat("I have 2 dogs in my house.");
// console.log(response);

export { generateStory };
