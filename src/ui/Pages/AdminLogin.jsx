import { useState } from "react"
import axios from "axios";
import API_ROUTES from '../../api/apiRoutes'
import {toast} from 'react-toastify';
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useNavigate,Link } from "react-router-dom";
import useAuthContext from "../../hook/useAuthContext";




const AdminLogin = () => {
    const { handleLoginFn } = useAuthContext();

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [IsLoading,setIsLoading]=useState(false);
    const [signupData,setsignupData] = useState({
       
        email :"",
        password:"",
     
    })


    const handleSubmit= async (e)=>{
        e.preventDefault();
        setIsLoading(true);
         console.log( {signupData });
         const payload =signupData;
         delete payload.confirmpassword;
      try{
        const response = await  axios.post(API_ROUTES.ADMIN_LOGIN, payload);

        console.log(response);

        if (response.data.success) {
            localStorage.setItem(
                "token",
                response?.data?.data?.accessToken
            );
            console.log(response?.data?.data, "Admin Login");
            handleLoginFn(response?.data?.data);
            toast.success(response.data.message);
            navigate("/admin/dashboard");
        }

      }catch (error){
  
        const errorDetails = error.response.data;
            console.log(errorDetails);
            if (!errorDetails.succes) {
                console.log("errorDetails", errorDetails);
               
                // toast.error(errMsgAll[0].message);
                if (errorDetails.type === "RequestValidator") {
                    const errMsgAll = errorDetails?.error?.details;
                for (let index = 0; index < errMsgAll.length; index++) {
                    const element = errMsgAll[index];
                    toast.error(element.message);
                }
              } else {
                toast.error(errorDetails.error);
            }
        }
        } finally {
            setIsLoading(false);
        }

    }
 
  return (
    <div className='container pt-3'>
        <h3 className="mb-3">AdminLogin </h3>
        
    <div className='row offset-2 '>
        <div className='col-8'>
            <form className='card p-5'>
                <div className='row'>
                  
                
                  
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
                                type={
                                    showPassword ? "text" : "password"
                                }
                                onChange={(e)=>setsignupData({
                                    ...signupData,
                                    password:e.target.value,
                                }

                                )}
                                className='form-control'
                                id='exampleInputPassword1'
                            />
                             <span
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }>
                                        {showPassword ? <Eye /> : <EyeSlash />}
                                    </span>
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
            <div>
                <div className="col-12">
                    <p> Don&apos;t have an account ?</p>
                    <Link to = '/auth/signup'>Signup</Link>
                </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default AdminLogin