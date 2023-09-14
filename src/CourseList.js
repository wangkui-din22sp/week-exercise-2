import Course from './Course';

function CourseList({ courses }) { 
  console.log(courses[0].name);console.log(courses[0].courseId);console.log(courses[0].studentPositions);

  return (
    <div>
      
      {courses.map( course => 
       {console.log(course.name);console.log(course.courseId);console.log(course.studentPositions);
        return (<Course key={course.courseId} 
                name={course.name} 
                courseId={course.courseId} 
                studentPositions={course.studentPositions} /> 
               ) }) 
      }  
        
    </div>
  );
}

export default CourseList;