"use client";

import { useState } from "react";
import { Button, Drawer } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  SearchOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const menuItems = [
    { key: "home", label: "Home", icon: <HomeOutlined /> },
    { key: "properties", label: "Properties", icon: <SearchOutlined /> },
    { key: "about", label: "About Us" },
    { key: "contact", label: "Contact", icon: <PhoneOutlined /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="" width={50} height={50} />
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#7613AB" }}>
                Name
              </h1>
              <p className="text-xs" style={{ color: "#A4ACD3" }}>
                Find Your Dream Apartment
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="text-gray-700 hover:text-[#7613AB] font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => router.push("/sign-in")}
              icon={<UserOutlined />}
              className="border-[#7613AB] text-[#7613AB] hover:bg-[#7613AB] hover:text-white transition-all duration-200"
            >
              Sign In
            </Button>
            <Button
              type="primary"
              className="text-white shadow-lg hover:shadow-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #7613AB 0%, #7B45BD 100%)",
                border: "none",
              }}
            >
              List Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuOutlined className="text-2xl" style={{ color: "#7613AB" }} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center space-x-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7613AB 0%, #7B45BD 100%)",
              }}
            >
              <HomeOutlined className="text-white text-xl" />
            </div>
            <span style={{ color: "#7613AB" }} className="font-bold">
              Name
            </span>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
      >
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.icon && <span className="text-[#7613AB]">{item.icon}</span>}
              <span className="text-gray-700 font-medium">{item.label}</span>
            </a>
          ))}
          <div className="pt-4 border-t space-y-3">
            <Button
              icon={<UserOutlined />}
              block
              className="border-[#7613AB] text-[#7613AB]"
            >
              Sign In
            </Button>
            <Button
              type="primary"
              block
              style={{
                background: "linear-gradient(135deg, #7613AB 0%, #7B45BD 100%)",
                border: "none",
              }}
            >
              List Property
            </Button>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
