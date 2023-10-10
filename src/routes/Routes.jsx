import AuthLayout from '../ui/Pages/AuthLayout';
import UserSignup from '../ui/Pages/UserSignup';
import App from '../App';
import {
    createBrowserRouter
  } from "react-router-dom";
import UserLogin from '../ui/Pages/UserLogin';
import AdminLogin from '../ui/Pages/AdminLogin';
import AdminLayout from '../ui/admin/AdminLayout';
import AdminDashboard from '../ui/admin/AdminDashboard';
import PageNotFound from '../ui/utils/PageNotFound';
import HomePage from '../ui/utils/HomePage';
// import ProductPage from "../ui/pages/ProductList";
import EmployeesLayout from '../ui/admin/empolyees/EmployeesLayout';
import EmployeesList from '../ui/admin/empolyees/EmployeesList'
import AddEmployees from '../ui/admin/empolyees/AddEmployees';
import CheckPermission from '../ui/Pages/protectedpage/CheckPermission'
// category ROutes
import CategoryLayout from '../ui/admin/categories/CategoryLayout';
import AddCategory from '../ui/admin/categories/AddCategory';
import CategoryList from '../ui/admin/categories/CategoryList';
// user Routes
import UserList from '../ui/admin/user/UserList';
import  UserLayout from '../ui/admin/user/UserLayout';
// products Routes
import ProductLayout from '../ui/admin/products/ProductLayout';
import ProductList from '../ui/admin/products/ProductList';
import AddProduct from '../ui/admin/products/AddProduct';
import ViewProduct from '../ui/admin/products/ViewProduct';
//import  ProductPage from '../ui/Pages/ProductPage'

// public product Routes

import PublicProductLayout from "../ui/products/ProductLayout";
import MainProduct from "../ui/products/MainProduct";
import SingleProductPage from "../ui/products/SingleProductPage";

import CustomerLayout from "../ui/customers/CustomerLayout";
import CustomerDashboard from "../ui/customers/CustomerDashboard";
import CustomerWishlist from "../ui/customers/CustomerWhishlist";
import AddAddress from "../ui/address/AddAddress";

//cart routes
import CartLayout from '../ui/cart/CartLayout';
import CartDashboard from '../ui/cart/CartDashboard';
//import { Cart } from 'react-bootstrap-icons';
import Cart from '../ui/cart/Cart'


