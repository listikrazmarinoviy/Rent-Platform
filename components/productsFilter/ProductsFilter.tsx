"use client";

import { useState } from "react";
import { Tag, Rate, Button } from "antd";
import {
  EnvironmentOutlined,
  StarFilled,
  RightOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export default function ProductsFilter() {
  const [activeCity, setActiveCity] = useState("tashkent");
  const { t } = useTranslation();

  const cities = [
    { id: "tashkent", name: "Tashkent", label: "Hotel" },
    { id: "samarkand", name: "Samarkand", label: "Hotel" },
    { id: "bukhara", name: "Bukhara", label: "Hotel" },
    { id: "khiva", name: "Khiva", label: "Hotel" },
  ];

  const properties = [
    {
      id: 1,
      name: "Hyatt Regency Tashkent",
      location: "Tashkent City Center",
      price: 2300.0,
      rating: 4.8,
      reviews: 1250,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
      tag: "Hotel",
      features: ["WiFi", "Parking", "Breakfast", "Pool"],
    },
    {
      id: 2,
      name: "Hilton Tashkent City",
      location: "Yunusabad District",
      price: 1850.0,
      rating: 4.7,
      reviews: 980,
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80",
      tag: "Hotel",
      features: ["WiFi", "Gym", "Restaurant", "Spa"],
    },
    {
      id: 3,
      name: "Mercure Hotel Tashkent",
      location: "Mirabad District",
      price: 1560.0,
      rating: 4.6,
      reviews: 756,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
      tag: "Hotel",
      features: ["WiFi", "Parking", "Bar", "Conference"],
    },
    {
      id: 4,
      name: "Wyndham Tashkent",
      location: "Shaykhontohur District",
      price: 1280.0,
      rating: 4.5,
      reviews: 624,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
      tag: null,
      features: ["WiFi", "Parking", "Breakfast", "Safe"],
    },
  ];

  const PropertyCard = ({ property }: any) => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div className="relative">
          {property.tag && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
              {property.tag}
            </div>
          )}
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-gray-800 line-clamp-1 flex-1">
              {property.name}
            </h3>
            <div className="ml-2">
              <Rate
                disabled
                defaultValue={Math.floor(property.rating)}
                className="text-xs"
              />
            </div>
          </div>

          <div className="flex items-center text-gray-600 text-sm mb-3">
            <EnvironmentOutlined
              className="mr-1"
              style={{ color: "#7613AB" }}
            />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {property.features
              .slice(0, 3)
              .map((feature: any, index: number) => (
                <Tag
                  key={index}
                  className="text-xs"
                  style={{ borderColor: "#A4ACD3", color: "#7613AB" }}
                >
                  {feature}
                </Tag>
              ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t">
            <div>
              <span className="text-gray-500 text-xs">From </span>
              <span className="text-2xl font-bold" style={{ color: "#7613AB" }}>
                {property.price.toFixed(1)}$
              </span>
              <span className="text-gray-500 text-xs"> {t("rise")}</span>
            </div>
            <div className="text-xs text-gray-500">
              <StarFilled className="text-yellow-500 mr-1" />
              {property.rating} ({property.reviews})
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {t("Most")}
              <span style={{ color: "#7613AB" }}> {t("Searched")}</span>
            </h2>
            <p className="text-gray-600">Hotel Recommendations</p>
          </div>
          <Button
            type="text"
            className="text-gray-600 hover:text-[#7613AB]"
            icon={<RightOutlined />}
          >
            {t("More")}
          </Button>
        </div>

        <div className="flex items-center space-x-3 mb-8 overflow-x-auto pb-2">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setActiveCity(city.id)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                activeCity === city.id
                  ? "text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#7613AB]"
              }`}
              style={
                activeCity === city.id
                  ? {
                      background:
                        "linear-gradient(135deg, #7613AB 0%, #7B45BD 100%)",
                    }
                  : {}
              }
            >
              {city.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            size="large"
            className="px-8"
            style={{
              borderColor: "#7613AB",
              color: "#7613AB",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #7613AB 0%, #7B45BD 100%)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#7613AB";
              e.currentTarget.style.borderColor = "#7613AB";
            }}
          >
            {t("View More Hotels")}
          </Button>
        </div>
      </div>
    </div>
  );
}
