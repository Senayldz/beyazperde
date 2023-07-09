import express from "express";
import { v4 as uuidv4 } from "uuid";
import { sendResetPasswordEmail } from "../emailService.js"; // E-posta gönderme servisi

const router = express.Router();

router.post("/password", async (req, res) => {
  const { email } = req.body;

  try {
    // Şifre sıfırlama bağlantısı için bir token oluşturun
    const resetToken = generateResetToken();

    // Şifre sıfırlama verilerini veritabanına kaydedin
    await ForgotPassword.create({ email, resetToken });

    // Şifre sıfırlama bağlantısını e-posta ile kullanıcıya gönderin
    await sendResetPasswordEmail(email, resetToken); // E-posta gönderme fonksiyonu

    res.status(200).json({ message: "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi." });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu." });
  }
});

function generateResetToken() {
  // UUID kütüphanesini kullanarak rastgele bir token oluşturun
  const token = uuidv4();
  return token;
}

export default router;
