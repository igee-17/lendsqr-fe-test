import Image from "next/image";
import { back, starFull, starEmpty } from "../assets/icons";
import UserDetails from "./UserDetails";
import { useRouter } from "next/router";

const SingleUserContent = ({ user }) => {
  const router = useRouter();

  const {
    profile: { firstName, lastName, phoneNumber, bvn, gender, avatar },
    userName,
    accountNumber,
    accountBalance,
    email,
    education: {
      level,
      officeEmail,
      employmentStatus,
      monthlyIncome,
      sector,
      loanRepayment,
      duration,
    },
    socials: { facebook, instagram, twitter },
    guarantor: { firstName: gFirstName, lastName: gLastName, gender: gGender },
  } = user;

  return (
    <section className="single-user">
      <div className="user-center">
        <button onClick={() => router.back()} className="back">
          <Image {...back} alt="back arrow" />
          <p>Back to Users</p>
        </button>
        <div className="options">
          <h2>User Details</h2>
          <div className="buttons">
            <button className="blacklist">blacklist user</button>
            <button className="activate">activate user</button>
          </div>
        </div>
        <div className="user-nav">
          <aside className="top">
            <Image
              src={avatar}
              width="100"
              height="100"
              alt="avatar"
              className="avatar"
            />
            <div className="nav-pair">
              <h1>
                {firstName} {lastName}
              </h1>
              <p>{userName}</p>
            </div>
            <hr />

            <div className="tier">
              <p>User's Tier</p>
              <div className="stars">
                <Image {...starFull} alt="filled star" />
                <Image {...starEmpty} alt="empty star" />
                <Image {...starEmpty} alt="empty star" />
              </div>
            </div>
            <hr />

            <div className="nav-pair">
              <h1>₦{accountBalance}</h1>
              <p>{accountNumber}/Providus Bank</p>
            </div>
          </aside>
          <div className="bottom">
            <div className="active">
              <p>general details</p>
            </div>
            <div>
              <p>documents</p>
            </div>
            <div>
              <p>bank details</p>
            </div>
            <div>
              <p>loans</p>
            </div>
            <div>
              <p>savings</p>
            </div>
            <div>
              <p>app and system</p>
            </div>
          </div>
        </div>
        <UserDetails user={user} />
      </div>
    </section>
  );
};

export default SingleUserContent;
