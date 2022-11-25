import {BrowserRouter as Link} from 'react-router-dom';

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
        <h3 className="signup">Sign Up</h3>
          <div className='firstName'>
            <input id='first_name' 
            type='text' placeholder='Enter your first name'
              {...register("firstname", {
                required: true, maxLength: 15 
              })}
            /> 
            {errors.firstname && <p style={{color: 'red'}}>Firstname Required</p>}

          </div>
          <div  className='lastName'>
            <input id='last_name'
             type='text' placeholder='Enter your last name'
              {...register("lastname", {
                required: true, maxLength: 15
                })}
                />
                {errors.lastname && <p style={{color: 'red'}}>Lastname Required</p>}
          </div>

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

        <div>
            <input id='password'
             name='password' type='password' placeholder="Password"
            {...register("password", {
              required: true,
              pattern: String, 
            })}
            />
          {errors.password && <p style={{color: 'red'}}>Please add your password</p>}              
        </div>
        <div>
          <input type='checkbox' /> <span>
            <p>By signing up you agree to the terms and conditions.</p>
            </span>
        </div>
      <div className='btn-div'>
        <button id='btn__submit'
         type='submit' value='submit' class=''>
          Sign Up :(
        </button>
        </div>

        <div className="end-question">
          <p>Already have account?
                Log In
          </p>
        </div>
        </form>
        
    </div>
    </div>
    </div>
    );
  }
  
  
  export default Signup;
  