import Viewslider from"./Slider"
import nam from"../../../asset/images/thoi-trang-nam.png"
import nu from "../../../asset/images/thoi-trang-nu.png";
import { useEffect, useState } from "react";
import ProductService from "../../../service/ProductService";
import { Link } from "react-router-dom";
import { urlImageProduct } from "../../../config";
import { Slide } from "react-toastify";


const Home = () => {
 
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();  
      setProducts(result.data.products);
    })();
  }, [load]);
// console.log(products);
  return (
    <>
      <section className="hdl-maincontent">
        <div className="container">
    <Viewslider/>
          <div className="product-category mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="category-title bg-main">
                  <h1 className="fs-5 py-3 text-center text-uppercase">
                    THỜI TRANG NAM
                  </h1>
                  <img
                    className="img-fluid d-none d-md-block"
                    src={nam}
                    alt="category.jpg"
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="row product-list">
                  {products &&
                    products.map((products, index) => (
                      <div className="col-6 col-md-3 mb-4">
                        <div className="product-item border">
                          <div className="product-item-image">
                            <a href="product_detail.html"></a>
                            <img
                              src={urlImageProduct + products.image}
                              className="img-fluid"
                              alt="true"
                              id="img1"
                            />

                            <h2 className="product-item-name text-main text-center fs-5 py-1">
                              <Link to={"/product/show/" + products.id}>
                                {products.name}
                              </Link>
                            </h2>
                            <h3 className="product-item-price fs-6 p-2 d-flex">
                              <div className="flex-fill">
                                <del>200.000đ</del>
                              </div>
                              <div className="flex-fill text-end text-main">
                                {products.price}
                              </div>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hdl-maincontent">
        <div className="container">
          <div className="product-category mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="category-title bg-main">
                  <h1 className="fs-5 py-3 text-center text-uppercase">
                    THỜI TRANG NỮ
                  </h1>
                  <img
                    className="img-fluid d-none d-md-block"
                    src={nu}
                    alt="category.jpg"
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="row product-list">
                  {products &&
                    products.map((products, index) => (
                      <div className="col-6 col-md-3 mb-4">
                        <div className="product-item border">
                          <div className="product-item-image">
                            <a href="product_detail.html"></a>
                            <img
                              src={urlImageProduct + products.image}
                              className="img-fluid"
                              alt="true"
                              id="img1"
                            />

                            <h2 className="product-item-name text-main text-center fs-5 py-1">
                              <Link to={"/product/show/" + products.id}>
                                {products.name}
                              </Link>
                            </h2>
                            <h3 className="product-item-price fs-6 p-2 d-flex">
                              <div className="flex-fill">
                                <del>200.000đ</del>
                              </div>
                              <div className="flex-fill text-end text-main">
                                {products.price}
                              </div>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
