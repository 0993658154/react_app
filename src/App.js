import React, { Component } from "react";
import Courseform from "./components/Courseform";
import Courselist from "./components/Courselist";

class App extends Component{
  state={
    courses:[
      {name:'html'},
      {name:'css'},
      {name:'c++'},
    ],
    current:''
  }
  //Updatecourse
  updateCourse = (e) => {
    this.setState({
      current:e.target.value
    })
  }
  //addCourse
  addCourse = (e) => {
    e.preventDefault();
    let current=this.state.current;
    let courses=this.state.courses;
    courses.push({name:current})
    this.setState({
      courses,
      current:''
    })
  }
  deletecourse = (index) => {
    let courses=this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }
  editCourse = (index,value) => {
    let courses=this.state.courses;
    let course=courses[index];
    course['name']=value;
    this.setState({
      courses
    })

  }
  render(){
      const {courses}=this.state;
      const courselist=courses.map((course,index)=> {
       return <Courselist details={course} key={index} index={index} deletecourse={this.deletecourse} editCourse={this.editCourse} />
      })
  return (
    <section className="App">
        <h2>
          Add Courses
        </h2>
        <Courseform  updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
        <ul>
          {courselist}
        </ul>

    </section>
  );
}
}
export default App;
 