"use client";

import React from "react";
import { Form, Input, Button, Checkbox, Typography, Card, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
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
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values: SignUpFormValues) => {
    setLoading(true);
    try {
      console.log("Sign in v:", values);

      await new Promise((resolve) => setTimeout(resolve, 1500));
      message.success("Account created successfully!");
    } catch (error) {
      message.error("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
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
              Sign in
            </Title>
            <Text type="secondary">Sign in</Text>
          </div>
          <Form
            form={form}
            name="signup"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            autoComplete="off"
          >
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
              If you don't have account!{" "}
              <Link href="/sign-up" style={{ fontWeight: 500 }}>
                Sign up
              </Link>
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
