import { useEffect, useState } from "react";
import RegisterSV from "../../../service/RegisterSV";

const Register = () => {
  const [users, setRegisters] = useState([]);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await RegisterSV.getList();
      setRegisters(result.data.users);
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
  return (
    <div className="container">
      <h1 className="fs-2 text-main text-center">ĐĂNG KÝ TÀI KHOẢN</h1>
      <form onSubmit={handSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="text-main" style={{borderColor:"black"}}>
                Họ tên(*)
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                className="form-control"
                placeholder="nhập họ tên"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="text-main">
                Điện thoại(*)
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                className="form-control"
                placeholder="Nhập điện thoại"
                required
              />
            </div>
            <div className="mb-3">
              <div className="card">
                <div className="card-header text-main">Địa chỉ</div>
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="address">Địa chỉ</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Nhập địa chỉ"
                    />
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <select name="tinhtp" className="form-control">
                        <option value>Chọn Tỉnh/TP</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select name="quanhuyen" className="form-control">
                        <option value>Chọn Quận/Huyện</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select
                        name="phuongxa"
                        id="phuongxa"
                        className="form-control"
                      >
                        <option value>Chọn Phường/Xã</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="text-main">Giới tính</label>
              <div className="form-check form-switch">
                <input
                  name="gennder"
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                  onchange="changeGender()"
                />
                <label
                  className="form-check-label"
                  id="labelgender"
                  htmlFor="genderChecked"
                >
                  Nam
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="username" className="text-main">
                Tên tài khoản(*)
              </label>
              <input
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="username"
                className="form-control"
                placeholder="Nhập tài khoản đăng nhập"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-main">
                Email(*)
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="form-control"
                placeholder="Nhập email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="text-main">
                Mật khẩu(*)
              </label>
              <input
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
                type="password"
                name="password"
                className="form-control"
                placeholder="Mật khẩu"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password_re" className="text-main">
                Xác nhận Mật khẩu(*)
              </label>
              <input
                type="password"
                name="password_re"
                className="form-control"
                placeholder="Xác nhận mật khẩu"
                required
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-main"
                style={{ backgroundColor: "#FF0099", color: "white" }}
                name="REGISTER"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
