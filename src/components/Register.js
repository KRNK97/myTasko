import React, { useState } from "react";
import AxiosInstance from "./Axios";
import { useHistory } from "react-router-dom";

const Register = ({ setNewUser }) => {
  const history = useHistory();
  const [formErrors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
    msg: "",
  });

  const initialData = Object.freeze({
    username: "",
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState(initialData);

  const onChangeHandler = (e) => {
    console.log(e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      email: "",
      password: "",
      username: "",
      msg: "",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);

    AxiosInstance.post("register/", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    })
      .then((res) => {
        console.log("res " + res);
        history.push("/login/");
        setNewUser(formData.username);
      })
      .catch((e) => {
        if (e.response) {
          setErrors({
            msg: JSON.stringify(e.response.data.email[0]),
          });
          console.log("error " + JSON.stringify(e.response.data));
        }
      });
  };

  return (
    <div className="mb-1">
      <form action="" onSubmit={onSubmitHandler} className="p-2">
        <legend className="text-primary font-weight-bold small">
          Sign Up With Tasko
        </legend>
        <div class="input-group mb-3">
          <div class="input-group-prepend " style={{ width: "7rem" }}>
            <span class="input-group-text w-100 font-weight-bold" id="">
              Username
            </span>
          </div>
          <input
            type="text"
            name="username"
            placeholder="set a username"
            className="form-control form-inputs"
            onChange={onChangeHandler}
            // value={task.title}
            autoComplete="off"
            required
          />
        </div>
        {/* <span>{formErrors.username}</span> */}

        <div class="input-group mb-3">
          <div class="input-group-prepend" style={{ width: "7rem" }}>
            <span class="input-group-text w-100 font-weight-bold" id="">
              Email
            </span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            className="form-control form-inputs"
            onChange={onChangeHandler}
            // value={task.title}
            autoComplete="off"
            required
          />
        </div>
        {/* <span>{formErrors.email}</span> */}

        <div class="input-group mb-3">
          <div class="input-group-prepend" style={{ width: "7rem" }}>
            <span class="input-group-text w-100 font-weight-bold" id="">
              Password
            </span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="set a password"
            className="form-control form-inputs"
            onChange={onChangeHandler}
            // value={task.title}
            autoComplete="off"
            required
          />
        </div>
        <div
          className={`${
            formErrors.msg != ""
              ? "text-danger my-2 small font-weight-bold border border-danger p-2 rounded"
              : ""
          }`}
        >
          <span className={`${formErrors.msg != "" ? "mr-1" : "d-none"}`}>
            <i class="fas fa-exclamation-circle"></i>
          </span>
          {formErrors.msg.slice(7, -2)}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
