import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite";
import appRouter from "./router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<LayoutAdmin />}>
          {appRouter.routerAdmin.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />} key={index} />;
          })}
        </Route>
        <Route path="/" element={<LayoutSite />}>
          {appRouter.routerSite.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />} key={index} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

  