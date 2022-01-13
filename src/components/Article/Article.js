import "./Article.css";

const Article = ({ image, author, title, text }) => {
  return (
    <div className="article">
      <div className="article-image-container">
        <img src={image} alt="article" className="article-image" />
      </div>
      <div className="article-text-container">
        <p className="article-author">By {author}</p>
        <h3 className="article-title">{title}</h3>
        <p className="article-text">{text}</p>
      </div>
    </div>
  );
};

export default Article;
