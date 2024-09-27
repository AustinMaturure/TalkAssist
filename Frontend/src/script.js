import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: import.meta.env.VITE_API_KEY, // Use environment variable
  })
);

const separateIntoVerses = async (text) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // or other GPT models available
      prompt: `Divide the following text into points to be used as key cards for a presentation, talk or speech , using "#" as the delimiter:\n${text}\n\nSeparated verses:`,
      max_tokens: 1000,
      temperature: 0.5,
    });

    const result = response.data.choices[0].text.trim();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error with OpenAI API:", error);
  }
};
