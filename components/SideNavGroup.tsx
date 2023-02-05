import SideNavItem from "./SideNavItem";

const SideNavGroup = ({ heading, items }) => {
  return (
    <div className="sidenav-group">
      <div className="heading">
        <p>{heading}</p>
      </div>
      {items.map((item) => {
        return (
          <SideNavItem {...item} active={item.text === "users"} key={item.id} />
        );
      })}
    </div>
  );
};

export default SideNavGroup;
