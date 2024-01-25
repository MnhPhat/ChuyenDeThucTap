import { useEffect, useState } from "react";
import { urlImage, urlImageCategory } from "../../../config";
import CategoryService from "../../../service/CategoryService";
import {
  FaEdit,
  FaEye,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const ListCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parent_id, setParentId] = useState("");
  const [sort_order, setSortOrder] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());
  const [categoryId, setCategoryId] = useState("");
  useEffect(() => {
    (async () => {
      const result = await CategoryService.getList();
      setCategories(result.data.categories);
    })();
  }, [load]);
  console.log(categories);
  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    // console.log(status);
    var category = new FormData();
    category.append("status", status);
    (async () => {
      const result = await CategoryService.DeleteTrashcategory(id, category);
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
    var category = new FormData();
    category.append("status", 0);
    (async () => {
      const result = await CategoryService.DeleteTrashcategory(id, category);
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
    var category = new FormData();
    category.append("name", name);
    category.append("description", description);
    category.append("sort_order", sort_order);
    category.append("status", status);
    category.append("parent_id", parent_id);
    category.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await CategoryService.getStore(category);
      if (result.data.status === true) {
        setLoad(Date.now());
      }
    })();
  };
  return (
    <div>
      <section className="content-header my-2">
        <h1 className="d-inline">Danh mục</h1>
        <hr style={{ border: "none" }} />
      </section>
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handSubmit}>
              <div className="mb-3">
                <label>
                  <strong>Tên danh mục (*)</strong>
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
                  <strong>Mô tả</strong>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  placeholder="Mô tả"
                  rows={4}
                  className="form-control"
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Danh mục cha</strong>
                </label>
                <select
                  name="parent_id"
                  className="form-select"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value={0}>None</option>
                  <option value={0}>Chọn danh mục</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Tên danh mục</strong>
                </label>
                <select
                  name="parent_id"
                  className="form-select"
                  value={parent_id}
                  onChange={(e) => setParentId(e.target.value)}
                >
                  <option value={0}>None</option>
                  <option value={0}>Chọn danh mục</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
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
                  name="status"
                  className="form-select"
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
            <div className="row mt-3 align-items-center">
              <div className="col-12">
                <ul className="manager">
                  <li>
                    <Link href="category_index.html">Tất cả (123)</Link>
                  </li>
                  <li>
                    <Link href="#">Xuất bản (12)</Link>
                  </li>
                  <li>
                    <Link to="/admin/category/delete">Rác (12)</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row my-2 align-items-center">
              <div className="col-md-6">
                <select name className="d-inline me-1">
                  <option value>Hành động</option>
                  <option value>Bỏ vào thùng rác</option>
                </select>
                <button className="btnapply">Áp dụng</button>
              </div>
              <div className="col-md-6 text-end">
                <input type="text" className="search d-inline" />
                <button className="d-inline btnsearch">Tìm kiếm</button>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: 30 }}>
                    <input type="checkbox" id="checkboxAll" />
                  </th>
                  <th className="text-center" style={{ width: 150 }}>
                    Tên danh mục
                  </th>
                  <th style={{ width: 150 }}>Tên slug</th>
                  <th className="text-center" style={{ width: 120 }}>
                    Mô tả
                  </th>
                  <th className="text-center" style={{ width: 30 }}>
                    ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories.map((category, index) =>
                    category.status !== 0 ? (
                      <tr className="datarow">
                        <td className="text-center">
                          <input type="checkbox" id="checkId" />
                        </td>
                        <td>
                          <div className="name">
                            <Link to={"/admin/category/show/"+category.id}>
                              {category.name}
                            </Link>
                          </div>
                          <img
                            className="img-fluid"
                            src={urlImageCategory + category.image}
                            alt="category.jpg"
                          />
                          <div className="function_style">
                            <button
                              onClick={() => handleStatus(category.id)}
                              className={
                                category.status === 1
                                  ? "border-0 px-1 text-success"
                                  : "border-0 px-1 text-danger"
                              }
                            >
                              {category.status === 1 ? (
                                <FaToggleOn />
                              ) : (
                                <FaToggleOff />
                              )}
                            </button>

                            <Link
                              to={"/admin/category/edit/" + category.id}
                              className="px-1 text-primary"
                            >
                              <FaEdit />
                            </Link>
                            <Link
                              to={"/admin/category/show/" + category.id}
                              className="px-1 text-info"
                            >
                              <FaEye />
                            </Link>
                            <Link
                              onClick={() => handDeleteTrash(category.id)}
                              className="px-1 text-danger"
                            >
                              <FaTrash />
                            </Link>
                          </div>
                        </td>
                        <td>{category.description}</td>
                        <td>{category.slug}</td>
                        <td className="text-center">{category.id}</td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListCategory;
