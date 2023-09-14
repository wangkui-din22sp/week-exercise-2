import "./App.css";
import CourseList from "./CourseList";

function App({ courses }) {

//  const courses = 
//     [
//       { name: "HTML", courseId: "Y242-444", studentPositions: 30 },
//       { name: "JavaScript Basics", courseId: "Y242-445", studentPositions: 35 },
//       { name: "JavaScript Advanced", courseId: "Y242-446", studentPositions: 40 },
//       { name: "React", courseId: "Y242-447", studentPositions: 25 },
//     ]
//   ;

  return (
  <div className="App">
    <CourseList courses={courses} />
  </div>);
}

// These are default prop values for the App component
// You do not need to modify this code, you can simply start to use
// the value of the prop courses in your App component.
App.defaultProps = {
  courses: [
    { name: "HTML", courseId: "Y242-444", studentPositions: 30 },
    { name: "JavaScript Basics", courseId: "Y242-445", studentPositions: 35 },
    { name: "JavaScript Advanced", courseId: "Y242-446", studentPositions: 40 },
    { name: "React", courseId: "Y242-447", studentPositions: 25 },
  ]
};

export default App;
