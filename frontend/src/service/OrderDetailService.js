import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("orderdetail/index");
}
function getById(id) {
  return httpAxios.get("orderdetail/show" + id);
}
const OrderDetailService = {
  getList: getList,
  getById: getById,
};
export default OrderDetailService;
