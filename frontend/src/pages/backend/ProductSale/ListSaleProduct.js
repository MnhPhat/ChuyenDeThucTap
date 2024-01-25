import { useEffect, useState } from "react";
import ProductService from "../../../service/ProductService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { urlImageProduct } from "../../../config";
import {
  FaToggleOff,
  FaToggleOn,
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";

const ProductSale = () => {
  const [products, setProduct] = useState([]);
  const [productsales, setProductsale] = useState([]);
  const [load, setLoad] = useState(Date.now());

  useEffect(() => {
    (async () => {
      const resultproductsale = await ProductService.productsale(10);
      const result_pro = await ProductService.getList();
      setProductsale(resultproductsale.data.productsales);
      setProduct(result_pro.data.products);
    })();
  }, [load]);
  // console.log(productsales);
  // console.log(products);

  const handleSale = (id) => {
    try {
      (async function () {
        const datebegin = document.querySelector("#datebegin" + id);
        const dateend = document.querySelector("#dateend" + id);
        const pricesale = document.querySelector("#pricesale" + id);
        const productsale = {
          product_id: id,
          pricesale: pricesale.value,
          datebegin: datebegin.value,
          dateend: dateend.value,
        };
        await ProductService.storesale(productsale);
        toast.success("Thêm khuyến mãi mới thành công!");
      })();
      setLoad(Date.now());
    } catch (error) {
      toast.error("Thêm thất bại!");
    }
  };

  return (
    <div className="row">
      <div className="col-md-13">
        <div className="col-md-12">
          <div className="content">
            <section className="content-header my-2">
              <h1 className="d-inline">Sản phẩm</h1>

              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Thêm Mới
              </button>
              <div
                class="modal fade modal-xl"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Thêm mới sản phẩm Sale
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body-12 ">
                      <section className="content-body my-2 ">
                        <table className="table table-bordered modal-xl">
                          <thead>
                            <tr>
                              <th></th>
                              <th
                                className="text-center"
                                style={{ width: 130 }}
                              >
                                Hình ảnh
                              </th>
                              <th>Tên sản phẩm</th>

                              <th>Giá</th>
                              <th>Ngày bắt đầu</th>
                              <th>Ngày kết thúc</th>
                              <th>Giá khuyến mãi</th>
                              <th> chức năng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products &&
                              products.map((product, index) => (
                                <tr className="datarow">
                                  <td className="text-center">
                                    <input type="checkbox" />
                                  </td>
                                  <td>
                                    <img
                                      className="img-fluid"
                                      src={urlImageProduct + product.image}
                                      alt="category.jpg"
                                    />
                                  </td>

                                  <td>{product.name}</td>
                                  <td className="text-center">
                                    {product.price}
                                  </td>
                                  <td className="text-center align-middle">
                                    <input
                                      type="date"
                                      id={"datebegin" + product.id}
                                    ></input>
                                  </td>
                                  <td className="text-center align-middle">
                                    <input
                                      type="date"
                                      id={"dateend" + product.id}
                                    ></input>
                                  </td>
                                  <td className="text-center align-middle">
                                    <input
                                      type="text"
                                      id={"pricesale" + product.id}
                                    ></input>
                                  </td>

                                  <td className="text-center align-middle">
                                    <button
                                      onClick={() => handleSale(product.id)}
                                      className="btn btn-sm btn-success"
                                      type="button"
                                    >
                                      Thêm khuyến mãi
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </section>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3 align-items-center">
                <div className="col-6">
                  <ul className="manager">
                    <li>
                      <a href="product_index.html">Tất cả (123)</a>
                    </li>
                    <li>
                      <a href="#">Xuất bản (12)</a>
                    </li>
                    <li>
                      <a href="admin/product/trash">Rác (12)</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 text-end">
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
            <ToastContainer />

            <section className="content-body my-2">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: 30 }}>
                      <input type="checkbox" id="checkboxAll" />
                    </th>
                    <th className="text-center" style={{ width: 130 }}>
                      Hình ảnh
                    </th>
                    <th>Tên sản phẩm</th>

                    <th>ID</th>
                    <th>Giá</th>
                    <th>Giá khuyến mãi</th>
                  </tr>
                </thead>
                <tbody>
                  {productsales &&
                    productsales.map((productsale, index) => (
                      <tr className="datarow">
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            className="img-fluid"
                            src={urlImageProduct + productsale.image}
                            alt="category.jpg"
                          />
                        </td>

                        <td>{productsale.name}</td>
                        <td className="text-center">{productsale.id}</td>
                        <td className="text-center">{productsale.price}</td>
                        <td className="text-center">{productsale.pricesale}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </section>
          </div>
          {/*END CONTENT*/}
        </div>
      </div>
    </div>
  );
};

export default ProductSale;
