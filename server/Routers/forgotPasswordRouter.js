import express from "express";
import User from "../models/User"; // Kullanıcı modelini dahil edin
import ForgotPassword from "../models/ForgotPassword"; // Şifre sıfırlama modelini dahil edin

const router = express.Router();

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    // Kullanıcıyı e-posta adresine göre bulun
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Şifre sıfırlama işlemi için bir token oluşturun
    const resetToken = generateResetToken();

    // Şifre sıfırlama verilerini veritabanına kaydedin
    await ForgotPassword.create({ email, resetToken });

    // Şifre sıfırlama bağlantısını e-posta ile kullanıcıya gönderin

    res
      .status(200)
      .json({ message: "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi." });
  } catch (error) {
    res.status(500).json({ error: "Bir hata oluştu." });
  }
});

function generateResetToken() {
  // Token oluşturma işlemleri burada gerçekleştirilecek
  // Örneğin, UUID gibi bir kütüphane kullanabilirsiniz
  const token = generateUUID(); // UUID oluşturma fonksiyonu
  return token;
}

export default router;
