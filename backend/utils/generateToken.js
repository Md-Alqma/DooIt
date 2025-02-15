import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const payload = { username: user.username, email: user.email, _id: user._id };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
};

export default generateToken;
