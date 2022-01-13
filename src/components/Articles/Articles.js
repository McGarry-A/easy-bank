import "./Articles.css";
import { articleData } from "../../data";
import Article from "../Article/Article";

const Articles = () => {
  return (
    <div className="articles">
      <div className="articles-header">
        <h2>Latest Articles</h2>
      </div>
      <div className="article-container">
        {articleData.map((el, index) => {
          return (
            <Article
              image={el.image}
              author={el.author}
              title={el.title}
              text={el.text}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
