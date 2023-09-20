import Prompt from "@models/prompt";



export const createNewPrompt = async ({userId, prompt, tag}) =>
  await Prompt.create({
    creator: userId,
    prompt,
    tag
  });