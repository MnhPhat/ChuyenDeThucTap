import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("topic/index");
}
function getById(id) {
  return httpAxios.get("topic/show/" + id);
}
function getStore(data) {
  return httpAxios.post("topic/store", data);
}
function deleteTopic(id) {
  return httpAxios.delete("topic/destroy/" + id);
}
function DeleteTrashTopic(id, data) {
  return httpAxios.post(`topic/updateSt/${id}`, data);
}
function updateTopic(id, data) {
  return httpAxios.post(`topic/update/${id}`, data);
}

const TopicService = {
  getList: getList,
  getById: getById,
  getStore: getStore,
  deleteTopic: deleteTopic,
  updateTopic: updateTopic,
  DeleteTrashTopic: DeleteTrashTopic,
};
export default TopicService;
