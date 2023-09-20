import { fetchAllPrompts } from "@helper/promptCRUD";
import { connectToDB } from "@utils/database";

export const GET = async (req) => {

  try {
    await connectToDB();

    const prompts = await fetchAllPrompts()

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
