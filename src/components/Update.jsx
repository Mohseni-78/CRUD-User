import { useEffect, useState } from "react";
// React Redux ============>
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/usersAction";
// React Router Dom =============>
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// CreatableReactSelect ==========>
import CreatableReactSelect from "react-select/creatable";
// Uuid =============>
import { v4 as uuidV4 } from "uuid";
// React Hot Toast ===========>
import { toast } from "react-hot-toast";

const Update = () => {
  const [inputData, setInputData] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
  });
  const [skills, setSkills] = useState([]);
  const { email } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const existedUser = state.find((user) => user.email === email);
    setInputData({
      name: existedUser.name,
      lastName: existedUser.lastName,
      email: existedUser.email,
      age: existedUser.age,
    });
    setSkills([...existedUser.skills]);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(updateUser({ ...inputData, skills }, email));
    } catch (err) {
      toast.error(err);
    }
  };
  const changeHandler = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container p-[5rem] w-[50%] mx-auto">
      <h1 className="text-3xl font-bold">Create Users Form</h1>
      <form className="mt-[3rem] gird space-y-5" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter the name..."
            name="name"
            value={inputData.name}
            onChange={changeHandler}
            className="w-full placeholder:text-gray-400 placeholder:text-sm p-[10px] border outline-0 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter the last name..."
            name="lastName"
            value={inputData.lastName}
            onChange={changeHandler}
            className="w-full placeholder:text-gray-400 placeholder:text-sm p-[10px] border outline-0 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="Email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            id="Email"
            placeholder="Enter the email..."
            name="email"
            value={inputData.email}
            onChange={changeHandler}
            className="w-full placeholder:text-gray-400 placeholder:text-sm p-[10px] border outline-0 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="text-sm">
            Age
          </label>
          <input
            id="age"
            type="date"
            placeholder="Enter the age..."
            name="age"
            value={inputData.age}
            onChange={changeHandler}
            className="w-full placeholder:text-gray-400 placeholder:text-sm p-[10px] border outline-0 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="skills" className="text-sm ">
            Skills
          </label>
          <CreatableReactSelect
            required
            id="skills"
            placeholder="Select a skills please..."
            isMulti
            options={skills.map((skill) => {
              return { label: skill.label, value: skill.value };
            })}
            value={skills.map((skill) => {
              return { label: skill.label, value: skill.value };
            })}
            onCreateOption={(label) => {
              const newSkill = { value: uuidV4(), label: label };
              setSkills((prev) => [...prev, { ...newSkill }]);
            }}
            onChange={(skills) => {
              setSkills([...skills]);
            }}
          />
        </div>
        <div className="flex items-center gap-5 justify-center">
          <button onClick={() => navigate("/")} className="bg-red-500 btn">
            Back
          </button>
          <button type="submit" className="bg-green-500 btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
