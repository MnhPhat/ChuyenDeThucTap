import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImageProduct } from "../../../config";
import ProductService from "../../../service/ProductService";
import { useDispatch } from "react-redux";
import addToCart from "../state/cartSlice";
import { useShoppingContext } from "../../frontend/context/ShoppingContext.tsx";
const ProductDetail = (props) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [load, setLoad] = useState(Date.now());
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { addCartItem } = useShoppingContext();
  useEffect(() => {
    (async () => {
      const result = await ProductService.getById(id);
      const result2 = await ProductService.getList();
      setProduct(result.data.product);
      setProducts(result2.data.products);
    })();
  }, [load]);
  // console.log(product);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await ProductService.getBySlug
  //       (slug);
  //       setProduct(response.data.product);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [slug]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await ProductService.productlimit(5); // Thay đổi limit và category_id tùy ý
  //       setProducts(response.data.products);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="hdl-maincontent py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image">
              <img
                id="productimage"
                className="img-fluid w-100"
                src={urlImageProduct + product.image}
                alt="hinh1"
              />
            </div>
            <div className="list-image mt-3"></div>
          </div>
          <div className="col-md-6">
            <h1 className="text-main">{product.name}</h1>
            <h3 className="fs-5"> {product.description}</h3>
            <h2 className="text-main py-4">{product.price}</h2>
            <div className="mb-3 product-size">
              <input
                id="sizexxl"
                type="radio"
                className="d-none"
                defaultValue="xxl"
                name="size"
              />
              <label htmlFor="sizexxl" className="bg-info p-2">
                XXX
              </label>
              <input
                id="sizexl"
                type="radio"
                className="d-none"
                defaultValue="xl"
                name="size"
              />
              <label htmlFor="sizexl" className="bg-info p-2 px-3">
                XL
              </label>
              <input
                id="sizel"
                type="radio"
                className="d-none"
                defaultValue="xl"
                name="size"
              />
              <label htmlFor="sizel" className="bg-primary p-2 px-3">
                M
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor>Số lượng</label>
              <input
                type="number"
                defaultValue={1}
                name="qty"
                className="form-control"
                style={{ width: 200 }}
              />
            </div>
            <div className="mb-3">
              <a
                className="btn btn-main"
                href="checkout.html"
                style={{ backgroundColor: "#fc7167", margin: 5 }}
              >
                Mua ngay
              </a>
              <a
                className="btn btn-sm btn-success"
                href="#st"
                id="add-to-cart"
                onClick={() => addCartItem(product)}
              >
                <i 
                className="fas fa-shopping-cart"
                >Thêm vào giỏ hàng</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <h2 className="text-main fs-4 pt-4">Chi tiết sản phẩm</h2>
          <p>{product.detail}</p>
        </div>
        <div className="row">
          <h2 className="text-main fs-4 pt-4">Sản phẩm khác</h2>
          <div className="product-category mt-3">
            <div className="row product-list">
              {products &&
                products.map((product, index) => (
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                            src={urlImageProduct + product.image}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="public/images/product/thoi-trang-nam-2.jpg"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">{products.name}</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
