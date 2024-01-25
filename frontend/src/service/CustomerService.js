import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("oder/index");
}

function getById(id) {
  return httpAxios.get("oder/show/" + id);
}
function getStore(data) {
  return httpAxios.post("oder/store", data);
}
function deleteorder(id) {
  return httpAxios.delete("oder/destroy/" + id);
}
function DeleteTrashorder(id, data) {
  return httpAxios.post(`oder/updateSt/${id}`, data);
}
function updateorder(id, data) {
  return httpAxios.post(`oder/update/${id}`, data);
}
const CustomerService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  deleteorder: deleteorder,
  updateorder: updateorder,
  DeleteTrashorder: DeleteTrashorder,
};
export default CustomerService;
