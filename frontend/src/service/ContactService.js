import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("contact/index");
}

function getById(id) {
  return httpAxios.get("contact/show/" + id);
}
function getStore(data) {
  return httpAxios.post("contact/store", data);
}
function deletecontact(id) {
  return httpAxios.delete("contact/destroy/" + id);
}
function DeleteTrashcontact(id, data) {
  return httpAxios.post(`contact/updateSt/${id}`, data);
}
function updatecontact(id, data) {
  return httpAxios.post(`contact/update/${id}`, data);
}
const ContactService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  deletecontact: deletecontact,
  updatecontact: updatecontact,
  DeleteTrashcontact: DeleteTrashcontact,
};
export default ContactService;
