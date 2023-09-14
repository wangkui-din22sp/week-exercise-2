import './Course.css';

function Course({ name, courseId, studentPositions, }) {
  return (
    <div className="Course">
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>Student Positions: {studentPositions}</p>
    </div>
  );
}

export default Course;