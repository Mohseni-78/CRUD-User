import { useEffect } from "react";
// React Redux ============>
import { useDispatch, useSelector } from "react-redux";
import { cloneStorageInState, deleteUser } from "../../redux/usersAction";
// React Router Dom =============>
import { Link } from "react-router-dom";
// Custom Hooks =========>
import useStorage from "../../hooks/useStorage";

const Dashboard = () => {
  const { storage } = useStorage("users");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    storage && dispatch(cloneStorageInState(storage));
  }, []);

  const deleteHandler = (e, email) => {
    e.preventDefault();
    dispatch(deleteUser(email));
  };
  return (
    <div className=" p-[1rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link
          to="/create"
          className={`btn bg-blue-700 ${
            state.length === 0 && "animate-bounce"
          }`}
        >
          Create User
        </Link>
      </div>
      {state.length !== 0 ? (
        <table className="mt-[3rem]">
          <thead>
            <tr>
              <th>name</th>
              <th>last name</th>
              <th>email</th>
              <th>age</th>
              <th>skills</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {state.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  {user.skills.map((skill) => (
                    <span key={skill.value} className="badge my-3 mx-1">
                      {skill.label}
                    </span>
                  ))}
                </td>
                <td className="flex gap-1">
                  <Link
                    to={`/update/${user.email}`}
                    className="btn bg-blue-700"
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => deleteHandler(e, user.email)}
                    className="btn bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-[2rem] ">No item found please create a user </p>
      )}
    </div>
  );
};

export default Dashboard;
