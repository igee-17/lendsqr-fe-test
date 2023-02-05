import Image from "next/image";

const SideNavItem = ({ image, text, active }) => {
  return (
    <div className={active ? "sidenav-item active" : "sidenav-item"}>
      <div className="icon">
        <Image {...image} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default SideNavItem;
