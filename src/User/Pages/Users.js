import UsersList from "../Components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jacob Berry",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e8/MassEffect.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
