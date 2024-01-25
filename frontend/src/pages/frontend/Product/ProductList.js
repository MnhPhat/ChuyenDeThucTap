import Menu from "../../../layouts/LayoutSite/Menu";
import { useEffect, useState } from "react";
import { urlImageProduct } from "../../../config";
import { Link } from "react-router-dom";
import ProductService from "../../../service/ProductService";
import CategoryService from "../../../service/CategoryService";
import ProductItem from "./ProductItem";
import Viewslider from "../Home/Slider";
import { useShoppingContext } from "../../frontend/context/ShoppingContext.tsx";
const ProductList = () => {
  const [selectCategory, setSelectCategory] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const { addCartItem } = useShoppingContext();

  useEffect(() => {
    (async () => {
      const result2 = await CategoryService.getList();
      setCategories(result2.data.categories);
    })();
    (async () => {
      const result5 = await ProductService.getList();
      setProducts(result5.data.products);
      // renderSearch()
    })();
  }, [selectCategory]);

  const handleSelectCategory = (id) => {
    setSelectCategory(id);
  };
  const searchproduct = () => {
    let valueSearch = document.getElementById("search").value;
    let userSearch = products.filter((value) => {
      return value.name.toUpperCase().includes(valueSearch.toUpperCase());
    });
    console.log(userSearch);
  };
  const renderSearch = (array) => {
    array.map(() => {
      <div className="product-item border">
        <div className="product-item-image">
          <Link to={"show/" + products.id}>
            <img
              src={urlImageProduct + "/" + products.image}
              className="img-fluid"
              alt={products.image}
              id="img1"
            />
          </Link>
        </div>
        <h2 className="product-item-name text-main text-center fs-6 py-1">
          <Link to={"show/" + products.id}>{products.name}</Link>
        </h2>
        <h3 className="product-item-price fs-6 p-2 d-flex">
          <div className="flex-fill">
            <del>{products.price}đ</del>
          </div>
          <div className="flex-fill text-end text-main">{products.price}đ</div>
        </h3>
      </div>;
    });
  };
  return (
    <div className="row">
      <Viewslider />

      <div className="col-md-3 order-2 order-md-1">
        <ul className="list-group mb-3 list-category">
          <li className="list-group-item bg-main py-3">Danh mục sản phẩm</li>
          <li className="list-group-item">
            <Link onClick={() => handleSelectCategory(0)}>Tất cả sản phẩm</Link>
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
          <h3 className="fs-5 py-3 text-center">SẢN PHẨM</h3>
        </div>
        <div className="input-group mb-3">
          <input
            id="search"
            type="text"
            className="form-control"
            placeholder="Nhập nội dung tìm kiếm"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onInput={searchproduct}
          />
        </div>
        <div className="product-category mt-3">
          <div className="row product-list">
            {products &&
              products.map((product, index) =>
                product.status === 1 ? (
                  <div className="col-6 col-md-3 mb-4" key={index}>
                    <ProductItem
                      product={product}
                      selectCategory={selectCategory}
                    />
                  </div>
                ) : null
              ) }
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
  );
};

export default ProductList;
