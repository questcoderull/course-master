import { Link } from "react-router";

const CourseCard = ({ course }) => {
  const { id, title, instructor, price, thumbnail, category } = course;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-300">
      <figure className="h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>

        <p className="text-sm text-base-content/70">
          Instructor: <span className="font-medium">{instructor}</span>
        </p>

        <p className="badge badge-primary badge-outline mt-1">{category}</p>

        <div className="flex justify-between items-center mt-3">
          <p className="text-xl font-bold">${price}</p>

          <Link to={`/courses/${id}`} className="btn btn-sm btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
