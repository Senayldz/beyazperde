import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/password", async (req, res) => {
  const { email } = req.body;

  try {
    // Şifre sıfırlama bağlantısı için bir token oluşturun

    // Şifre sıfırlama verilerini veritabanına kaydedin
    await ForgotPassword.create({ email, resetToken });


    res.status(200).json({ message: "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi." });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu." });
  }
});


export default router;
