import { useState, useEffect } from "react";
import ProductService from "../../../service/ProductService";
import { Link } from "react-router-dom";
import { urlImageProduct } from "../../../config";
import {
  FaToggleOff,
  FaToggleOn,
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";
import CategoryService from "../../../service/CategoryService";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  const [sort_order, setSortOrder] = useState(0);
  const [name, setName] = useState("");
  const [brand_id, setBrand_id] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();
      const result2 = await CategoryService.getList();
      setProducts(result.data.products);
      setCategories(result2.data.categories)
    })();
  }, [load]); 
  console.log(categories);

  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    // console.log(status);
    var product = new FormData();
    product.append("status", status);
    (async () => {
      const result = await ProductService.DeleteTrashProduct(id, product);
      if (result.data.status === true) {
        // toastr.success('Nội dung thông báo', 'title')
        alert("Cập nhật thành công");
        // ("Xóa thành công")
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };

  const handDeleteTrash = async (id) => {
    var product = new FormData();
    product.append("status", 0);
    (async () => {
      const result = await ProductService.DeleteTrashProduct(id, product);
      if (result.data.status === true) {
        // toastr.success('Nội dung thông báo', 'title')
        alert("Xóa thành công");
        // ("Xóa thành công")
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
  const handSubmit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var product = new FormData();
    product.append("name", name);
    product.append("description", description);
    product.append("status", status);
    product.append("sort_order", sort_order);
    product.append("category_id", category_id);
    product.append("brand_id", brand_id);
    product.append("detail", detail);
    product.append("price", price);
    product.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
        const result = await ProductService.getStore(product);
        if (result.data.status === true) {
          alert("thêm thành công");
          setLoad(Date.now());
        } else {
          alert("lỗi");
        }
      })();
    };

  return (
    <div className="row">
      <div className="col-md-4">
        <form onSubmit={handSubmit}>
          <div className="mb-3">
            <label>
              <strong>Category_id (*)</strong>
            </label>
            <input
              value={category_id}
              onChange={(e) => setCategory_id(e.target.value)}
              type="text"
              name="category_id"
              id="category_id"
              placeholder="Nhập tên danh mục"
              className="form-control"
              required
            />
          </div>{" "}
          <div className="mb-3">
            <label>
              <strong>Brand_id(*)</strong>
            </label>
            <input
              value={brand_id}
              onChange={(e) => setBrand_id(e.target.value)}
              type="text"
              name="brand_id"
              id="brand_id"
              placeholder="Nhập tên danh mục"
              className="form-control"
              required
            />
          </div>{" "}
          <div className="mb-3">
            <label>
              <strong>Tên thương hiệu (*)</strong>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Nhập tên danh mục"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label>
              <strong>Detail(*)</strong>
            </label>
            <input
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              type="text"
              name="detail"
              id="detail"
              placeholder="Nhập tên danh mục"
              className="form-control"
              required
            />
          </div>{" "}
          <div className="mb-3">
            <label>
              <strong>price(*)</strong>
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              name="price"
              id="price"
              placeholder="Nhập tên danh mục"
              className="form-control"
              required
            />
          </div>{" "}
          <div className="mb-3">
            <label>
              <strong>Mô tả</strong>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              rows={4}
              className="form-control"
              placeholder="Mô tả"
              defaultValue={""}
            />
          </div>
          <div className="mb-3">
            <label>
              <strong>sắp xếp</strong>
            </label>
            <select
              name="sort_order"
              className="form-select"
              value={sort_order}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              {products &&
                products.map((product, index) => {
                  return (
                    <option value={product.sort_order} key={index}>
                      {product.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="mb-3">
            <label>
              <strong>Hình đại diện</strong>
            </label>
            <input type="file" id="image" className="form-control" />
          </div>
          <div className="mb-3">
            <label>
              <strong>Trạng thái</strong>
            </label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value={1}>Xuất bản</option>
              <option value={2}>Chưa xuất bản</option>
            </select>
          </div>
          <div className="mb-3 text-end">
            <button type="submit" className="btn btn-success" name="THEM">
              <i className="fa fa-save" /> Lưu[Thêm]
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-8">
        <div className="content">
          <section className="content-header my-2">
            <h1 className="d-inline">Sản phẩm</h1>
            <a href="product_create.html" className="btn-add">
              Thêm mới
            </a>
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
                    <a href="/admin/product/delete">Rác (12)</a>
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
                  <th>ID danh mục</th>
                  <th>Giá</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, index) =>
                    product.status !== 0 ? (
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
                        <td>
                          <div className="name">
                            <Link
                              to={"/admin/product/show/" + product.id}
                              href="brand_index.html"
                            >
                              {product.name}
                            </Link>
                          </div>
                          <div className="function_style">
                            <button
                              onClick={() => handleStatus(product.id)}
                              className={
                                product.status === 1
                                  ? "border-0 px-1 text-success"
                                  : "border-0 px-1 text-danger"
                              }
                            >
                              {product.status === 1 ? (
                                <FaToggleOn />
                              ) : (
                                <FaToggleOff />
                              )}
                            </button>
                            <Link href="#" className="px-1 text-success">
                              <i className="fa fa-toggle-on" />
                            </Link>
                            <Link
                              to={"/admin/product/edit/" + product.id}
                              className="px-1 text-primary"
                            >
                              <FaEdit />
                            </Link>
                            <Link
                              to={"/admin/product/show/" + product.id}
                              href="brand_index.html"
                            >
                              <FaEye />
                            </Link>
                            <Link
                              href="#"
                              className="px-1 text-danger"
                              onClick={() => handDeleteTrash(product.id)}
                            >
                              <FaTrash />
                            </Link>
                          </div>
                        </td>
                        <td>
                          {product.category_id}
                        </td>
                        <td className="text-center">{product.price}</td>
                        <td className="text-center">{product.id}</td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </table>
          </section>
        </div>
        {/*END CONTENT*/}
      </div>
    </div>
  );
};

export default ListProduct;
