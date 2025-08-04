import React from "react";
import { Check, LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  popular?: boolean;
  savings?: string;
}

export default function ProductCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  popular,
  savings,
}: ProductCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      <div className="text-center">
        {/* Product Header */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            {popular && (
              <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full mt-1">
                Popular
              </span>
            )}
            {savings && (
              <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mt-1">
                {savings}
              </span>
            )}
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-8">{description}</p>

        {/* Features */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-gray-700 text-left">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
