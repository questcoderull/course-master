import { NavLink, useParams } from "react-router";
import courseData from "../../assets/Data/CourseData.json";

const CourseDetails = () => {
  const { id } = useParams();

  // Find the course by id
  const course = courseData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 mt-10">
      {/* Course Header */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-3">{course.title}</h1>
          <p className="text-lg text-base-content/70 mb-2">
            Instructor: <span className="font-medium">{course.instructor}</span>
          </p>
          <p className="badge badge-primary badge-outline mb-3">
            {course.category}
          </p>
          <p className="text-xl font-bold mb-4">${course.price}</p>
          <NavLink to="/payment">
            <button className="btn btn-primary btn-lg">Enroll Now</button>
          </NavLink>
        </div>
      </div>

      {/* Course Description */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-base-content/80">{course.description}</p>
      </div>

      {/* Syllabus */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Syllabus</h2>
        <ul className="list-disc list-inside space-y-1">
          {course.syllabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* demo lessons */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Demo lessons</h2>
        <div className="space-y-6">
          {course.lessons.map((lesson, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">{lesson.title}</h3>
              <p className="text-sm text-base-content/70 mb-2">
                Duration: {lesson.duration}
              </p>
              <div className="aspect-video">
                <iframe
                  src={lesson.videoUrl}
                  title={lesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
