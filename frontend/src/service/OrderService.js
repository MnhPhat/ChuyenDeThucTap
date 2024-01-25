import httpAxios from "../httpAxios";


function getList() {
  return httpAxios.get("order/index");
}
function getById(id) {
  return httpAxios.get("order/show/" + id);
}
function storeexport(data) {
  return httpAxios.post(`order/storeexport`, data);
}


const OrderService = {
  storeexport: storeexport,
  getList: getList,
  getById: getById,
};
export default OrderService;
