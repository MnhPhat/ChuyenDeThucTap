import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("user/index");
}
function getById(id) {
  return httpAxios.get("user/show/" + id);
}
function getStore(data) {
  return httpAxios.post("user/store", data);
}
function deleteregister(id) {
  return httpAxios.delete("user/destroy/" + id);
}
function DeleteTrashRegister(id, data) {
  return httpAxios.post(`user/updateSt/${id}`, data);
}
function updateRegister(id, data) {
  return httpAxios.post(`user/update/${id}`, data);
}
const RegisterSV = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  deleteregister: deleteregister,
  updateRegister: updateRegister,
  DeleteTrashRegister: DeleteTrashRegister,
};
export default RegisterSV;
