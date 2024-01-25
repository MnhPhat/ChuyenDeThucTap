import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Viewslider from "../../pages/frontend/Home/Slider";

const layoutsite = () => {
  return (
    <>
      <Header />
      <section className="hdl-maincontent bg-main">
      </section>
      
       
        <Outlet />
      <Footer />
      <script src="public/jquery/jquery-3.7.0.min.js"></script>
      <script src="public/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="public/js/backend.js"></script>
    </>
  );
};

export default layoutsite;
