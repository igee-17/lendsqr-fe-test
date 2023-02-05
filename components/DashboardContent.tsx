import { useEffect, useState } from "react";
import Image from "next/image";
import { usersInfo } from "../utils/data";
import UserInfoBlock from "./UserInfoBlock";
import { moreVert, arrowDown, prevBtn, nextBtn } from "../assets/icons";
import { tableHeadData } from "../utils/dashboardTableData";
import TableHead from "./TableHead";
import moment from "moment";
import FilterMenu from "./FilterMenu";
import UserModal from "./UserModal";

const DashboardContent = ({ users }) => {
  // console.log(users);
  const [page, setPage] = useState(0);
  const [activeUsers, setActiveUsers] = useState([]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [location, setLocation] = useState({});

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [modalLocation, setModalLocation] = useState({});

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setActiveUsers(users[page]);
  }, [page]);

  // console.log(activeUsers);

  const handlePage = (index) => {
    if (index < 0 || index > 11) return;
    setPage(index);
  };

  // THIS FUNCTION GETS THE POSITION OF THE ELEMENT THAT WAS CLICKED ON AND OPENS THE FILTER OPTIONS
  const displayFilter = (e) => {
    const target = e.target.getBoundingClientRect();
    const scroll = window.pageYOffset;

    const left = target.left - 10;
    const bottom = target.bottom + scroll + 17;

    setLocation({ left, bottom });
    setIsFilterOpen(!isFilterOpen);
  };

  const displayModal = (e, id) => {
    // setModalLocation(!mod);
    const target = e.target.getBoundingClientRect();
    const scroll = window.pageYOffset;

    const left = target.left - 120;
    const bottom = target.bottom + scroll + 17;

    setModalLocation({ left, bottom });
    setUserId(id);
    setIsUserModalOpen(!isUserModalOpen);

    // console.log("hello", id);
  };

  return (
    <section className="dashboard">
      <div className="dashboard-center">
        <p className="users">Users</p>
        <div className="users-info">
          {usersInfo.map((item) => {
            return <UserInfoBlock {...item} key={item.id} />;
          })}
        </div>
        <div className="table-container">
          {isFilterOpen && <FilterMenu location={location} />}
          {isUserModalOpen && (
            <UserModal location={modalLocation} id={userId} />
          )}

          {/* TABLE START */}
          <table>
            <thead>
              <tr>
                {tableHeadData.map((item) => {
                  return (
                    <TableHead
                      {...item}
                      key={item.id}
                      setFilter={displayFilter}
                    />
                  );
                })}
              </tr>
            </thead>
            {/* TABLE BODY */}
            <tbody>
              {activeUsers.map((item) => {
                const {
                  id,
                  orgName: org,
                  userName,
                  email,
                  profile: { phoneNumber },
                  createdAt,
                  lastActiveDate,
                  accountBalance,
                  education: { loanRepayment },
                } = item;

                const number = phoneNumber.split("x");
                const organisation = org.split("-");
                // console.log(item);

                // const created = new Date(createdAt);
                const created = moment(createdAt).format("MMM DD, YYYY h:mm a");
                const lastActive = moment(lastActiveDate).format(
                  "MMMMM Do, YYYY h:mm a"
                );

                const createdYear = parseInt(
                  new Date(createdAt).getFullYear().toString()
                );
                // const createdYear = new Date(createdAt).getFullYear().toString();
                const lastActiveYear = parseInt(
                  new Date(lastActiveDate).getFullYear().toString()
                );

                let status;
                if (parseInt(accountBalance) < 400) {
                  status = "blacklisted";
                } else if (parseInt(loanRepayment) < 100) {
                  status = "pending";
                } else if (createdYear < lastActiveYear) {
                  status = "active";
                } else {
                  status = "inactive";
                }

                return (
                  <tr key={id}>
                    <td>{organisation[0]}</td>
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td>{number[0]}</td>
                    <td>{created}</td>
                    <td>
                      <div className={`status ${status}`}>{status}</div>
                    </td>
                    <td>
                      <button onClick={(e) => displayModal(e, id)}>
                        <Image {...moreVert} alt="vertical button" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <div className="left">
            <p>Showing</p>
            <div className="dropdown">
              <p>100</p>
              <Image {...arrowDown} alt="down arrow" />
            </div>
            <p>out of 100</p>
          </div>
          <div className="right">
            <button className="left-arrow" onClick={() => handlePage(page - 1)}>
              <Image {...prevBtn} alt="prev button" />
            </button>

            {/* <button>2</button>
            <button>3</button>
            <p>...</p>
            <button>11</button>
            <button>12</button> */}
            {users.map((_, index) => {
              if (index > 2) return;
              let start;
              start = page + index + 1;
              if (start > 12) return;
              return (
                <button onClick={() => handlePage(start - 1)}>{start}</button>
              );
            })}
            {/* {(users.length-page <== 5) &&<p>...</p>} */}
            {users.length - page < 5 ? "" : <p>...</p>}
            {page < 10 &&
              users.map((_, index) => {
                if (index < users.length - 2) return;
                let start;
                start = index;

                return (
                  <button onClick={() => handlePage(start)}>{start + 1}</button>
                );
              })}

            <button
              className="right-arrow"
              onClick={() => handlePage(page + 1)}
            >
              <Image {...nextBtn} alt="prev button" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardContent;
