import { fetchAllPromptsOfUser } from "@helper/promptCRUD";
import { connectToDB } from "@utils/database";

export const GET = async (req, {params}) => {

  try {
    await connectToDB();
    console.log(params.id + "thisis the id ")

    const prompts = await fetchAllPromptsOfUser(params.id)

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
