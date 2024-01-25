import ProductService from "../../../service/ProductService";
import { useEffect, useState } from "react";
import { urlImageProduct } from "./../../../config";
import { TbReload } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const DeleteTrashProduct = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(Date.now());
  const [status, setStatus] = useState(1);
  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();
      setProducts(result.data.products);
    })();
  }, [load]);

  const handleDelete = (id) => {
    (async () => {
      const result = await ProductService.deleteproduct(id);
      if (result.data.status === true) {
        alert("Xóa thành công");
        // ("Xóa thành công")
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
  console.log(products);
  const handleStatus = (id) => {
    setStatus(1);
    var product = new FormData();
    product.append("status", status);
    (async () => {
      const result = await ProductService.DeleteTrashProduct(id, product);
      if (result.data.status === true) {
        // toastr.success('Nội dung thông báo', 'title')
        alert("khôi phục thành công");
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
        <h1 className="d-inline">Thùng rác thương hiệu</h1>
        <div className="row mt-3 align-items-center">
          <div className="col-15 text-end">
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
          </div>
          <div className="col-md-4 text-end">
            <nav aria-label="Page navigation example">
              <ul className="pagination pagination-sm justify-content-end">
                <li className="page-item disabled">
                  <Link className="page-link">«</Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    »
                  </Link>
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
              <th>Tên thương hiệu</th>
              <th>Tên slug</th>
              <th className="text-center" style={{ width: 30 }}>
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, index) => {
                if (product.status === 0) {
                  return (
                    <tr className="datarow">
                      <td className="text-center">
                        <input type="checkbox" id="checkId" />
                      </td>
                      <td>
                        <img
                          className="img-fluid"
                          src={urlImageProduct + product.image}
                          alt="brand.jpg"
                        />
                      </td>
                      <td>
                        <div className="name">
                          <Link href="brand_index.html"> {product.name}</Link>
                        </div>
                        <div className="function_style">
                          <Link
                            href="#"
                            onClick={() => handleStatus(product.id)}
                            className="text-primary mx-1"
                          >
                            <TbReload />
                          </Link>

                          <Link
                            href="#"
                            onClick={() => handleDelete(product.id)}
                            className="text-danger mx-1"
                          >
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                      <td> {product.slug}</td>
                      <td className="text-center"> {product.id}</td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DeleteTrashProduct;
