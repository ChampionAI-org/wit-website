import React, { useState } from 'react';
import { GraduationCap, Building, Users, CheckCircle, Star, TrendingUp } from 'lucide-react';

export default function TargetAudience() {
  const [activeView, setActiveView] = useState('families');

  const views = {
    families: {
      icon: Users,
      title: "For Families & Students",
      subtitle: "Empower your student's academic journey",
      benefits: [
        {
          icon: CheckCircle,
          title: "Immediate Impact",
          description: "See improvements in organization and time management within weeks"
        },
        {
          icon: Star,
          title: "Skill Building",
          description: "Develop executive functioning skills that benefit students for life"
        },
        {
          icon: TrendingUp,
          title: "Better Outcomes",
          description: "Higher grades, reduced stress, and increased confidence"
        }
      ],
      testimonial: {
        quote: "It is your AI personal assistant. My grades.",
        author: "Junior High Student",
        rating: 5
      }
    },
    administrators: {
      icon: Building,
      title: "For School Administrators",
      subtitle: "Support your students and families at scale",
      benefits: [
        {
          icon: CheckCircle,
          title: "Reduced Support Load",
          description: "Fewer parent calls about missed assignments and scheduling conflicts"
        },
        {
          icon: Star,
          title: "Improved Outcomes",
          description: "Students develop better organizational habits and academic performance"
        },
        {
          icon: TrendingUp,
          title: "Family Engagement",
          description: "Strengthen the home-school connection with better communication tools"
        }
      ],
      testimonial: {
        quote: "StudySync AI has transformed how our families stay organized. We've seen a 40% reduction in missed assignments and much happier parents.",
        author: "Dr. Jennifer Rodriguez, Principal",
        rating: 5
      }
    }
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
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <view.icon className="w-5 h-5" />
                <span>{key === 'families' ? 'Families & Students' : 'School Administrators'}</span>
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
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
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
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          {activeView === 'families' ? (
            <div className="space-y-4">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mr-4">
                Start Free Trial
              </button>
              <button className="border-2 border-indigo-500 hover:border-indigo-600 text-indigo-600 hover:text-indigo-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-indigo-50">
                Learn More
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mr-4">
                Schedule School Demo
              </button>
              <button className="border-2 border-indigo-500 hover:border-indigo-600 text-indigo-600 hover:text-indigo-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-indigo-50">
                Request Partnership Info
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}