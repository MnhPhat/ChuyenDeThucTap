import DeleteTrashBrand from "../pages/backend/Brand/DeleteTrashBrand";
import EditBrand from "../pages/backend/Brand/EditBrand";
import ListBrand from "../pages/backend/Brand/ListBrand";
import ShowBrand from "../pages/backend/Brand/ShowBrand";
import DeleteTrashCategory from "../pages/backend/Category/DeleteTrashCategory";
import EditCategory from "../pages/backend/Category/EditCategory";
import ListCategory from "../pages/backend/Category/ListCategory";
import ShowCategory from "../pages/backend/Category/ShowCategory";
import DeleteTrashContact from "../pages/backend/Contact/DeleteTrashContact";
import EditContact from "../pages/backend/Contact/EditContact";
import ListContact from "../pages/backend/Contact/ListContact";
import ShowContact from "../pages/backend/Contact/ShowContact";
import ListOrder from "../pages/backend/Order/ListOrder";
import OrderDetail from "../pages/backend/Order/OderDetail";
import OrderExport from "../pages/backend/Order/OrderExport";
import DeleteTrashProduct from "../pages/backend/Product/DeleteTrashProduct";
import EidtProduct from "../pages/backend/Product/EditProduct";
import ListProduct from "../pages/backend/Product/ListProduct";
import ShowProduct from "../pages/backend/Product/ShowProduct";
import ProductSale from "../pages/backend/ProductSale/ListSaleProduct";
import DeleteTrashTopic from "../pages/backend/Topic/DeleteTrashTopic";
import EditTopic from "../pages/backend/Topic/EditTopic";
import ListTopic from "../pages/backend/Topic/ListTopic";
import ShowTopic from "../pages/backend/Topic/ShowTopic";
import DelteteTrashUser from "../pages/backend/Users/DeleteTrashUsers";
import EditUsers from "../pages/backend/Users/EditUsers";
import ListUsers from "../pages/backend/Users/ListUsers";
import ProductStore from "../pages/backend/productstore/ProductStore";

const routerAdmin = [
  //brand
  { path: "/admin/brand", component: ListBrand },
  { path: "/admin/brand/edit/:id", component: EditBrand },
  { path: "/admin/brand/show/:id", component: ShowBrand },
  { path: "/admin/brand/delete", component: DeleteTrashBrand },

  //category
  { path: "/admin/category", component: ListCategory },
  { path: "/admin/category/edit/:id", component: EditCategory },
  { path: "/admin/category/show/:id", component: ShowCategory },
  { path: "/admin/category/delete", component: DeleteTrashCategory },

  //product
  { path: "/admin/product", component: ListProduct },
  { path: "/admin/product/sale", component: ProductSale },
  { path: "/admin/product/edit/:id", component: EidtProduct },
  { path: "/admin/product/show/:id", component: ShowProduct },
  { path: "/admin/product/delete", component: DeleteTrashProduct },
  { path: "/admin/product/store", component: ProductStore },

  // Topic
  { path: "/admin/topic", component: ListTopic },
  { path: "/admin/topic/edit/:id", component: EditTopic },
  { path: "/admin/topic/show/:id", component: ShowTopic },
  { path: "/admin/topic/delete", component: DeleteTrashTopic },

  //Contact
  { path: "/admin/contact", component: ListContact },
  { path: "/admin/contact/edit/:id", component: EditContact },
  { path: "/admin/contact/show/:id", component: ShowContact },
  { path: "/admin/contact/delete", component: DeleteTrashContact },

  //Users
  { path: "/admin/user", component: ListUsers },
  { path: "/admin/user/edit/:id", component: EditUsers },
  // { path: "/admin/contact/show/:id", component: ShowContact },
  { path: "/admin/user/delete", component: DelteteTrashUser },

  //Order
  { path: "/admin/export", component: OrderExport },
  { path: "/admin/listorder", component: ListOrder },
  { path: "/admin/order/show/:id", component: OrderDetail },
];
export default routerAdmin;
