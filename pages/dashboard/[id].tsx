import Layout from "../../components/Layout";
import SingleUserContent from "../../components/SingleUserContent";

// THIS FUNCTION WOULD PRE-BUILD THE PAGE ON BUILD TIME
export const getStaticPaths = async () => {
  const resp = await fetch(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
  );
  const data = await resp.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const resp = await fetch(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  );
  const data = await resp.json();

  return {
    props: { user: data },
  };
};

const SingleUser = ({ user }) => {
  return (
    <Layout title={`Dashboard | ${user.userName}`}>
      <SingleUserContent user={user} />
    </Layout>
  );
};

export default SingleUser;
