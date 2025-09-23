import React from "react";
import { Quote, ArrowUp } from "lucide-react";

interface VideoTestimonialProps {
  videoId: string; // YouTube video ID
  title?: string;
  subtitle?: string; // Added subtitle prop
  description?: string;
  testimonialText?: string;
  authorName?: string;
  authorRole?: string;
}

export default function VideoTestimonial({
  videoId,
  title = "See Wit AI in Action",
  subtitle = "(Formerly Champion AI)", // Default subtitle
  description = "Watch how students and families are transforming their academic experience with Wit AI",
  testimonialText = "Wit AI has completely changed how I manage my schoolwork. I'm more organized and less stressed than ever before.",
  authorName = "Student Success Story",
  authorRole = "High School Student",
}: VideoTestimonialProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b0b0b] dark:to-[#0b0b0b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={
              "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white " +
              (subtitle ? "mb-0" : "mb-2")
            }
          >
            {title}
          </h2>
          {subtitle && (
            <div className="mb-4">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {subtitle}
              </span>
            </div>
          )}
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div className="relative">
            {/* YouTube Video Embed */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
                title="Wit AI Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Name Change Note */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-700 rounded-md px-3 py-1.5 inline-block">
                📝 Note: This video features our previous name "Champion AI" —
                we're now Wit.ai with the same great features!
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-wit-blue/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-wit-green/10 rounded-full blur-xl"></div>
          </div>

          {/* Testimonial Text Section */}
          <div className="space-y-6">
            {/* Quote */}
            <div className="relative">
              <Quote className="absolute -top-1 -left-1 w-6 h-6 text-wit-blue/20" />
              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed pl-6">
                "{testimonialText}"
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-wit-blue to-wit-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {authorName.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">
                  {authorName}
                </div>
                <div className="text-gray-600 dark:text-slate-300 text-sm">{authorRole}</div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 border-t border-gray-200 dark:border-zinc-700/70">
              <div className="flex items-center justify-between text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">500+</div>
                  <div className="text-xs text-gray-600 dark:text-slate-300">Happy Students</div>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-zinc-700"></div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    Up to 75%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-slate-300">
                    Reduction in Missing Assignments
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-zinc-700"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-wit-green flex items-center justify-center gap-1">
                    11% <ArrowUp className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-gray-600 dark:text-slate-300">GPA Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
