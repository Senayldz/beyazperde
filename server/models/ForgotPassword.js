import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Şifremi Unuttum endpoint'ine istek gönderme işlemleri burada gerçekleştirilecek
  };

  return (
    <div>
      <h2>Şifremi Unuttum</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="email">
          <Form.Label>E-posta Adresi</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresinizi girin"
          />
        </Form.Group>
        <Button type="submit">Şifre Sıfırlama Bağlantısı Gönder</Button>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
