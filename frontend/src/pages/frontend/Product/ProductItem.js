import { Link } from "react-router-dom";
import { urlImageProduct } from "../../../config";


const ProductItem = (props) => {
  const product = props.product;
  const selectCategory = props.selectCategory;
  const searchProduct = props.searchProduct;
  
  return (
    <>
      {product &&
      (product.category_id === selectCategory || selectCategory === 0) ? (
        <div className="product-item border">
          <div className="product-item-image">
            <Link to={"show/" + product.id}>
              <img
                src={urlImageProduct + "/" + product.image}
                className="img-fluid"
                alt={product.image}
                id="img1"
              />
            </Link>
          </div>
          <h2 className="product-item-name text-main text-center fs-6 py-1">
            <Link to={"show/" + product.id}>{product.name}</Link>
          </h2>
          <h3 className="product-item-price fs-6 p-2 d-flex">
            <div className="flex-fill">
              <del>{product.price}đ</del>
            </div>
            
            <div className="flex-fill text-end text-main">{product.price}đ</div>
          </h3>
        </div>
      ) : (
        <div style={{ display: "none" }} />
      )}
    </>
  );
};

export default ProductItem;
