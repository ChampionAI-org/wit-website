import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, AlertTriangle, CheckCircle } from "lucide-react";

interface Assignment {
  id: string;
  title: string;
  dueDate: Date;
  completed: boolean;
  subject: string;
}

export default function CalendarDemo() {
  const [currentViewDate, setCurrentViewDate] = useState(new Date());
  const today = new Date(); // Always use actual current date for missing assignment logic

  // Sample assignments
  const assignments: Assignment[] = [
    {
      id: "1",
      title: "Math Quiz Chapter 5",
      dueDate: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      completed: false,
      subject: "Math"
    },
    {
      id: "2", 
      title: "History Essay",
      dueDate: new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      completed: true,
      subject: "History"
    },
    {
      id: "3",
      title: "Science Lab Report",
      dueDate: new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000), // Tomorrow
      completed: false,
      subject: "Science"
    },
    {
      id: "4",
      title: "English Presentation",
      dueDate: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000), // Next week
      completed: false,
      subject: "English"
    }
  ];

  // Critical fix: Use today's date, not the viewed date, to determine missing assignments
  const getMissingAssignments = () => {
    return assignments.filter(assignment => 
      !assignment.completed && assignment.dueDate < today
    );
  };

  const getAssignmentsForDate = (date: Date) => {
    return assignments.filter(assignment => 
      assignment.dueDate.toDateString() === date.toDateString()
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentViewDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentViewDate(newDate);
  };

  const getDaysInMonth = () => {
    const year = currentViewDate.getFullYear();
    const month = currentViewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    return date.toDateString() === today.toDateString();
  };

  const missingAssignments = getMissingAssignments();
  const days = getDaysInMonth();

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calendar Demo: Missing Assignment Fix
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate to any date - missing assignments are correctly based on <strong>today's date</strong>, not the viewed date.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  {formatDate(currentViewDate)}
                </h3>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Days of week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-3 text-center text-sm font-semibold text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((date, index) => {
                  const dayAssignments = date ? getAssignmentsForDate(date) : [];
                  
                  return (
                    <div key={index} className="aspect-square p-1">
                      {date ? (
                        <div className={`w-full h-full flex flex-col items-center justify-center rounded-lg text-sm relative ${
                          isToday(date) 
                            ? 'bg-blue-500 text-white font-bold' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}>
                          <span className="mb-1">{date.getDate()}</span>
                          {dayAssignments.length > 0 && (
                            <div className="flex flex-wrap gap-1 justify-center">
                              {dayAssignments.map(assignment => (
                                <div
                                  key={assignment.id}
                                  className={`w-2 h-2 rounded-full ${
                                    assignment.completed 
                                      ? 'bg-green-500' 
                                      : assignment.dueDate < today
                                      ? 'bg-red-500'
                                      : 'bg-blue-500'
                                  }`}
                                  title={assignment.title}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span>Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <span>Upcoming</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span>Overdue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Missing Assignments Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Missing Assignments
              </h3>
              
              <div className="text-sm text-gray-600 mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <strong>✅ Fixed:</strong> Missing assignments are always calculated based on <strong>today's date</strong> ({today.toLocaleDateString()}), regardless of which month you're viewing.
              </div>

              {missingAssignments.length > 0 ? (
                <div className="space-y-3">
                  {missingAssignments.map(assignment => (
                    <div key={assignment.id} className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="font-semibold text-red-900">{assignment.title}</div>
                      <div className="text-sm text-red-700">{assignment.subject}</div>
                      <div className="text-xs text-red-600">
                        Due: {assignment.dueDate.toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>No missing assignments!</span>
                </div>
              )}

              <div className="mt-6 text-sm text-gray-500">
                <p className="mb-2"><strong>The Fix:</strong></p>
                <p>
                  Instead of using the calendar view date to determine missing assignments, 
                  we always use the current date ({today.toLocaleDateString()}). 
                  This ensures navigation to future dates doesn't incorrectly show missing assignments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}