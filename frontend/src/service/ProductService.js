import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("product/index");
}
function getById(id) {
  return httpAxios.get("product/show/" + id);
}
function getStore(data) {
  return httpAxios.post("product/store", data);
}
function deleteproduct(id) {
  return httpAxios.delete("product/destroy/" + id);
}
function DeleteTrashProduct(id, data) {
  return httpAxios.post(`product/updateSt/${id}`, data);
}
function updateProduct(id, data) {
  return httpAxios.post(`product/update/${id}`, data);
}
function productnew(limit) {
  return httpAxios.get(`product/new/${limit}`);
}
function productsale(limit) {
  return httpAxios.get(`product/sale/${limit}`);
}
function storesale(data) {
  return httpAxios.post("product/sale", data);
}
function productstore(data) {
  return httpAxios.post("product/import", data);
}
function getBySlug(slug) {
  return httpAxios.get(`/product/showSlug/${slug}`);
}
function productlimit(limit) {
  return httpAxios.get(`product/productlimit/${limit}`);
}
function search(term) {
  return httpAxios.get(`product/search`, { params: { search: term } });
}

const ProductService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  deleteproduct: deleteproduct,
  updateProduct: updateProduct,
  DeleteTrashProduct: DeleteTrashProduct,
  productnew: productnew,
  productsale: productsale,
  storesale: storesale,
  productstore: productstore,
  getBySlug:getBySlug,
  productlimit:productlimit,
  search:search
};
export default ProductService;
