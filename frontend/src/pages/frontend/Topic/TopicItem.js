import { useEffect, useState } from "react";
import { urlImageTopic } from "../../../config";
import { Link } from "react-router-dom";
import TopicService from "../../../service/TopicService";

const TopicItems = () => {
  const [topics, setTopics] = useState([]);
  const [load, setLoad] = useState(Date.now());
  useEffect(() => {
    (async () => {
      const result = await TopicService.getList();
      setTopics(result.data.topics
        );
    })();
  }, [load]);
  return (
    <>
      <div className="category-title bg-main">
        <h3 className="fs-5 py-3 text-center">SẢN PHẨM</h3>
      </div>
      <div className="product-category mt-3">
        <div className="row product-list">
          {topics &&
            topics.map((topic, index) => (
              <div className="row post-item mb-4">
                <div className="col-4 col-md-4">
                  <div className="post-item-image">
                    <Link to={"/topic/show/" + topic.id}>
                      <img
                        src={urlImageTopic + topic.image}
                        className="img-fluid"
                        alt="dasdsa"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-8 col-md-8">
                  <h2 className="post-item-title fs-5 py-1">
                    <Link to={"/topic/show/" + topic.id}>{topic.name}</Link>
                  </h2>
                  <p>{topic.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TopicItems;
