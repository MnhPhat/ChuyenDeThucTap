import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import ProductService from "../../service/ProductService";
import { urlImageProduct } from "../../config";
import CategoryService from "../../service/CategoryService";
import ProductList from "../../pages/frontend/Product/ProductList";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
 
    (async () => {
      const result1 = await CategoryService.getList();
      setCategories(result1.data.categories);
    })();
    
    (async () => {
      const result2 = await ProductService.getList();
      setProducts(result2.data.products);
    })();
  }, [load]);
  // console.log(categories);
  return (
    
   <div>
  <ul className="list-group mb-3 list-brand">
    <li className="list-group-item bg-main py-3">Thương hiệu</li>
    <li className="list-group-item">
      <a href="product_brand.html">Việt Nam</a>
    </li>
    <li className="list-group-item">
      <a href="product_brand.html">Hàn Quốc</a>
    </li>
    <li className="list-group-item">
      <a href="product_brand.html">Thái Lan</a>
    </li>
    <li className="list-group-item">
      <a href="product_brand.html">Quản Châu</a>
    </li>
  </ul>
 <ul className="list-group mb-3 list-product-new">
    <li className="list-group-item bg-main py-3">Sản phẩm mới</li>
         <li className="list-group-item">
           {products &&
             products.map((products) => (
               <div className="col-12">
                 <div className="product-item border">
                   <div className="product-item-image">
                     <a href="product_detail.html"></a>
                     <img
                       src={urlImageProduct + products.image}
                       className="img-fluid w-100"
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
         </li>
       </ul>
</div>

  );
};

export default Menu;
