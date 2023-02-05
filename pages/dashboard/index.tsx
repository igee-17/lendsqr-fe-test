import Link from "next/link";
import DashboardContent from "../../components/DashboardContent";
import Layout from "../../components/Layout";
import { paginate } from "../../utils/helpers/paginate";

export const getStaticProps = async () => {
  const resp = await fetch(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
  );
  const data = await resp.json();
  // const paginatedData = paginate(data);

  return {
    props: {
      users: paginate(data),
    },
  };
};

const DashboardPage = ({ users }) => (
  <Layout title="Dashboard">
    <DashboardContent users={users} />
  </Layout>
);

export default DashboardPage;
