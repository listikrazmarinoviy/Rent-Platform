"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
  Divider,
  message,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Title, Text } = Typography;

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
}

const SignUpPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: SignUpFormValues) => {
    setLoading(true);
    try {
      console.log("Sign up v:", values);

      await new Promise((resolve) => setTimeout(resolve, 1500));
      message.success("Account created successfully");
    } catch (error) {
      message.error("Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignUp = (provider: string) => {
    message.warning(`Sign up with ${provider} - Integration needed`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "450px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
          borderRadius: "12px",
        }}
      >
        <div>
          <div className="text-center mb-2">
            <Title level={2} style={{ marginBottom: 8 }}>
              Create Account
            </Title>
            <Text type="secondary">Sign up</Text>
          </div>

          <Button
            icon={<GoogleOutlined />}
            size="large"
            block
            className="mb-3"
            onClick={() => handleSocialSignUp("Google")}
          >
            Continue with Google
          </Button>

          <Divider>
            <Text type="secondary">or</Text>
          </Divider>

          <Form
            form={form}
            name="signup"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                { required: false, message: "" },
                { min: 1, message: "Username must be at least 3 characters!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 2, message: "Password must be at least 8 characters!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("Please accept the agreement")
                        ),
                },
              ]}
            >
              <Checkbox>
                I agree to the{" "}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Terms and Conditions
                </a>
              </Checkbox>
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                style={{
                  height: "48px",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <div style={{ textAlign: "center" }}>
            <Text type="secondary">
              Already have an account?{" "}
              <Link href="/sign-in" style={{ fontWeight: 500 }}>
                Sign in
              </Link>
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
