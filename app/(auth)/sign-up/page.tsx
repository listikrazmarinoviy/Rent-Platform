"use client";

import React, { useCallback, useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Divider,
  message,
  Steps,
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
  const [current, setCurrent] = useState(0);
  const [userData, setUserData] = useState({});
  // console.log(userData);

  const content = "This is a content.";

  const registerUser = useCallback(async (values: SignUpFormValues) => {
    setLoading(true);
    try {
      // Avoid console.log during initial render as it can cause hydration mismatch
      if (typeof window !== "undefined") {
        console.log("Sign up v:", values);
      }
      await new Promise((resolve) => setTimeout(resolve, 1500));
      message.success("Account created successfully");
    } catch (error) {
      message.error("Failed to create account");
    } finally {
      setLoading(false);
    }
  }, []);

  const onFinish = useCallback(
    (values: SignUpFormValues) => {
      setUserData({ ...userData, ...values });

      if (current == 2) {
        registerUser(values);
      } else {
        setCurrent((pr) => pr + 1);
      }
    },
    [current, registerUser]
  );

  const handleSocialSignUp = (provider: string) => {
    message.warning(`Sign up with ${provider} - Integration needed`);
  };

  return (
    <div className="relative flex h-screen w-full flex-col justify-center sm:p-0 lg:flex-row">
      <div
        className="hidden h-full w-full items-center lg:grid lg:w-1/2"
        style={{
          backgroundImage:
            "url('https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <p className="text-6xl font-bold text-white mb-4 text-center">
          hello world
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-md min-w-xs flex-1 flex-col justify-center">
        <div className="h-full mt-[25%]">
          <div className="mb-2">
            <Title level={2} style={{ marginBottom: 8 }}>
              {"Royhatdan otish"}
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

          <div style={{ flex: 1 }} className="mb-10">
            <Steps
              current={current}
              size="small"
              items={[
                {
                  title: "Name",
                },
                {
                  title: "Email",
                },
                {
                  title: "Password",
                },
              ]}
            />
          </div>

          <Form
            form={form}
            name="signup"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            autoComplete="off"
          >
            {current === 0 ? (
              <>
                <Form.Item
                  name="firstName"
                  rules={[
                    { required: false, message: "" },
                    {
                      min: 1,
                      message: "Username must be at least 3 characters!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Ism" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    { required: false, message: "" },
                    {
                      min: 1,
                      message: "Username must be at least 3 characters!",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Familiya" />
                </Form.Item>
              </>
            ) : current === 1 ? (
              <>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email!",
                    },
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 2,
                      message: "Password must be at least 8 characters!",
                    },
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
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match!")
                        );
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
              </>
            )}

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
                {current === 2 ? "Sign Up" : "Next"}
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
      </div>
    </div>
  );
};

export default SignUpPage;