/*const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: "",
          element:<HomePage/>,

        },
        {
          path: "products",
          element: <PublicProductLayout/>,
          children: [
            {
                path: "",
                element: <MainProduct />,
            },
            {
                path: "productSlug",
                element: <SingleProductPage />,
            },
        ],
      },

       {
        path: "my-account",
        element: <CustomerLayout />,
        children: [
            {
                path: "",
                element: <CustomerDashboard />,
            },
            {
                path: "wishlist",
                element: <CustomerWishlist />,
            },
            {
                path: "add-address",
                element: <AddAddress/>,
            },
        ],
    },
    {
      path: "my-cart",
      element: <CartLayout/>,
      children: [
          {
              path: "",
              element: <CartDashboard/>,
          },
          {
              path: "cart",
              element: <Cart/>,
          },
      ],
  },
 
        {
            path: "auth",
            element:<AuthLayout/>,
            children:[
                {
                    path: "login",
                    element:<UserLogin/>
                  },

                  {
                    path: "admin-login",
                    element:<AdminLogin/>
                  },
                  
                {
                    path: "signup",
                    element:<UserSignup/>
                },
              
              
            ],
        },
        {
          path: "admin",
          element:<AdminLayout/>,
          children:[
             
            {
              path: "dashboard",
              element:<AdminDashboard/>
          },
          {
            path: "employees",
            element: <EmployeesLayout/>,
            children :[

              {
                path: "list",

                element:(<CheckPermission 
                  CheckPermission 
                  requiredPermission = 'ADMIN_VIEW' >
                    <EmployeesList/>
                  </CheckPermission>)

              },
              {
                path: "add",
                element: (
                  <CheckPermission
                      CheckPermission
                      requiredPermission='ADMIN_ADD'>
                      <AddEmployees />
                  </CheckPermission>
              ),

                
           
              },
            ],
          },
          {
            path: "categories",
            element: <CategoryLayout />,
            children: [
                {
                    path: "list",

                    element: (
                        <CheckPermission
                            CheckPermission
                            requiredPermission='CATEGORY_VIEW'>
                            <CategoryList />
                        </CheckPermission>
                    ),
                },
                {
                  path: "add",
                  element: (
                      <CheckPermission
                          CheckPermission
                          requiredPermission='CATEGORY_CREATE'>
                          <AddCategory />
                      </CheckPermission>
                  ),
              },
        ]
    },
                   {
                       path: "products",
                        element: <ProductLayout />,
                        children: [
                            {
                                path: ":productId",

                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_VIEW'>
                                        <ViewProduct/>
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "list",

                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_VIEW'>
                                        <ProductList/>
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "add",
                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_CREATE'>
                                        <AddProduct/>
                                    </CheckPermission>
                                ),
                            },
                        ],
                    },

        {
          path: "customers",
          element: <UserLayout />,
          children: [
              {
                  path: "list",

                  element: (
                      <CheckPermission
                          CheckPermission
                          requiredPermission='USER_VIEW'>
                          <UserList />
                      </CheckPermission>
                  ),
              },
          ],
      },
        

          ],

        },

      ],

    },
    {
      path: "*",
      element:<PageNotFound/>,
  },
  

    
  ]);

  export default router;*/


  const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "products",
                element: <PublicProductLayout />,
                children: [
                    {
                        path: "",
                        element: <MainProduct />,
                    },
                    {
                        path: ":productSlug",
                        element: <SingleProductPage />,
                    },
                ],
            },

            {
                path: "my-account",
                element: <CustomerLayout />,
                children: [
                    {
                        path: "",
                        element: <CustomerDashboard />,
                    },
                    {
                        path: "wishlist",
                        element: <CustomerWishlist />,
                    },
                     

                    {
                        path: "add-address",
                        element: <AddAddress />,
                    },
                ],
            },
             
            {
                path: "my-cart",
                element: <CartLayout/>,
                children: [
                    {
                        path: "",
                        element: <CartDashboard/>,
                    },
                    {
                        path: "cart",
                        element: <Cart/>,
                    },
                ],
            },
           
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <UserLogin />,
                    },
                    {
                        path: "admin-login",
                        element: <AdminLogin />,
                    },
                    {
                        path: "signup",
                        element: <UserSignup />,
                    },
                ],
            },
            {
                path: "admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <AdminDashboard />,
                    },
                    {
                        path: "employees",
                        element: <EmployeesLayout />,
                        children: [
                            {
                                path: "list",

                                element: (
                                    <CheckPermission requiredPermission='ADMIN_VIEW'>
                                        <EmployeesList />
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "add",
                                element: (
                                    <CheckPermission requiredPermission='ADMIN_ADD'>
                                        <AddEmployees />
                                    </CheckPermission>
                                ),
                            },
                        ],
                    },
                    {
                        path: "categories",
                        element: <CategoryLayout />,
                        children: [
                            {
                                path: "list",

                                element: (
                                    <CheckPermission
                                        x='5'
                                        requiredPermission='CATEGORY_VIEW'>
                                        <CategoryList />
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "add",
                                element: (
                                    <CheckPermission requiredPermission='CATEGORY_CREATE'>
                                        <AddCategory />
                                    </CheckPermission>
                                ),
                            },
                        ],
                    },
                    {
                        path: "products",
                        element: <ProductLayout />,
                        children: [
                            {
                                path: ":productId",

                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_VIEW'>
                                        <ViewProduct />
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "list",

                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_VIEW'>
                                     <h1>product</h1>  
                                        <ProductList />
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "add",
                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_CREATE'>
                                        <AddProduct />
                                    </CheckPermission>
                                ),
                            },
                        ],
                    },
                    {
                        path: "customers",
                        element: <UserLayout />,
                        children: [
                            {
                                path: "list",

                                element: (
                                    <CheckPermission requiredPermission='USER_VIEW'>
                                        <UserList />
                                    </CheckPermission>
                                ),
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;