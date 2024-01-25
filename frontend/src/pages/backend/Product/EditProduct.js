import ProductService from "../../../service/ProductService";
import { useEffect, useState } from "react";
import BrandService from "../../../service/BrandService";
import { Link, useParams } from "react-router-dom";
import { urlImageProduct } from "../../../config";
const EidtProduct = () => { 
  const { id } = useParams();
  const [products, setproducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());
  const[image,setImage]=useState("");
  const [updated_at, setUpdate_at] = useState("");
  
  useEffect(() => {
    (async () => {
      const result = await ProductService.getById(id);
      setproducts(result.data.products);
      setName(result.data.products.name);
      setDescription(result.data.products.description);
      setStatus(result.data.products.status);
      setImage(result.data.products.image);
      setUpdate_at(result.data.products.updated_at);
    })();
  }, [load, id]);

  // console.log(products)
  const handEdit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var product = new FormData();
    product.append("name", name);
    product.append("description", description);
    product.append("sort_order", 1);
    product.append("status", status);
    product.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await ProductService.updateProduct(id, product);
      if (result.data.status === true) {
        alert("Cập nhật thành công");
        setLoad(Date.now());
      
      }else{
        alert("loi");
      }
    })();
  };

  
    return (
      <div>
        <div className="content">
          <section className="content-header my-2">
            <h1 className="d-inline">Cập nhật danh mục</h1>
            <div className="text-end">
              <a href="category_index.html">Về danh sách</a>
            </div>
          </section>
          <section className="content-body my-2">
            <div className="row">
              <div className="col-md-7">
                <form onSubmit={handEdit}>
                  <div className="mb-3">
                    <label>
                      <strong>Tên danh mục (*)</strong>
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
                    />
                    <div className="box-container mt-4 bg-white">
                      <div className="box-header py-1 px-2 border-bottom">
                        <strong>Đăng</strong>
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
                      <div className="mb-3">
                        <label>
                          <strong>Ngày sửa</strong>
                        </label>
                        <textarea
                          value={updated_at}
                          name="update_at"
                          rows={1}
                          className="form-control"
                          placeholder="Mô tả"
                        />
                      </div>
                      <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                          <strong>Hình (*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                          <input
                            type="file"
                            id="image"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="box-footer text-end px-2 py-3">
                        <button
                          type="submit"
                          className="btn btn-success btn-sm text-end"
                        >
                          <i className="fa fa-save" aria-hidden="true" /> Câp
                          nhật
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-3">
                <label>
                  <div style={{fontSize:20}}>Hình ảnh (*)</div>
                  <img
                    className="img-fluid" style={{width:"100%"}}
                    src={urlImageProduct +'/'+ products.image}
                    alt="category.jpg"
                  />
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}
 
export default EidtProduct;