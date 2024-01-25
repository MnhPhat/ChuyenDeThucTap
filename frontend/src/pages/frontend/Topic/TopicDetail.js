import { useEffect, useState } from "react";
import { urlImageTopic } from "../../../config";
import { Link } from "react-router-dom";
import TopicService from "../../../service/TopicService";

const TopicDetail = () => {
  const [topics, setTopics] = useState([]);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await TopicService.getList();
      setTopics(result.data.topics);
    })();
  }, [load]);
  console.log(topics);
  return (
    <div class="col-md-20 order-1 order-md-2">
      <h1 class="fs-2 text-main">{topics.name}</h1>
      <p>{topics.description}</p>
      <h3 class="fs-4 text-main">
        <strong>Bài viết khác</strong>
      </h3>
      <ul class="post-list-other">
      {topics &&
        topics.map((topic, index) => (
            <li>
              <Link to={"/topic/" + topics.id}>{topic.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TopicDetail;
