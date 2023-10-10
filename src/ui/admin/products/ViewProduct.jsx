import { useParams } from "react-router-dom"
import useFetch from "../../../hook/useFetch";
import { useEffect } from "react";
import API_ROUTES from "../../../api/apiRoutes";
import Loader from "../../molecules/Loader"
import ViewHeading from "../../components/ViewHeading"


const ViewProduct = () => {
    const { productId } = useParams();
    const { IsLoading, data, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(`${API_ROUTES.GET_PRIVATE_PRODUCT_LIST}/${productId}`);
    }, [fetchDataByUrl, productId]);

    console.log("productId", productId);

    return (
        <div className='w-100'>
            <ViewHeading headingTitle='View Products' />
            <section>
                {IsLoading && <Loader />}
                {data && !IsLoading && (
                    <div>
                        {data?.name}
                        <img src={data?.thumbnil?.cloudPath} alt={data?.name} />
                    </div>
                )}
            </section>
        </div>
    );
};

export default ViewProduct;