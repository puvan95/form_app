import React from "react"
import FormComponent from "./FormComponent"

class FormContainer extends React.Component{
    
    constructor(){
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age:0,
          gender: "",
          location: "",
          lactose : false,
          vegetarian : false,
          kosher: false
        }
        this.handleChange = this.handleChange.bind(this)
      }
    
      //firstName, Last Name, Age, submit btn, gender radio btn, location select, checkbox for veg, kosher, lactose
    
      handleChange(event){
    
        const {name, value, type, checked} = event.target
    
        type === "checked" ? this.setState({[name] : checked}) : this.setState({[name] : value})
      }
    
      render(){
          return(
            <FormComponent
                handleChange = {this.handleChange}
                {...this.state}
            />
          )
        
        
      }
}

export default FormContainer