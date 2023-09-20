import Prompt from "@models/prompt";

export const createNewPrompt = async ({ userId, prompt, tag }) =>
  await Prompt.create({
    creator: userId,
    prompt,
    tag,
  });

export const fetchAllPrompts = async () =>
  await Prompt.find({}).populate("creator");

export const fetchAllPromptsOfUser = async (id) =>
  await Prompt.find({ creator: id }).populate("creator");
