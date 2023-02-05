import { useEffect, useRef } from "react";
import { selectArrowDown, calendar } from "../assets/icons";

const FilterMenu = ({ location }) => {
  const container = useRef(null);

  useEffect(() => {
    const filterMenu = container.current;
    const { left, bottom } = location;

    filterMenu.style.left = `${left}px`;
    filterMenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <div className="filter-menu" ref={container}>
      <div className="filter-item">
        <label htmlFor="organisation">organisation</label>
        <select
          name=""
          id="organisation"
          style={{ backgroundImage: `url(${selectArrowDown.src})` }}
        >
          <option value="" selected hidden disabled>
            Select
          </option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="username">user</label>
        <input id="username" name="username" placeholder="user" type="text" />
      </div>
      <div className="filter-item">
        <label htmlFor="email">email</label>
        <input id="email" name="email" placeholder="email" type="email" />
      </div>
      <div className="filter-item">
        <label htmlFor="date">date</label>
        <input
          id="date"
          name="date"
          placeholder="date"
          type="date"
          style={{ backgroundImage: `url(${calendar.src})` }}
        />
      </div>
      <div className="filter-item">
        <label htmlFor="phonenumber">phone number</label>
        <input
          id="phonenumber"
          name="phonenumber"
          placeholder="phone number"
          type="tel"
        />
      </div>
      <div className="filter-item">
        <label htmlFor="status">status</label>
        <select
          name=""
          id="status"
          style={{ backgroundImage: `url(${selectArrowDown.src})` }}
        >
          <option value="" selected hidden disabled>
            Select
          </option>
        </select>
      </div>
      <div className="buttons">
        <button className="reset">reset</button>
        <button className="filter">filter</button>
      </div>
    </div>
  );
};

export default FilterMenu;
