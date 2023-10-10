import { Outlet , Navigate } from "react-router-dom";
import useAuthContext from "../../hook/useAuthContext";


const CartLayout = () => {
  const { userInfo } = useAuthContext();
  return (
    <>
            {userInfo?.id && !userInfo?.isAdmin ? (
                <Outlet />
            ) : (
                <Navigate to='/' />
            )}
        </>
    
  )
}

export default CartLayout;