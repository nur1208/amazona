import jwt from "jsonwebtoken";
// import process from "process";
/* global process */

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingSecret",
    { expiresIn: "30d" }
  );
};
