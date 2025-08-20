import React, { useState } from "react";
import {
  GraduationCap,
  Building,
  Users,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";

export default function TargetAudience() {
  const [activeView, setActiveView] = useState("families");

  const views = {
    families: {
      icon: Users,
      title: "For Families & Students",
      subtitle: "Empower your student's academic journey",
      benefits: [
        {
          icon: CheckCircle,
          title: "Immediate Impact",
          description:
            "See improvements in organization and time management within weeks",
        },
        {
          icon: Star,
          title: "Skill Building",
          description:
            "Develop executive functioning skills that benefit students for life",
        },
        {
          icon: TrendingUp,
          title: "Better Outcomes",
          description:
            "Higher grades, reduced stress, and increased confidence",
        },
      ],
      // testimonial: {
      //   quote: "It is your AI personal assistant. My grades.",
      //   author: "Junior High Student",
      //   rating: 5
      // }
    },
    administrators: {
      icon: Building,
      title: "For Teachers & School Administrators",
      subtitle: "Support your students and families at scale",
      benefits: [
        {
          icon: CheckCircle,
          title: "Reduced Support Load",
          description: "Fewer parent calls about missed assignments",
        },
        {
          icon: TrendingUp,
          title: "Teacher Agents",
          description:
            "Your AI agent tells you which students are struggling and exactly how to help them succeed, support, challenge, or redirect.",
        },
        {
          icon: Star,
          title: "Improved Outcomes",
          description:
            "Students develop better organizational habits and academic performance",
        },
      ],
      // testimonial: {
      //   quote: "Wit AI has transformed how our families stay organized. Grades have improved. Missing assignments have decreased. This is the AI part of education.",
      //   author: "Dr. Dan Buikema, Assistant Principal",
      //   rating: 5
      // }
    },
  };

  const currentView = views[activeView as keyof typeof views];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* View Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {Object.entries(views).map(([key, view]) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeView === key
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <view.icon className="w-5 h-5" />
                <span>
                  {key === "families"
                    ? "Families & Students"
                    : "School Administrators"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <currentView.icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentView.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentView.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentView.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        {/* <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              {[...Array(currentView.testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
              "{currentView.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">{currentView.testimonial.author}</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="text-center mt-16">
          {activeView === "families" ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/wit-ai/id6748923692"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=ai.wit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          ) : (
            <div className="flex justify-center">
              <a
                href="https://calendly.com/hi-witagent/demo-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-wit-green to-wit-blue hover:from-wit-green/90 hover:to-wit-blue/90 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
