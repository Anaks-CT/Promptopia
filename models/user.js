import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 5-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

// here we write || because the route.js gets called everytime when  we need it by nextjs.
// but in the the case of express it only calls once. so if the model already exist we dont want to creaet again
const User = models.User || model("User", UserSchema);

export default User;