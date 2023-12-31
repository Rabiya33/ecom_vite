import { useEffect } from "react";
import { toast } from "react-toastify";
import SingleProduct from "../components/SingleProduct";

import { PrivateAxios } from "../../api/AxiosInstances";
import useFetch from "../../hook/useFetch";
import API_ROUTE from "../../api/apiRoutes";
import ViewHeading from "../components/ViewHeading";

const CustomerWhishlist = () => {
  const baseURl = API_ROUTE.WISHLIST_ROUTES;

  const {  data,  fetchDataByUrl, setData } = useFetch();

  useEffect(() => {
      fetchDataByUrl(baseURl);
  }, [baseURl, fetchDataByUrl]);

  const handleRemoveFromWishlist = async (productId) => {
      console.log(productId);

      const url = `${API_ROUTE.WISHLIST_ROUTES}/${productId}`;

      try {
          const response = await PrivateAxios.delete(url);

          if (response?.data?.success) {
              // setFetchAgain(true);
              const tempData = data;
              console.log(tempData);
              const newData = tempData?.wishlist?.filter(
                  (item) => item._id !== productId
              );

              setData({
                  wishlist: newData,
              });
              toast.info(response?.data?.message);
          }

          console.log({ response });
      } catch (error) {
          console.log(error);
          toast.error("Something Went Error");
      }
  };

  return (
      <div className='py-3'>
          <ViewHeading headingTitle='My Wishlist' />
          <section className='row'>
              {data?.wishlist?.map((product) => {
                  return (
                      <div className='col-12 col-md-3' key={product._id}>
                          <div>
                              <SingleProduct product={product} />
                              <button
                                  onClick={() =>
                                      handleRemoveFromWishlist(product._id)
                                  }
                                  className='btn btn-outline-danger mx-3'>
                                  Remove From Wishlist
                              </button>
                          </div>
                      </div>
                  );
              })}
          </section>
      </div>
  );
};

export default CustomerWhishlist;