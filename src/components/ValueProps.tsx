import {
  Target,
  TrendingUp,
  Network,
  BookOpen,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ValueProps() {
  const titleAnimation = useScrollAnimation(0.1);
  const cardsAnimation = useScrollAnimation(0.1);
  const capabilitiesAnimation = useScrollAnimation(0.1);
  const features = [
    {
      icon: Target,
      title: "Stay Organized",
      description:
        "Never miss an assignment, deadline, or important task. Your AI agent keeps everything in perfect order.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Build Executive Skills",
      description:
        "Develop time management, planning, and organizational skills that last a lifetime.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Network,
      title: "Connected Support",
      description:
        "Parents, teachers, and mentors work together through interconnected AI agents.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const capabilities = [
    {
      icon: BookOpen,
      title: "Assignment Tracking",
      description: "Automatically sync with your LMS or manually add tasks",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered time blocking and priority management",
    },
    {
      icon: MessageSquare,
      title: "Family Communication",
      description: "Seamless updates between student and parent agents",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Value Props */}
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 transition-all duration-700 ${
            titleAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three pillars of student success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI agents work together to create a comprehensive support system
            that grows with your student's needs.
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative h-full transition-all duration-700 ${
                cardsAnimation.isVisible 
                  ? `animate-stagger-${index + 1}` 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div 
          ref={capabilitiesAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`bg-white rounded-3xl p-12 shadow-xl transition-all duration-700 ${
            capabilitiesAnimation.isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful capabilities, simple experience
            </h3>
            <p className="text-lg text-gray-600">
              Everything you need to stay on top of your academic life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h4>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
