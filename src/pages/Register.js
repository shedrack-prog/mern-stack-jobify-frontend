import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Alert, FormRow, Logo } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  // navigate
  const navigate = useNavigate();

  // state values
  const [values, setValues] = useState(initialState);

  // context
  const { isLoading, showAlert, displayAlert, user, setupUser } =
    useAppContext();

  // useEffect
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  // toggle Member
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  // handleChange
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };
  // handle submit
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      // console.log("already a member");
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login successful! Redirecting...",
      });
      setTimeout(() => setValues({ ...values, password: "" }), 1000);
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting...",
      });
      setTimeout(() => setValues({ ...values, password: "" }), 1000);
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Sign Up"}</h3>

        {showAlert && <Alert />}
        {/* name input */}

        {!values.isMember && (
          <FormRow
            name="name"
            type="text"
            value={values.name}
            labelText="name"
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow
          name="email"
          type="email"
          value={values.email}
          labelText="email"
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          name="password"
          type="password"
          value={values.password}
          labelText="password"
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {values.isMember ? "Login" : "Sign up"}
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() => {
            setupUser({
              currentUser: { email: "testUser@test.com", password: "secret" },
              endPoint: "login",
              alertText: "Login Successful! Redirecting...",
            });
          }}
        >
          {isLoading ? "loading..." : "demo app"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Sign Up" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
