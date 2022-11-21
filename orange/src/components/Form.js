import React, { useState } from "react";

function Form() {
  const initialValues = { email: "", phone: "", pword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({'m':'m'});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));

  };
  var test = "false";
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);


    let formData = JSON.parse(localStorage.getItem("formData")) || [];

    const data = JSON.parse(localStorage.getItem("formData") || "[]");

    if(Object.values(formErrors).length === 0 ){

    var inputmail="";
    var obj={};
    for(var i=0;i<data.length;i++){
      obj=data[i];
      inputmail=obj.email;
     
    
      if( formValues.email ===inputmail){
       
       test="true";

      }
      else{
   
        continue;
      }
    
    }

    if(test==="false"){
        formData.push({
            email: formValues.email,
            password: formValues.pword,
            phone: formValues.phone,
          });
          localStorage.setItem("formData", JSON.stringify(formData));
    }else{
        console.log("email is already exist");
    }
      
    }


// if (Object.keys(formErrors).length === 0 && isSubmit ) {
//   let formData = JSON.parse(localStorage.getItem("formData")) || [];
//   formData.push({
//     email: formValues.email,
//     phone:formValues.phone,
//     password: formValues.password,

//   });
//   localStorage.setItem(("formData"), JSON.stringify(formData));
//   e.preventDefault();

//     } 
    

    // {Object.keys(formErrors).length === 0 && isSubmit ? (
    //   (localStorage.setItem(formValues, JSON.stringify()),
    //   (
    //     <div className="alert alert-success" role="alert">
    //       Successfuly Registered
    //     </div>
    //   ))
    // ) : (
    //   <div className="errors"></div>
    // )}
    
    // let formData = JSON.parse(localStorage.getItem("formData")) || [];
    // formData.push({
    //   email: formValues.email,
    //   phone:formValues.phone,
    //   password: formValues.password,

    // });
    // localStorage.setItem(("formData"), JSON.stringify(formData));
    // // e.preventDefault();

  };


  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!values.email) {
      errors.email = "Email Is Requred!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invlaid Email!";
    }
    if (!values.phone) {
      errors.phone = "Phone Is Requred!";
    }
    if (!values.pword) {
      errors.pword = "Password Is Requred!";
    } else if (values.pword.length < 6 || values.pword.length > 12) {
      errors.pword = "Password Must  Be Between 6 And 12 Characters";
    }
    return errors;
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <p className="create">Create an account</p>
{/* 
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="alert alert-success" role="alert">
              Successfuly Registered
            </div>
        ) : (
          <div className="errors"></div>
        )} */}
        <br />

        <label htmlFor="mail">Email address</label>
        <br />
        <input type="text" id="mail" name="email" value={formValues.email} onChange={handleChange} />
        <br />
        <div id="mailErrMessage">{formErrors.email}</div>
        <p id="email_error">eg:Username@domain.com</p>

        <label htmlFor="number">Mobile </label>
        <br />
        <input type="number" id="number" name="phone" value={formValues.phone} onChange={handleChange} />
        <br />
        <div id="mobileErrMessage">{formErrors.phone}</div>
        <p id="mobile_error">eg:077*******</p>

        <label htmlFor="password"> Create Password </label>
        <br />
        <input type="password" id="password" name="pword" value={formValues.pword} onChange={handleChange} />
        <br />
        <div id="passErrMessage">{formErrors.pword}</div>
        <p id="pass_error">The Password should be between 6-18 characters.</p>

        <br />

        <input id="subBtn" className="sign" type="submit" defaultValue="Sign up" />

        <br />
        <button className="login">
          <a href="/login.html">Login</a>
        </button>
      </form>
    </div>
  );
}

export default Form;
