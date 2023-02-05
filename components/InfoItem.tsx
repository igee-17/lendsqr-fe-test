const InfoItem = ({ head, text }) => {
  return (
    <div className="info-item">
      <h2>{head}</h2>
      <p>{text}</p>
    </div>
  );
};

export default InfoItem;
