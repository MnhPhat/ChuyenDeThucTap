import { useEffect, useState } from "react";
import RegisterSV from "../../../service/RegisterSV";
import { Link, useParams } from "react-router-dom";
const EditUsers = () => {
const { id } = useParams();
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
  }, [load,id]);
//   console.log(users);
    const handEdit = async (event) => {
    event.preventDefault();
   var user = new FormData();
   user.append("name", name);
   user.append("username", username);
   user.append("password", password);
   user.append("phone", phone);
   user.append("email", email);
   user.append("roles", roles);
   user.append("status", status);
    (async () => {
      const result = await RegisterSV.updateRegister(id, user);
      if (result.data.status === true) {
        alert("Cập nhật thành công");
        setLoad(Date.now());
      
      }else{
        alert("loi");
      }
    })();
  };
    return (
      <div className="col-md-7">
        <form onSubmit={handEdit}>
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
    );
}
 
export default EditUsers;