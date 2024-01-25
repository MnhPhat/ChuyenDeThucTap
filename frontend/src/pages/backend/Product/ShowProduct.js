import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImageProduct } from "../../../config";
import ProductService from "../../../service/ProductService";

const ShowProduct = () => {
  const [load, setLoad] = useState(Date.now());
  const { id } = useParams();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await ProductService.getById(id);
      setProduct(result.data.products);
    })();
  }, [load]);
  console.log(products);
  return (
    <div>
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <div className="content">
                <section className="content-header my-2">
                  <h1 className="d-inline">Chi tiết</h1>
                  <div className="row mt-2 align-items-center">
                    <div className="col-md-12 text-end">
                      <Link
                        to="/admin/product"
                        className="btn btn-primary btn-sm pd-3 "
                      >
                        <i className="fa fa-arrow-left" style={{}} /> Về danh sách
                      </Link>
                      <Link
                        to={"/admin/product/edit/" + products.id}
                        className="btn btn-success btn-sm"
                      >
                        <i className="fa fa-edit" /> Sửa
                      </Link>
                      <Link
                        to={"/admin/product/delete/" + products.id } 
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa fa-trash" /> Xóa
                      </Link>
                    </div>
                  </div>
                </section>
                <section className="content-body my-2">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th style={{ width: 180 }}>Tên trường</th>
                        <th>Giá trị</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Hình ảnh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Id</td>
                        <td>{id}</td>
                        <td>{products.name}</td>
                        <td>{products.description}</td>
                        <td>
                          {" "}
                          <img
                            className="img-fluid"
                            src={urlImageProduct + products.image}
                            alt="category.jpg"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default ShowProduct;