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
    <div
      className="rounded-2xl p-8 backdrop-blur-xl border shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]
                 bg-white/70 border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700
                 dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]"
    >
      <div className="text-center">
        {/* Product Header */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center ring-1 ring-zinc-300/60 dark:ring-zinc-600/60 bg-gradient-to-r ${gradient}
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_inset_0_-1px_0_rgba(24,24,27,0.2),_0_4px_10px_rgba(2,6,23,0.08)]`}
          >
            <Icon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{title}</h3>
            {popular && (
              <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full mt-1">
                Popular
              </span>
            )}
            {savings && (
              <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-semibold px-3 py-1 rounded-full mt-1">
                {savings}
              </span>
            )}
          </div>
        </div>

        <p className="text-lg text-zinc-600 dark:text-slate-400 mb-8">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-zinc-700 dark:text-slate-300 text-left">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
