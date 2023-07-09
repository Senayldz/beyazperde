import mongoose from "mongoose";

const forgotPasswordSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  resetToken: {
    type: String,
    required: true,
  },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: "15m" }, // Şifre sıfırlama bağlantısının 15 dakika süresi olacak
  },
});

const ForgotPassword = mongoose.model("ForgotPasswords", forgotPasswordSchema);

export default ForgotPassword;
