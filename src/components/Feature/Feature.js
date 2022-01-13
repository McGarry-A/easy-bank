import "./Feature.css";

const Feature = ({ icon, title, text }) => {
  return (
    <div className="feature">
      <img src={icon} alt="icon" className="feature-image" />
      <h2 className="feature-title">{title}</h2>
      <p className="feature-text">{text}</p>
    </div>
  );
};

export default Feature;
