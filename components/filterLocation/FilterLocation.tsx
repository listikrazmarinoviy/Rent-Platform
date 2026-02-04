"use client";

import { useState } from "react";
import { DatePicker, Select, Input, Button, Carousel } from "antd";
import {
  SearchOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

// it is just static design when url wil be ready i make this screen dynamic

export default function FilterLocation() {
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState(null);
  const [propertyType, setPropertyType] = useState("unlimited");
  const [guests, setGuests] = useState("1间, 1位");

  const { t } = useTranslation();

  const uzbekistanCities = [
    { value: "tashkent", label: "Tashkent" },
    { value: "samarkand", label: "Samarkand" },
    { value: "bukhara", label: "Bukhara" },
    { value: "khiva", label: "Khiva" },
    { value: "andijan", label: "Andijan" },
    { value: "fergana", label: "Fergana" },
    { value: "namangan", label: "Namangan" },
    { value: "nukus", label: "Nukus" },
  ];

  const propertyTypes = [
    { value: "unlimited", label: "No Limit" },
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
    { value: "villa", label: "Villa" },
    { value: "studio", label: "Studio" },
  ];

  const guestOptions = [
    { value: "1间, 1位", label: "1 Room, 1 Guest" },
    { value: "1间, 2位", label: "1 Room, 2 Guests" },
    { value: "2间, 3位", label: "2 Rooms, 3 Guests" },
    { value: "2间, 4位", label: "2 Rooms, 4 Guests" },
  ];

  const promoImages = [
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  ];

  const heroImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    "https://www.orchidhotel.com/static/website/img/hotels/panchgani/homepage_slider/homepage_slider.webp",
  ];

  const handleSearch = () => {
    console.log({ location, dateRange, propertyType, guests });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
              <h2 className="text-2xl font-bold" style={{ color: "#7613AB" }}>
                {t("Book Hotel")}
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("Destination/Hotel Name")}
                </label>
                <Input
                  size="large"
                  placeholder="Tashkent"
                  prefix={<EnvironmentOutlined style={{ color: "#7613AB" }} />}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="hover:border-[#7613AB] focus:border-[#7613AB]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Check-in")}
                  </label>
                  <DatePicker
                    size="large"
                    className="w-full hover:border-[#7613AB] focus:border-[#7613AB]"
                    placeholder={t("Today")}
                    format="YYYY-MM-DD"
                    suffixIcon={
                      <CalendarOutlined style={{ color: "#7613AB" }} />
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Check-out")}
                  </label>
                  <DatePicker
                    size="large"
                    className="w-full hover:border-[#7613AB] focus:border-[#7613AB]"
                    placeholder={t("Tomorrow")}
                    format="YYYY-MM-DD"
                    suffixIcon={
                      <CalendarOutlined style={{ color: "#7613AB" }} />
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Rooms and guests")}
                  </label>
                  <Select
                    size="large"
                    value={guests}
                    onChange={setGuests}
                    options={guestOptions}
                    className="w-full"
                    suffixIcon={<UserOutlined style={{ color: "#7613AB" }} />}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Hotel level")}
                  </label>
                  <Select
                    size="large"
                    value={propertyType}
                    onChange={setPropertyType}
                    options={propertyTypes}
                    className="w-full"
                    suffixIcon={<HomeOutlined style={{ color: "#7613AB" }} />}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Keywords")}
                  </label>
                  <Input
                    size="large"
                    placeholder={t("train")}
                    className="hover:border-[#7613AB] focus:border-[#7613AB]"
                  />
                </div>
              </div>

              <Button
                type="primary"
                size="large"
                icon={<SearchOutlined />}
                onClick={handleSearch}
                className="w-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                style={{
                  background:
                    "linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)",
                  border: "none",
                  height: "50px",
                  fontSize: "16px",
                }}
              >
                {t("Search")}
              </Button>
            </div>

            <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl shadow-xl overflow-hidden relative h-40">
              <Carousel autoplay autoplaySpeed={2000} dots={true}>
                {promoImages.map((image, index) => (
                  <div key={index} className="relative h-40">
                    <img
                      src={image}
                      alt={`Promo ${index + 1}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-transparent flex items-center px-8">
                      <div className="text-white">
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                          25$
                        </div>
                        <h3 className="text-2xl font-bold">
                          {t("Enjoy living in Tashkent, a lakeside retreat")}
                        </h3>
                        <p className="text-sm">
                          {t("Banyan Tree Yanggang Lake and Banyan Tree Hotel")}{" "}
                          →
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #7613AB 0%, #7B45BD 100%)",
                    }}
                  >
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "#7613AB" }}>
                      AI
                    </h4>
                    <p className="text-xs text-gray-500">
                      {t("A one-stop shop for a perfect journey")}→
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">
                      {t("Tourist map")}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {t("Explore Great Places to Go")} →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[600px]">
              <Carousel
                autoplay
                autoplaySpeed={3000}
                effect="fade"
                className="h-full"
              >
                {heroImages.map((image, index) => (
                  <div key={index} className="relative h-[600px]">
                    <img
                      src={image}
                      alt={`Hero ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                          <h3 className="text-2xl font-bold mb-2">
                            {t("Guilin Must-Stay Hotel Guide")}
                          </h3>
                          <p className="text-sm mb-4">12°C~17°C</p>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2">
                              <img
                                src={heroImages[0]}
                                alt=""
                                className="w-full h-16 object-cover rounded mb-1"
                              />
                              <p className="text-xs truncate">
                                {t("Hotels")}...
                              </p>
                              <p className="text-xs font-bold">200$</p>
                            </div>
                            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2">
                              <img
                                src={heroImages[1]}
                                alt=""
                                className="w-full h-16 object-cover rounded mb-1"
                              />
                              <p className="text-xs truncate">
                                {t("Hotels")}...
                              </p>
                              <p className="text-xs font-bold">200$</p>
                            </div>
                            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2">
                              <img
                                src={heroImages[2]}
                                alt=""
                                className="w-full h-16 object-cover rounded mb-1"
                              />
                              <p className="text-xs truncate">
                                {t("Hotels")}...
                              </p>
                              <p className="text-xs font-bold">200$</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
