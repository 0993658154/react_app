import React,{Component,Fragment} from "react";


class Courselist extends Component {
   state={
    isEdit: false
   }
        
       renderCourse =()=> {
        return (
            <Fragment>
               <li>
                   <span>{this.props.details.name}</span>
                   <button onClick={ () => {this.toggleEdit()}}>Edit Course</button>
                   <button onClick={ () => {this.props.deletecourse(this.props.index)}}>Delete Course</button>
               </li>
           </Fragment>
       )
       }
       renderUpdateForm = () => {
        return(
            <form onSubmit={this.UpdateCourseItem}>
                <input type="text" ref={(v)=> {this.input=v}} defaultValue={this.props.details.name}/> 
                <button>Update Course</button>
            </form>
        )
       }
       toggleEdit=() => {
        let {isEdit}=this.state;
        this.setState({
            isEdit: !isEdit
        })
       }
       UpdateCourseItem =(e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value);
        this.toggleEdit();
       }
       render (){
        let {isEdit}=this.state;
        return(
            <Fragment>
                { isEdit? this.renderUpdateForm():this.renderCourse() }
            </Fragment>
        )
    }
}
export default Courselist