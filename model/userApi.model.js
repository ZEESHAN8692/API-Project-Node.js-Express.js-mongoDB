import mongoose from "mongoose";

const userAddressSchema = new mongoose.Schema({
  street: { type: String, require: true },
  suite: { type: String, require: true },
  city: { type: String, require: true },
  zipcode: { type: String, require: true },
});

const userCompanySchema = new mongoose.Schema({
  uniqueid: { type: String, require: true },
  company: { type: String, require: true },
  phone: { type: String, require: true },
});

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  username: { type: String, require: true },
  email: { type: String, require: true },
  company: { type: userCompanySchema, require: true },
  address: { type: userAddressSchema, require: true },
});

const User = mongoose.model("user", userSchema);
export default User;
