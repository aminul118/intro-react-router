import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <p className="py-4 text-xl">Users : {users.length}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
