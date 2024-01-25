import { useEffect, useState } from "react";
import ContactService from "../../../service/ContactService";
import { urlImage, urlImageContact } from "../../../config";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaEye,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";
const ListContact = () => {
    
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState(1);
    const [sort_order, setSortOrder] = useState(0);
    const [load, setLoad] = useState(Date.now());
    useEffect(() => {
    (async () => {
      const result = await ContactService.getList();
      setContacts(result.data.contacts);
    })();
  }, [load]);
  console.log(contacts);
  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    // console.log(status);
    var contact= new FormData();
    contact.append("status", status);
    (async () => {
      const result = await ContactService.DeleteTrashcontact(id,contact);
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
     var contact = new FormData();
     contact.append("status", 0);
     (async () => {
       const result = await ContactService.DeleteTrashcontact(id, contact);
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
    var contact = new FormData();
    contact.append("name", name);
    contact.append("email", email);
    contact.append("status", status);
    contact.append("phone", phone);
  
    contact.append("sort_order", sort_order);
    contact.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await ContactService.getStore(contact);
      if (result.data.status === true) {
        alert("thêm thành công");
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
    return (
      <div className="content">
        <section className="content-header my-2">
          <h1 className="d-inline">Liên Hệ</h1>
          <hr style={{ border: "none" }} />
        </section>
        <section className="content-body my-2">
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={handSubmit}>
                <div className="mb-3">
                  <label>
                    <strong>Tên Liên Hệ (*)</strong>
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
                    <strong>Email</strong>
                  </label>
                  <textarea
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    rows={4}
                    className="form-control"
                    placeholder="Mô tả"
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Phone</strong>
                  </label>
                  <textarea
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    rows={1}
                    className="form-control"
                    placeholder="Mô tả"
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Title</strong>
                  </label>
                  <textarea
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    rows={4}
                    className="form-control"
                    placeholder="title"
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>content</strong>
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    name="content"
                    rows={4}
                    className="form-control"
                    placeholder="content"
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
                    {contacts &&
                      contacts.map((contact, index) => {
                        return (
                          <option value={contact.sort_order} key={index}>
                            {contact.name}
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
                      <Link href="contact_index.html">Tất cả (123)</Link>
                    </li>
                    <li>
                      <Link href="#">Xuất bản (12)</Link>
                    </li>
                    <li>
                      <Link to="/admin/contact/delete">Rác (12)</Link>
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
                    <th className="text-center" style={{ width: 90 }}>
                      Tên khách
                    </th>
                    <th className="text-center" style={{ width: 90 }}>
                      Email
                    </th>
                    <th className="text-center" style={{ width: 90 }}>
                      Số điện thoại
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contacts &&
                    contacts.map((contact, index) => (
                      <tr className="datarow">
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            className="img-fluid"
                            src={urlImageContact + "/" + contact.image}
                            alt="category.jpg"
                          />
                        </td>
                        <td>
                          <div className="name">
                            <Link
                              to={"/admin/contact/show/" + contact.id}
                              href="contact_index.html"
                            >
                              {contact.name}
                            </Link>
                          </div>
                          <div className="function_style">
                            <button
                              onClick={() => handleStatus(contact.id)}
                              className={
                                contact.status === 1
                                  ? "border-0 px-1 text-success"
                                  : "border-0 px-1 text-danger"
                              }
                            >
                              {contact.status === 1 ? (
                                <FaToggleOn />
                              ) : (
                                <FaToggleOff />
                              )}
                            </button>
                            <Link href="#" className="px-1 text-success">
                              <i className="fa fa-toggle-on" />
                            </Link>
                            <Link
                              to={"/admin/contact/edit/" + contact.id}
                              className="px-1 text-primary"
                            >
                              <FaEdit />
                            </Link>
                            <Link
                              to={"/admin/contact/show/ " + contact.id}
                              className="px-1 text-info"
                            >
                              <FaEye />
                            </Link>
                            <Link
                              href="#"
                              className="px-1 text-danger"
                              onClick={() => handDeleteTrash(contact.id)}
                            >
                              <FaTrash />
                            </Link>
                          </div>
                        </td>
                        <td>{contact.email}</td>
                        <td className="text-center">{contact.phone}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default ListContact;