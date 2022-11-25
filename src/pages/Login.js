import {
  Link, Route
 } from "react-router-dom";
 
 import { useForm} from 'react-hook-form';
 import './Signup.css';
 
 
 const Signup = () => {
   const { handleSubmit, register, formState: { errors } } = useForm();
   const onSubmit = values => alert('successful');
 
 
   return (
     <div className='signup-container'>
     <div className="container ">
 
       <div>
       <form onSubmit={handleSubmit(onSubmit)}>
         <h3 className="signup">Log In</h3>

         <div class='email'>
             <input id='email'
             type='email'
             placeholder='yourname@email.com'
             {
               ...register("email", {
                 required: "Required",
                 pattern: {
                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                   message: "invalid email address"
                 }
               })}
              />
             {errors.email && <p style={{color: 'red'}}>Email required</p>}
 
         </div>
 
         <div class='m-2'>
             <input id='passwrd'
              name='password' type='password' placeholder="Password"
             {...register("password", {
               required: true,
               pattern: String, 
             })}
             />
           {errors.password && <p style={{color: 'red'}}>Please add your password</p>}    
           
         </div>
       <div className='btn-div'>
         <button id='btn__submit'
          type='submit' value='submit' class=''>
           Log In :(
         </button>
         </div>
         <p className="end-question">Don't have account? 
             Sign Up
         </p>
         </form>
         
     </div>
     </div>
     </div>
     );
   }
   
   
   export default Signup;
   