import { useState, useEffect } from "react";
import ProductService from "../../../service/ProductService";
import { Link } from "react-router-dom";
import { urlImageProduct } from "../../../config";

const ProductStore = () => {
  const [products, setProduct] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const [product_id, setProduct_id] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();
      setProduct(result.data.products);
    })();
  }, [load]);
  //   console.log(products);

  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Nhập sản phẩm</h1>
        <div className="row mt-3 align-items-center">
          <div className="col-12 text-end">
            <input type="text" className="search d-inline" />
            <button className="d-inline btnsearch">Tìm kiếm</button>
          </div>
        </div>
        <div className="row mt-1 align-items-center">
          <div className="col-md-8">
            <select name className="d-inline me-1">
              <option value>Hành động</option>
              <option value>Bỏ vào thùng rác</option>
            </select>
            <button className="btnapply">Áp dụng</button>
            <select name className="d-inline me-1">
              <option value>Tất cả danh mục</option>
            </select>
            <select name className="d-inline me-1">
              <option value>Tất cả thương hiệu</option>
            </select>
            <button className="btnfilter">Lọc</button>
          </div>
          <div className="col-md-4 text-end">
            <nav aria-label="Page navigation example">
              <ul className="pagination pagination-sm justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link">«</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    »
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="content-body my-2">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="text-center" style={{ width: 90 }}>
                Hình ảnh
              </th>
              <th>Tên sản phẩm</th>
              <th>Tên danh mục</th>
              <th>Giá</th>
              <th style={{ width: 90 }} className="text-center">
                Số lượng
              </th>
              <th style={{ width: 180 }} className="text-center">
                Giá nhập
              </th>
              <th style={{ width: 60 }} />
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, index) => (
                <tr className="datarow">
                  <td>
                    <img
                      className="img-fluid"
                      src={urlImageProduct + product.image}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.slug}</td>
                  <td>{product.price}</td>
                  <td>
                    <input
                      type="number"
                      id={"qty" + product.id}
                      name="qty"
                      min="0"
                      max="1000"
                      style={{ width: 90 }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      id={"price" + product.id}
                      min="0"
                      max="100000000"
                    />
                  </td>
                  <td className="text-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        try {
                          var productstore = new FormData();
                          const pricee = document.querySelector(
                            "#price" + product.id
                          );
                          const qtyy = document.querySelector(
                            "#qty" + product.id
                          );

                          productstore.append("product_id", product.id);
                          productstore.append("price", pricee.value);
                          productstore.append("qty", qtyy.value);
                          (async () => {
                            const result = await ProductService.productstore(
                              productstore
                            );
                            if (result.data.status === true) {
                              alert("Nhập sản phẩm vào kho thành công!");
                              setLoad(Date.now());
                            } else {
                              alert("Nhập sản phẩm thất bại!");
                            }
                          })();
                        } catch (err) {
                          alert("loi");
                        }
                      }}
                      className="btn btn-sm btn-success"
                    >
                      Lưu
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProductStore;
