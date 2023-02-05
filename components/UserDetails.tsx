import InfoItem from "./InfoItem";

const UserDetails = ({ user }) => {
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
    guarantor: {
      firstName: gFirstName,
      lastName: gLastName,
      gender: gGender,
      phoneNumber: gPhone,
    },
  } = user;

  return (
    <div className="user-details">
      <div className="detail personal-info">
        <h3>Personal Information</h3>
        <div className="content">
          <InfoItem head="full Name" text={`${firstName} ${lastName}`} />
          <InfoItem head="Phone Number" text={phoneNumber} />
          <InfoItem head="Email Address" text={email} />
          <InfoItem head="Bvn" text={bvn} />
          <InfoItem head="Gender" text={gender} />
          <InfoItem head="Marital status" text={"single"} />
          <InfoItem head="children" text={"none"} />
          <InfoItem head="Type of residence" text={"Parent’s Apartment"} />
        </div>
      </div>
      <hr />

      <div className="detail education-info">
        <h3>Education and Employment</h3>
        <div className="content">
          <InfoItem head="level of education" text={level} />
          <InfoItem head="employment status" text={employmentStatus} />
          <InfoItem head="sector of employment" text={sector} />
          <InfoItem head="Duration of employment" text={duration} />
          <InfoItem head="office email" text={officeEmail} />
          <InfoItem
            head="Monthly income"
            text={`₦${monthlyIncome[0]} - ₦${monthlyIncome[1]}`}
          />
          <InfoItem head="loan repayment" text={loanRepayment} />
        </div>
      </div>
      <hr />
      <div className="detail socials">
        <h3>Socials</h3>
        <div className="content">
          <InfoItem head="Twitter" text={twitter} />
          <InfoItem head="Facebook" text={facebook} />
          <InfoItem head="Instagram" text={instagram} />
        </div>
      </div>
      <hr />
      <div className="detail guarantor">
        <h3>Guarantor</h3>
        <div className="content">
          <InfoItem head="full Name" text={`${gFirstName} ${gLastName}`} />
          <InfoItem head="Phone Number" text={gPhone} />
          <InfoItem head="Email Address" text={"debby@gmail.com"} />
          <InfoItem head="Relationship" text={"Sister"} />
        </div>
      </div>
      <hr />
      <div className="detail guarantor">
        <h3> </h3>
        <div className="content">
          <InfoItem head="full Name" text={`${gFirstName} ${gLastName}`} />
          <InfoItem head="Phone Number" text={gPhone} />
          <InfoItem head="Email Address" text={"debby@gmail.com"} />
          <InfoItem head="Relationship" text={"Sister"} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
