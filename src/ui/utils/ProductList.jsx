import DeleteModal from "../HOC/DeleteModal";
import ProductModal from "../molecules/ProductModel";

const ProductPage = () => {
    return (
        <div>
            <DeleteModal>
                <ProductModal />
            </DeleteModal>
        </div>
    );
};

export default ProductPage;