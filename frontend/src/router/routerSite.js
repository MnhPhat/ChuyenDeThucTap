
import Cart from "../pages/frontend/Cart/Cart";
import Home from "../pages/frontend/Home";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import Productfe from "../pages/frontend/Product/ProductItem";
import ProductList from "../pages/frontend/Product/ProductList";
import ProductNew from "../pages/frontend/Product/ProductNew";
import ProductSale from "../pages/frontend/Product/ProductSale";
import TopicDetail from "../pages/frontend/Topic/TopicDetail";
import TopicItems from "../pages/frontend/Topic/TopicItem";
import Login from "../pages/frontend/login/login";
import Register from "../pages/frontend/login/register";

const routerSite = [
  { path: "", component: Home },

  { path: "/product", component: ProductList },
  { path: "/product/show/:id", component: ProductDetail },
  { path: "/product/new", component: ProductNew },
  { path: "/product/sale", component: ProductSale },

  { path: "/topic/", component: TopicItems },
  { path: "/topic/show/:id", component: TopicDetail },

  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/cart", component: Cart },

  {},
];
export default routerSite;
