export const paginate = (users) => {
  //   console.log(users);
  const itemsPerPage = 9;
  const pages = Math.ceil(users.length / itemsPerPage);
  //   console.log(pages);

  const newUsers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  });

  //   console.log(newUsers);
  return newUsers;
};
