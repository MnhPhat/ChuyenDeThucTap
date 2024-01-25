import"./frontend.css"
import Logo from "../LayoutSite/asset/DCS_LOGO.png";

import { useShoppingContext } from "../../pages/frontend/context/ShoppingContext.tsx"
import { Link } from "react-router-dom";
import CartItem from "./CartItems.tsx";
import { MDBIcon } from "mdb-react-ui-kit";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
  const { cartItems, cartQty, totalPrice } = useShoppingContext();
    return (
      <>
        <section className="hdl-headerdd">
          <div className="container">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-2 py-1">
                <a href="/">
                  <img src={Logo} className="img-fluid" alt="Logo" />
                </a>
              </div>
              <div className="col-12 col-sm-9 d-none d-md-block col-md-5 py-3"></div>
              <div className="col-12 col-sm-12 d-none d-md-block col-md-4 text-center py-2">
                <div className="call-login--register border-bottom">
                  <ul className="nav nav-fills py-0 my-0">
                    <li className="nav-item">
                      <a className="nav-link" href="login.html">
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        0987654321
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Đăng nhập
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/register">
                        Đăng ký
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="profile.html">
                        Tran Minh Phat
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="fs-6 py-2">
                  ĐỔI TRẢ HÀNG HOẶC HOÀN TIỀN{" "}
                  <span className="text-main">TRONG 3 NGÀY</span>
                </div>
              </div>
              <div className="col-12 col-sm-9 col-md-12 text-end py-4 py-md-2">
                <div className="ml-auto">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownCart"
                        data-bs-auto-close="outside"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div style={{fontSize:50,     }}>
                          <FaCartPlus />
                        </div>

                        <span className="position-absolute top-0 start-1 badge badge-pill bg-danger">
                          {cartQty}
                        </span>
                      </a>

                      <ul
                        className="dropdown-menu dropdown-menu-end cart-dropdown"
                        aria-labelledby="navbarDropdownCart"
                      >
                        <li>
                          <h3 className="dropdown-item">Your Cart</h3>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                {cartItems.map((item) => {
                                  return <CartItem key={item.id} {...item} />;
                                })}
                              </tbody>
                            </table>
                          </div>
                        </li>

                        <li>
                          <span className="float-start ms-2">
                            <strong
                              style={{
                                fontSize: "20px",
                                fontFamily: "cursive",
                                color: "red",
                              }}
                            >
                              Total: {totalPrice}
                            </strong>
                          </span>
                          <Link
                            to="/checkout"
                            className="btn btn-sm btn-success float-end me-2"
                          >
                            Checkout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hdl-mainmenu bg-main">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12">
                <nav className="navbar navbar-expand-lg bg-main">
                  <div className="container-fluid">
                    <a
                      className="navbar-brand d-block d-sm-none text-white"
                      href="index.html"
                    >
                      DIENLOISHOP
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a
                            className="nav-link text-white"
                            aria-current="page"
                            href="index.html"
                          >
                            Trang chủ
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white" href="/product">
                            Sản Phẩm
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Thời trang nam
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item text-main"
                                href="product_category.html"
                              >
                                Quần jean nam
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-main"
                                href="product_category.html"
                              >
                                Áo thun nam
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-main"
                                href="product_category.html"
                              >
                                Sơ mi nam
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Thời trang nữ
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item text-main"
                                href="product_category.html"
                              >
                                Váy
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-main"
                                href="product_category.html"
                              >
                                Đầm
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-main"
                                href="product_category.html"
                              >
                                Sơ mi nữ
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a
                            href="post_topic.html"
                            className="nav-link text-white"
                          >
                            Bài viết
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="contact.html"
                            className="nav-link text-white"
                          >
                            Liên hệ
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
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

export default Header;