import { Link, Outlet } from "react-router-dom";
import "./backend.css";
import "../../asset/bootstrap/css/bootstrap.min.css";
import "../../asset/bootstrap/js/bootstrap.bundle.min.js";
import { FaPlus, FaProductHunt } from "react-icons/fa";
const   LayoutAdmin = () => {
  function handleItemClick(item) {
    const hdlitem = document.getElementById(item);
    hdlitem.classList.toggle("active");
  }
  return (
    <>
      <section className="hdl-header sticky-top">
        <div className="container-fluid">
          <ul className="menutop">
            <li>
              <a href="">
                <i className="fa-brands fa-dashcube"></i> Shop Thời trang
              </a>
            </li>
            <li className="text-phai">
              <a href="">
                <i className="fa-solid fa-power-off"></i> Thoát
              </a>
            </li>
            <li className="text-phai">
              <a href="">
                <i className="fa fa-user" aria-hidden="true"></i> Chào quản lý
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 bg-dark p-0 hdl-left">
              <div className="hdl-left">
                <div className="dashboard-name">Bản điều khiển</div>
                <nav className="m-2 mainmenu">
                  <ul className="main">
                    <li
                      className="hdlitem item-sub"
                      id="item1"
                      onClick={() => handleItemClick("item1")}
                    >
                      <FaProductHunt className="icon-left" />

                      <a href="#">Sản phẩm</a>
                      <FaPlus className=" icon-right" />

                      <ul className="submenu">
                        <li>
                          <a href="/admin/product">Tất cả sản phẩm</a>
                        </li>
                        <li>
                          <a href="/admin/product/store">Nhập hàng</a>
                        </li>
                        <li>
                          <a href="/admin/brand">Thương hiệu</a>
                        </li>
                        <li>
                          <a href="/admin/productnew">Sản Phẩm mới </a>
                        </li>
                        <li>
                          <a href="/admin/product/sale">Khuyễn mãi</a>
                        </li>
                     
                        <li>
                          <a href="/admin/category">Danh mục</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="hdlitem item-sub"
                      id="item2"
                      onClick={() => handleItemClick("item2")}
                    >
                      <FaProductHunt className="icon-left" />
                      <FaPlus className=" icon-right" />
                      <a href="#">Bài viết</a>
                      <i className="fa-solid fa-plus icon-right"></i>
                      <ul className="submenu">
                        <li>
                          <a href="/admin/topic">Tất cả bài viết</a>
                        </li>
                        <li>
                          <a href="/admin/topic">Chủ đề</a>
                        </li>
                        <li>
                          <a href="page_index.html">Trang đơn</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="hdlitem item-sub"
                      id="item3"
                      onClick={() => handleItemClick("item3")}
                    >
                      <FaProductHunt className="icon-left" />
                      <FaPlus className=" icon-right" />
                      <a href="#">Quản lý bán hàng</a>
                      <i className="fa-solid fa-plus icon-right"></i>
                      <ul className="submenu">
                        <li>
                          <a href="/admin/listorder">Tất cả đơn hàng</a>
                        </li>
                        <li>
                          <a href="/admin/export">Xuất hàng</a>
                        </li>
                      </ul>
                    </li>
                    <li className="hdlitem">
                      <i className="fa-regular fa-circle icon-left"></i>
                      <a href="/admin/user">Khách hàng</a>
                    </li>
                    <li className="hdlitem">
                      <i className="fa-regular fa-circle icon-left"></i>
                      <a href="/admin/contact">Liên hệ</a>
                    </li>
                    <li
                      className="hdlitem item-sub"
                      id="item4"
                      onClick={() => handleItemClick("item4")}
                    >
                      <FaProductHunt className="icon-left" />
                      <FaPlus className=" icon-right" />
                      <i className="fa-brands fa-product-hunt icon-left"></i>
                      <a href="#">Giao diện</a>
                      <i className="fa-solid fa-plus icon-right"></i>
                      <ul className="submenu">
                        <li>
                          <a href="menu_index.html">Menu</a>
                        </li>
                        <li>
                          <a href="banner_index.html">Banner</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="hdlitem item-sub"
                      id="item5"
                      onClick={() => handleItemClick("item5")}
                    >
                      <FaProductHunt className="icon-left" />
                      <FaPlus className=" icon-right" />
                      <i className="fa-brands fa-product-hunt icon-left"></i>
                      <a href="#">Hệ thống</a>
                      <i className="fa-solid fa-plus icon-right"></i>
                      <ul className="submenu">
                        <li>
                          <a href="/admin/user">Thành viên</a>
                        </li>
                        <li>
                          <a href="config_index.html">Cấu hình</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-10">
              <div className="content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="public/jquery/jquery-3.7.0.min.js"></script>
      <script src="public/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="public/js/backend.js"></script>
    </>
  );
};

export default LayoutAdmin;
