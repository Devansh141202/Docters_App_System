import { Button, Form, Input } from "antd";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import "./Register.css";
import registerImage from "./login-image.png";
import ReCAPTCHA from "react-google-recaptcha";
import "./ForgotPassword.css";
import ResetPassword from "./ResetPassword";
<<<<<<< HEAD
import VerifyEmail from "./VerifyEmail";
=======
import MainLogo from "../logo1.png";
>>>>>>> d7dd115359c729a2d92d0b1b3b6188983c95e8c2

export default function ForgotPassword() {
  const captchaRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/send-forgot-password-email",
        values
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <>
    <VerifyEmail></VerifyEmail>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          gap: "10px",
          marginTop: "50px",
          padding: "10px",
        }}
      >
        <div>
          <img src={MainLogo} alt="logo" width={"100px"} height={"100px"} />
        </div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          Forgot Password
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            fontSize: "20px",
          }}
        >
          just type your email, we will send you email to reset your password
        </div>
        <div className="forgot-password-card">
          <Form
            style={{ display: "flex", flexDirection: "column" }}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>

            <button
              className="register-button"
              style={{ alignSelf: "center" }}
              htmlType="submit"
            >
              Send Link to Email
            </button>
            <Link to="/login" className="link-for-login">
              <span> Remember Your Password ?</span>
              <span> Login here</span>
            </Link>
          </Form>
        </div>
      </div> */}
    </>
  );
}
