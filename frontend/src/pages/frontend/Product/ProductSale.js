import { useEffect, useState } from "react";
import { urlImageProduct } from "../../../config";
import { Link } from "react-router-dom";
import ProductService from "../../../service/ProductService";
import Menu from "../../../layouts/LayoutSite/Menu";
import CategoryService from "../../../service/CategoryService";
import Viewslider from "../Home/Slider";

const ProductSale = () => {
   const [selectCategory, setSelectCategory] = useState(0);
        const [categories, setCategories] = useState([]);
        const [products, setProducts] = useState([]);
        const [load, setLoad] = useState(Date.now());
        useEffect(() => {
          (async () => {
            const result2 = await CategoryService.getList();
            setCategories(result2.data.categories);
          })();

          (async () => {
            const result5 = await ProductService.getList();
            setProducts(result5.data.products);
          })();
        }, [selectCategory]);

        const handleSelectCategory = (id) => {
          setSelectCategory(id);
        };
  return (
    <>

    <Viewslider/>
      <div className="row">
        <div className="col-md-3 order-2 order-md-1">
          <ul className="list-group mb-3 list-category">
            <li className="list-group-item bg-main py-3">Danh mục sản phẩm</li>
            <li className="list-group-item">
              <Link onClick={() => handleSelectCategory(0)}>
                Tất cả sản phẩm
              </Link>
            </li>
            {categories &&
              categories.map((category) =>
                category.status === 1 ? (
                  <li className="list-group-item" key={category.id}>
                    <Link onClick={() => handleSelectCategory(category.id)}>
                      {category.name}
                    </Link>
                  </li>
                ) : null
              )}
            <li className="list-group-item">
              <a href="/product/new">Sản phẩm mới</a>
            </li>
            <li className="list-group-item">
              <a href="/product/sale">Sản phẩm Sale</a>
            </li>
          </ul>
          <Menu />
        </div>
        <div className="col-md-9 order-1 order-md-2">

      <div className="category-title bg-main">
        <h3 className="fs-5 py-3 text-center">SẢN PHẨM SALE</h3>
      </div>
      <div className="product-category mt-3">
        <div className="row product-list">
          {products &&
            products.map((product) => (
              <div className="col-6 col-md-3 mb-4">
                <div className="product-item border">
                  <div className="product-item-image">
                    <a href="product_detail.html"></a>
                    <img
                      src={urlImageProduct + product.image}
                      className="img-fluid"
                      alt="true"
                      id="img1"
                    />

                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <Link to={"/product/show/" + product.id}>
                        {product.name}
                      </Link>
                    </h2>
                    <h3 className="product-item-price fs-6 p-2 d-flex">
                      <div className="flex-fill">
                        <del>200.000đ</del>
                      </div>
                      <div className="flex-fill text-end text-main">
                        {product.price}
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <nav aria-label="Phân trang">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link text-main"
              href="product_category.html"
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-main" href="product_category.html">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-main" href="product_category.html">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-main" href="product_category.html">
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-main"
              href="product_category.html"
              aria-label="Next"
            >
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
      </div>
      </div>
    </>
  );
};

export default ProductSale;
