import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="bg-slate-700 rounded-lg p-6 text-center space-y-2">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>
        <button className="bg-blue-700 py-2 px-3 mt-4 rounded-md text-gray-200">
          Show Details
        </button>
      </Link>
    </div>
  );
};


User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
export default User;
