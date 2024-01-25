import { useEffect, useState } from "react";
import RegisterSV from "../../../service/RegisterSV";
import { toast } from "react-toastify";
// import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = () => {
  const [users, setUser] = useState([]);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await RegisterSV.getList();
      setUser(result.data.users);
    })();
  },[load]);
  // console.log(users);
  const HandleLogin = async () => {
    let enteredEmail = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;
    users.forEach(() => {
      if (users.username === enteredEmail && users.password === enteredPassword) {
       alert("Login successful");
      } else alert("Login Fail");
    });
  };
  // console.log(users);
  return (
    <div className="row">
      <div className="col-md-4">
       
      </div>

      <div className="col-md-4">
        <div className="mb-3">
          <label htmlFor="username" className="text-main">
            Tên tài khoản (*)
          </label>
          <input
            type="text"
            name="username"
            // value={username}
            // onChange={(e) => setUserName(e.target.value)}
            id="username"
            className="form-control"
            placeholder="Nhập tài khoản đăng nhập"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-main">
            Mật khẩu (*)
          </label>
          <input
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Mật khẩu"
            required
          />
        </div>
        <div className="mb-3">
          <button
            onClick={HandleLogin}
            className="btn btn-main"
            style={{ backgroundColor: "#FF0099" }}
            name="LOGIN"
          >
            Đăng nhập
          </button>
        </div>
        <p>
          <u className="text-main">Chú ý</u>: (*) Thông tin bắt buộc phải nhập
        </p>
      </div>
    </div>
  );
};

export default Login;
