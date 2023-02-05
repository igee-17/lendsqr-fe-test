import { useEffect, useRef } from "react";
import Image from "next/image";
import { eye, blacklist, activateUser } from "../assets/icons";
import Link from "next/link";

const UserModal = ({ location, id }) => {
  const container = useRef(null);

  useEffect(() => {
    const filterMenu = container.current;
    const { left, bottom } = location;

    filterMenu.style.left = `${left}px`;
    filterMenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <div className="user-modal" ref={container}>
      <Link href={`/dashboard/${id}`} className="modal-item">
        <Image {...eye} alt="eye icon" />
        <p>View Details</p>
      </Link>
      <div className="modal-item">
        <Image {...blacklist} alt="blacklist icon" />

        <p>Blacklist User</p>
      </div>
      <div className="modal-item">
        <Image {...activateUser} alt="user icon" />
        <p>Activate User</p>
      </div>
    </div>
  );
};

export default UserModal;
