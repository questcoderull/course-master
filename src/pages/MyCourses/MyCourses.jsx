import React from "react";
import { FaPlay, FaBookOpen, FaCheckCircle } from "react-icons/fa";
import { GoClock } from "react-icons/go";

const mockCourses = [
  {
    id: "course101",
    title: "Full-Stack Web Development with MERN",
    instructor: "John Doe",
    thumbnail: "https://i.ibb.co/02H7pS9/mern.jpg",
    lessons: [
      { title: "Getting Started with MERN", duration: "15:30" },
      { title: "React Components & Props", duration: "20:10" },
    ],
    progress: 40,
  },
  {
    id: "course102",
    title: "Advanced JavaScript Mastery",
    instructor: "Sarah Johnson",
    thumbnail: "https://i.ibb.co/CJc7n5p/javascript.jpg",
    lessons: [
      { title: "Understanding Variables & Scope", duration: "18:45" },
      { title: "Introduction to Async/Await", duration: "22:00" },
    ],
    progress: 55,
  },
  {
    id: "course103",
    title: "React for Beginners — Zero to Hero",
    instructor: "Michael Smith",
    thumbnail: "https://i.ibb.co/yBQBycn/react.jpg",
    lessons: [
      { title: "React Overview", duration: "12:40" },
      { title: "Using useState & useEffect", duration: "25:55" },
    ],
    progress: 100, // COMPLETED EXAMPLE
  },
];

const MyCourses = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold pb-5">My Courses</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockCourses.map((course) => {
          const isCompleted = course.progress === 100;

          return (
            <div
              key={course.id}
              className={`card bg-base-100 shadow-xl border ${
                isCompleted ? "border-success" : "border-transparent"
              }`}
            >
              <figure>
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                {/* Title + Completed Badge */}
                <div className="flex justify-between items-start">
                  <h2 className="card-title text-xl">{course.title}</h2>

                  {isCompleted && (
                    <span className="badge badge-success gap-1 flex items-center">
                      <FaCheckCircle /> Completed
                    </span>
                  )}
                </div>

                <p className="text-sm opacity-70">
                  Instructor: {course.instructor}
                </p>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>

                  <progress
                    className={`progress w-full ${
                      isCompleted ? "progress-success" : "progress-primary"
                    }`}
                    value={course.progress}
                    max="100"
                  ></progress>
                </div>

                {/* Completed Message */}
                {isCompleted ? (
                  <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-700">
                    <p className="font-semibold">
                      🎉 You have finished this course!
                    </p>
                    <p className="text-sm opacity-80">
                      You can review lessons anytime.
                    </p>
                  </div>
                ) : (
                  /* Next Lesson (Only if NOT completed) */
                  <div className="mt-4 border p-3 rounded-lg">
                    <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <FaBookOpen /> Next Lesson:
                    </h3>

                    <p className="font-medium">{course.lessons[0].title}</p>

                    <p className="text-sm opacity-70 flex items-center gap-2 mt-1">
                      <GoClock /> {course.lessons[0].duration}
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="card-actions justify-end mt-4">
                  {isCompleted ? (
                    <button className="btn btn-success btn-sm">
                      Review Course
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-sm flex items-center gap-2">
                      <FaPlay /> Continue
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCourses;
