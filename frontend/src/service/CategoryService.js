import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("category/index");
}

function getById(id) {
  return httpAxios.get("category/show/" + id);
}
function getStore(data) {
  return httpAxios.post("category/store", data);
}
function deletecategory(id) {
  return httpAxios.delete("category/destroy/" + id);
}
function DeleteTrashcategory(id, data) {
  return httpAxios.post(`category/updateSt/${id}`, data);
}
function updatecategory(id, data) {
  return httpAxios.post(`category/update/${id}`, data);
}
const CategoryService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  deletecategory: deletecategory,
  updatecategory: updatecategory,
  DeleteTrashcategory: DeleteTrashcategory,
};
export default CategoryService;
