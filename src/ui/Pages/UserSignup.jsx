   /* {
    "username": "rabiya",
    "password":"rab123",
      "email":"rab123@gmail.com",
      "name":"rabiya",
      "mobileNumber": 981445566
 
 }*/

import { useState } from "react"
import axios from "axios";
import API_ROUTES from '../../api/apiRoutes'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";






const UserSignup = () => {
    const navigate = useNavigate();
    const [IsLoading,setIsLoading]=useState(false);
    const [signupData,setsignupData] = useState({
        name :"",
        username :"",
        email :"",
        mobileNumber:"",
        password:"",
        confirmpassword:"",
    })


    const handleSubmit= async (e)=>{
        e.preventDefault();
        setIsLoading(true);
         console.log( {signupData });
         const payload =signupData;
         delete payload.confirmpassword;
      try{
        const response = await  axios.post(API_ROUTES.USER_SIGNUP, payload);

        console.log(response);

        if (response.data.success) {
            toast.success(response.data.message);
            navigate("/");
        }

      }catch (error){
  
        const errorDetails = error.response.data;
            console.log(errorDetails);
            if (!errorDetails.succes) {
                const errMsgAll = errorDetails?.error?.details;
                // toast.error(errMsgAll[0].message);

                for (let index = 0; index < errMsgAll.length; index++) {
                    const element = errMsgAll[index];
                    toast.error(element.message);
                }
            }
        } finally {
            setIsLoading(false);
        }

    }
 
  return (
    <div className='container pt-3'>
        <h3 className="mb-3">sign up  </h3>
    
    <div className='row offset-2 '>
        <div className='col-8'>
            <form className='card p-5'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='mb-3'>
                            <label className='form-label'>Name</label>
                            <input
                                type='text'
                                onChange={(e)=>setsignupData({
                                    ...signupData,
                                    name:e.target.value,
                                }

                                )}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Username
                            </label>
                            <input
                                type='text'
                                onChange={(e)=>setsignupData({
                                    ...signupData,
                                    username:e.target.value,
                                }

                                )}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Mobile Number
                            </label>
                            <input
                                type='number'
                                onChange={(e)=>setsignupData({
                                    ...signupData,
                                    mobileNumber:e.target.value,
                                }

                                )}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Email address
                            </label>
                            <input
                                type='email'
                                onChange={(e)=>setsignupData({
                                    ...signupData,
                                    email:e.target.value,
                                }

                                )}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Password
                            </label>
                            <input
                                type='password'
                                onChange={(e)=>setsignupData({
                                    ...signupData,
                                    password:e.target.value,
                                }

                                )}
                                className='form-control'
                                id='exampleInputPassword1'
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='mb-3'>
                            <label className='form-label'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                onChange={(e)=>setsignupData({
                                    ...signupData,
                                  confirmpassword:e.target.value,
                                }

                                )}
                                className='form-control'
                                id='exampleInputPassword1'
                            />
                        </div>
                    </div>
                </div>

                <button type='submit' 
                 onClick={handleSubmit}
                className='btn btn-primary'>
                  {IsLoading ? (
                                <span
                                    className='spinner-border text-warning'
                                    role='status'></span>
                            ) : (
                                <span> Submit</span>
                            )}
                </button>
            </form>
           
        </div>
    </div>
</div>
  )
}

export default UserSignup