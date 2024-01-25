import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandService from "../../../service/BrandService";
import { urlImage } from "../../../config";

const ShowBrand = (props) => {
  const [load, setLoad] = useState(Date.now());
  const {id} =useParams();
  const [brands, setBrands] = useState([]);
    useEffect(() => {
      (async () => {
        const result = await BrandService.getById(id);
        setBrands(result.data.brands);
      })();
    }, [load]);
    // console.log(brands)
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
                        <a
                          href="brand_index.html"
                          className="btn btn-primary btn-sm pd-3 "
                        >
                          <i className="fa fa-arrow-left" /> Về danh sách
                        </a>
                        <a
                          href="brand_edit.html"
                          className="btn btn-success btn-sm"
                        >
                          <i className="fa fa-edit" /> Sửa
                        </a>
                        <a
                          href="brand_index.html"
                          className="btn btn-danger btn-sm"
                        >
                          <i className="fa fa-trash" /> Xóa
                        </a>
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
                          <td>{brands.name}</td>
                          <td>{brands.description}</td>
                          <td>
                            {" "}
                            <img
                              className="img-fluid"
                              src={urlImage + brands.image}
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
 
export default ShowBrand
