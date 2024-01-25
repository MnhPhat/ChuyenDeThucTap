const Footer = () => {
    return (
      <section className="hdl-footer pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-4">
              <h3 className="widgettilte">CHÚNG TÔI LÀ AI ?</h3>
              <p className="pt-1">
                Copyright@ 2024 DienloiShop là hệ thống bán sĩ và lẽ thời trang
                nam, nữ, trẻ em và quần áo thể thao, mong muốn đem đến chất
                lượng tốt nhất cho khách hàng.
              </p>
              <p className="pt-1">
                Địa chỉ: B216A, KP Bình Phước, Phường Bình Nhâm, TP. Thuận An,
                Bình Dương
              </p>
              <p className="pt-1">
                Điện thoại: 0985 608 759(call, zalo) - Email:
                dienloisoft@gmail.com
              </p>
              <h3 className="widgettilte">MẠNG XÃ HỘI</h3>
              <div className="social my-3">
                <div className="facebook-icon">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </div>
                <div className="instagram-icon">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="google-icon">
                  <a href="#">
                    <i className="fab fa-google" />
                  </a>
                </div>
                <div className="youtube-icon">
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-4">
              <h3 className="widgettilte">
                <strong>Liên hệ</strong>
              </h3>
              <ul className="footer-menu">
                <li>
                  <a href="index.html">Trang chủ</a>
                </li>
                <li>
                  <a href="post_page.html">Giới thiệu</a>
                </li>
                <li>
                  <a href="product.html">Sản phẩm</a>
                </li>
                <li>
                  <a href="post_topic.html">Bài viết</a>
                </li>
                <li>
                  <a href="contact.html">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 pt-4 text-end">
              <h3 className="fs-5 text-end">
                <strong>Lượt truy cập</strong>
              </h3>
              <p className="my-1">9888 lượt</p>
            </div>
          </div>
        </div>
        <section className="dhl-copyright bg-dark py-3">
          <div className="container text-center text-white">
            Thiết kế bởi: Hồ Diên Lợi - Phone: 0998765432
          </div>
        </section>
      </section>
    );
}
 
export default Footer;