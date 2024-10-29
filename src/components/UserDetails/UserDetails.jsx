import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email } = user;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Details about User </h1>
      <div className="bg-slate-700 w-96 mx-auto p-6 rounded-lg space-y-2">
        <h1 className="text-xl">Name: {name}</h1>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
