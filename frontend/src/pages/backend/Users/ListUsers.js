import { useEffect, useState } from "react";
import RegisterSV from "../../../service/RegisterSV";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaEye,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";
const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState(1);

  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await RegisterSV.getList();
      setUsers(result.data.users);
    })();
  }, [load]);
  // console.log(users);

  const handSubmit = async (event) => {
    event.preventDefault();
    // var image = document.getElementById("image");
    var user = new FormData();
    user.append("name", name);
    user.append("username", username);
    user.append("password", password);
    user.append("phone", phone);
    user.append("email", email);
    user.append("roles", roles);
    user.append("status", status);
    // user.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await RegisterSV.getStore(user);
      if (result.data.status === true) {
        alert("thêm thành công");
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
      const result = await RegisterSV.DeleteTrashRegister(id, topic);
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
  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    // console.log(status);
    var topic = new FormData();
    topic.append("status", status);
    (async () => {
      const result = await RegisterSV.DeleteTrashRegister(id, topic);
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
                  <strong>UserName</strong>
                </label>
                <textarea
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  name="username"
                  rows={1}
                  className="form-control"
                  placeholder="user_name"
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>PassWord</strong>
                </label>
                <textarea
                  value={password}
                  onChange={(e) => setPassWord(e.target.value)}
                  name="password"
                  rows={1}
                  className="form-control"
                  placeholder="password"
                  defaultValue={""}
                />
              </div>

              <div className="mb-3">
                <label>
                  <strong>Email</strong>
                </label>
                <textarea
                  name="sort_order"
                  className="form-select"
                  placeholder="@domain.com"
                  rows={1}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Phone</strong>
                </label>
                <textarea
                  name="sort_order"
                  className="form-select"
                  rows={1}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Roles</strong>
                </label>
                <textarea
                  name="sort_order"
                  className="form-select"
                  rows={4}
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                />
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
                    <Link to="/admin/user/delete">Rác (12)</Link>
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
                  <th className="text-center" style={{ width: 180 }}>
                    Tên
                  </th>
                  <th>User_Name </th>

                  <th>Email</th>
                  <th>Phone</th>
                  <th>Roles</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map(
                    (user, index) => (
                      // topic.status !== 0 ? (
                      <tr className="datarow" key={index}>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>

                        <td>
                          <div className="name">
                            <Link
                              to={"/admin/user/show/" + user.id}
                              href="brand_index.html"
                            >
                              {user.name}
                            </Link>
                          </div>
                          <div className="function_style">
                            <button
                              onClick={() => handleStatus(user.id)}
                              className={
                                user.status === 1
                                  ? "border-0 px-1 text-success"
                                  : "border-0 px-1 text-danger"
                              }
                            >
                              {user.status === 1 ? (
                                <FaToggleOn />
                              ) : (
                                <FaToggleOff />
                              )}
                            </button>
                            <Link href="#" className="px-1 text-success">
                              <i className="fa fa-toggle-on" />
                            </Link>
                            <Link
                              to={"/admin/user/edit/" + user.id}
                              className="px-1 text-primary"
                            >
                              <FaEdit />
                            </Link>
                            <Link
                              to={"/admin/user/show/ " + user.id}
                              className="px-1 text-info"
                            >
                              <FaEye />
                            </Link>
                            <Link
                              href="#"
                              className="px-1 text-danger"
                              onClick={() => handDeleteTrash(user.id)}
                            >
                              <FaTrash />
                            </Link>
                          </div>
                        </td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.roles}</td>
                      </tr>
                    )
                    // ) : null
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListUsers;
