import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
User.propType = {
  user: PropTypes.object,
};
