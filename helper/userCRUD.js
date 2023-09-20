import User from "@models/user";

export const findUserByEmail = async (email) =>
  await User.findOne({ email: email });

export const createNewUser = async (profile) =>
  await User.create({
    email: profile.email,
    username: profile.name.replace(" ", "").toLowerCase(),
    image: profile.picture,
  });
