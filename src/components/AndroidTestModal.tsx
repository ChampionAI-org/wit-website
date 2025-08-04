import React, { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "../lib/supabase";

interface AndroidTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AndroidTestModal({
  isOpen,
  onClose,
}: AndroidTestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from("android_waitlist_signups")
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        throw error;
      }

      console.log("Successfully added to waitlist:", data);
      setIsSubmitted(true);

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({ name: "", email: "" });
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error signing up for test:", error);
      // Show the error message to the user in the alert for easier debugging
      alert(`There was an error signing up. Please try again.\n\n${error?.message || error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Join Android Beta Test
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isSubmitted ? (
            /* Success message */
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                You're all set!
              </h4>
              <p className="text-gray-600">
                We'll add you as a test user and send you the download link
                within 24 hours.
              </p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Get early access to Wit AI for Android! We'll add you as a
                  test user and send you the download link.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Gmail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern=".*@gmail\.com$"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@gmail.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Must be a Gmail address associated with your Android device
                  </p>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-lg transition-colors"
                >
                  {isSubmitting ? "Signing Up..." : "Join Beta Test"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
