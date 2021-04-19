import React from "react"

function FormComponent(props){
    return (
        <div>
          <form>
            <input 
              type = "text"
              value = {props.firstName}
              name = "firstName"
              placeholder= "First Name"
              onChange = {props.handleChange}
            />
            <input 
              type = "text"
              value = {props.lastName}
              name = "lastName"
              placeholder= "Last Name"
              onChange = {props.handleChange}
            />
            <input 
              type = "number"
              value = {props.age}
              name = "age"
              placeholder= "Age"
              onChange = {props.handleChange}
            />
            <br/>
            <label> 
              <input 
                type = "radio"
                value = "male"
                name = "gender"
                checked = {props.gender === "male"}
                onChange = {props.handleChange}
              />
              Male
            </label>
            
            <label>
              <input 
                type = "radio"
                value = "female"
                name = "gender"
                checked = {props.gender === "female"}
                onChange = {props.handleChange}
              />
              Female
            </label>
  
            <br/>
  
            <label>Favourite Location:
              <select 
                value={props.location}
                name="location"
                onChange = {props.handleChange}
              >
                <option value = "Singapore">Singapore</option>
                <option value = "Canada">Canada</option>
                <option value = "New Zealand">New Zealand</option>
  
              </select>
            </label>
            <br/>
            <label>Diet Restrictions:
              <label>
                <input
                  type="checkbox"
                  name="lactose"
                  onChange = {props.handleChange}
                  checked = {props.lactose}
                > 
                </input>
              Lactose</label> 
  
              <label>
                <input
                  type="checkbox"
                  name="vegetarian"
                  onChange = {props.handleChange}
                  checked = {props.vegetarian}
                > 
                </input>
              Vegetarian</label> 
  
              <label>
                <input
                  type="checkbox"
                  name="kosher"
                  onChange = {props.handleChange}
                  checked = {props.kosher}
                >
                </input>
              Kosher</label> 
            </label>
            <br/>
            <button>Submit</button>
  
          </form>
  
          <h1>Entered information: </h1>
          
          <p>Name: {props.firstName} {props.lastName}</p>
          <p>Age : {props.age}</p>
          <p>Gender : {props.gender}</p>
          <p>Location : {props.location}</p>
          <p>Diet : </p>
          <p>Lactose Free?{props.lactose? " Yes" : " No"} </p>
          <p> Vegetarian?{props.vegetarian? " Yes" : " No"} </p>
          <p> Kosher? {props.kosher? " Yes" : " No"}</p>
          
        </div>
      )
}

export default FormComponent