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

export const findPromptById = async (id) =>
  await Prompt.findById(id).populate("creator");

  export const deletePromptById = async (id) =>
  await Prompt.findByIdAndRemove(id);


export const updatePrompt = async (existingPrompt, prompt, tag) => {
  existingPrompt.prompt = prompt;
  existingPrompt.tag = tag;
  return await existingPrompt.save();
};
