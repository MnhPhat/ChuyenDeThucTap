import { useEffect, useState } from "react";
import TopicService from "../../../service/TopicService";
import { urlImageTopic } from "../../../config";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaEye,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";
const ListTopic = () => {
  const [topics, setTopics] = useState([]);
  const [name, setName] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await TopicService.getList();
      setTopics(result.data.topics);
    })();
  }, [load]);
console.log(topics)
  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    // console.log(status);
    var topic = new FormData();
    topic.append("status", status);
    (async () => {
      const result = await TopicService.DeleteTrashTopic(id, topic);
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
    var topic = new FormData();
    topic.append("status", 0);
    (async () => {
      const result = await TopicService.DeleteTrashTopic(id, topic);
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
    var topic = new FormData();
    topic.append("name", name);
    topic.append("description", description);
    topic.append("slug", slug);
    topic.append("status", status);
    topic.append("sort_order", sort_order);
    topic.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await TopicService.getStore(topic);
      if (result.data.status === true) {
        alert("Thêm thành công");
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thương hiệu</h1>
        <hr style={{ border: "none" }} />
      </section>
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handSubmit}>
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
                  <strong>Slug</strong>
                </label>
                <textarea
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
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
                  {topics &&
                    topics.map((topic, index) => {
                      return (
                        <option value={topic.sort_order} key={index}>
                          {topic.name}
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
            <div className="row mt-3 align-items-center">
              <div className="col-12">
                <ul className="manager">
                  <li>
                    <Link href="brand_index.html">Tất cả (123)</Link>
                  </li>
                  <li>
                    <Link href="#">Xuất bản (12)</Link>
                  </li>
                  <li>
                    <Link to="/admin/topic/delete">Rác (12)</Link>
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
                <button className="btnsearch d-inline">Tìm kiếm</button>
              </div>
            </div>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: 30 }}>
                    <input type="checkbox" id="checkboxAll" />
                  </th>
                  <th className="text-center" style={{ width: 90 }}>
                    Hình ảnh
                  </th>
                  <th>Tên thương hiệu</th>
                  <th>Tên slug</th>
                  <th>Description</th>
                  <th className="text-center" style={{ width: 30 }}>
                    ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {topics &&
                  topics.map((topic, index) =>
                    topic.status !== 0 ? (
                      <tr className="datarow" key={index}>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            className="img-fluid"
                            src={urlImageTopic + topic.image}
                            alt="category.jpg"
                          />
                        </td>
                        <td>
                          <div className="name">
                            <Link
                              to={"/admin/topic/show/" + topic.id}
                              href="brand_index.html"
                            >
                              {topic.name}
                            </Link>
                          </div>
                          <div className="function_style">
                            <button
                              onClick={() => handleStatus(topic.id)}
                              className={
                                topic.status === 1
                                  ? "border-0 px-1 text-success"
                                  : "border-0 px-1 text-danger"
                              }
                            >
                              {topic.status === 1 ? (
                                <FaToggleOn />
                              ) : (
                                <FaToggleOff />
                              )}
                            </button>
                            <Link href="#" className="px-1 text-success">
                              <i className="fa fa-toggle-on" />
                            </Link>
                            <Link
                              to={"/admin/topic/edit/" + topic.id}
                              className="px-1 text-primary"
                            >
                              <FaEdit />
                            </Link>
                            <Link
                              to={"/admin/topic/show/ " + topic.id}
                              className="px-1 text-info"
                            >
                              <FaEye />
                            </Link>
                            <Link
                              href="#"
                              className="px-1 text-danger"
                              onClick={() => handDeleteTrash(topic.id)}
                            >
                              <FaTrash />
                            </Link>
                          </div>
                        </td>
                        <td>{topic.slug}</td>
                        <td className="text-center">{topic.description}</td>
                        <td className="text-center">{topic.id}</td>
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

export default ListTopic;
