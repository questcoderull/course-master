import CourseCard from "../CourseCard/CourseCard";
import courseData from "../../assets/Data/CourseData.json";
const CourseListing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
