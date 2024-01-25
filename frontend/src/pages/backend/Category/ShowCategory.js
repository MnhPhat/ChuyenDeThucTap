import { useEffect, useState } from "react";
import CategoryService from "../../../service/CategoryService";
import { useParams, Link } from "react-router-dom";
import { urlImageCategory } from "../../../config";
const ShowCategory = () => {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await CategoryService.getById(id);
      setCategories(result.data.categories);
    })();
  }, [load, id]);
  //   console.log(categories);
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
                        <i className="fa fa-arrow-left" style={{}} /> Về danh
                        sách
                      </Link>
                      <Link
                        to={"/admin/product/edit/" + categories.id}
                        className="btn btn-success btn-sm"
                      >
                        <i className="fa fa-edit" /> Sửa
                      </Link>
                      <Link
                        to={"/admin/product/delete/" + categories.id}
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
                        <th style={{ width: 180 }}>ID Danh Mục</th>
                        <th>Tên </th>
                        <th>Description</th>
                        <th>Slug</th>
                        <th>Ảnh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{categories.parent_id}</td>
                        <td>{categories.name}</td>
                        <td>{categories.description}</td>
                        <td>{categories.slug}</td>
                        <td>
                          {" "}
                          <img
                            className="img-fluid"
                            src={urlImageCategory + categories.image}
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
};

export default ShowCategory;
