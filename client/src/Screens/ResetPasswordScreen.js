import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { resetpassword } from "../axios";
import toast from 'react-hot-toast';

const ResetPasswordScreen = () => {
  const [formData, setFormData] = useState({
    email:"",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Yeni şifreler eşleşmiyor");
      return;
    }
  
    resetpassword(formData)
      .then(() => {
        toast.success("Şifre başarıyla değiştirildi");
        
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div>
    <h2>Şifrenizi Değiştirin</h2>
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Eposta Adresiniz</Form.Label>
        <Form.Control
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </Form.Group>
      

      <Form.Group controlId="newPassword">
        <Form.Label>Yeni Şifreniz</Form.Label>
        <Form.Control
          type="password"
          value={formData.newPassword}
          onChange={(e) =>
            setFormData({ ...formData, newPassword: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Yeni Şifrenizi Onaylayın</Form.Label>
        <Form.Control
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </Form.Group>
      <Button type="submit">Şifreyi Değiştir</Button>
    </Form>
  </div>
);
};

export default ResetPasswordScreen;