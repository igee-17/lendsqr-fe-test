import Image from "next/image";

const UserInfoBlock = ({ image, text, count }) => {
  return (
    <div className="info-item">
      <Image {...image} alt="pink-users" />
      <p>{text}</p>
      <h2>{count}</h2>
    </div>
  );
};

export default UserInfoBlock;
