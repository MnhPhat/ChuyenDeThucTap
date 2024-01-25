import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("brand/index");
}

function getById(id) {
  return httpAxios.get("brand/show/" + id);
}
function getStore(data) {
  return httpAxios.post("brand/store", data);
}
function deletebrand(id) {
  return httpAxios.delete("brand/destroy/" + id);
}
function DeleteTrashBrand(id, data) {
  return httpAxios.post(`brand/updateSt/${id}`, data);
}
function updateBrand(id, data) {
  return httpAxios.post(`brand/update/${id}`, data);
}
const BrandService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  deletebrand: deletebrand,
  updateBrand: updateBrand,
  DeleteTrashBrand: DeleteTrashBrand,
};
export default BrandService;
