import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "../../components/Layout";
import SingleUserContent from "../../components/SingleUserContent";

const getUsers = async () => {
  const resp = await fetch(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
  );
  const data = await resp.json();

  return data;
};
// THIS FUNCTION WOULD PRE-BUILD THE PAGEs ON BUILD TIME
export const getStaticPaths = async () => {
  const data = await getUsers();

  const newData = data.slice(0, 20);

  const paths = newData.map((item) => {
    return {
      params: { id: item.id.toString() },
      // params: { id: item.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  // const resp = await fetch(
  //   `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  // );
  // const data = await resp.json();

  // return {
  //   props: { user: data },
  // };

  const data = await getUsers();

  const { params } = context;

  try {
    // const id = params?.id;
    // const item = data.find((data) => data.id === Number(id));
    // console.log(item);

    const resp = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );
    const data = await resp.json();

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    // return { user: { item } };
    return {
      props: { user: data },
    };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};

const SingleUser = ({ user }) => {
  console.log(user);

  return (
    <Layout title={`Dashboard | ${user.userName}`}>
      <SingleUserContent user={user} />
    </Layout>
  );
};

export default SingleUser;
