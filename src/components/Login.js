import React, { useState } from "react";
import AxiosInstance from "./Axios";
import { useHistory } from "react-router-dom";

const Login = ({ newUser }) => {
  const history = useHistory();
  const [formErrors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
    msg: "",
  });

  const initialData = Object.freeze({
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
    console.log(formData);

    AxiosInstance.post("token/", {
      email: formData.email,
      password: formData.password,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        AxiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        // window.location.reload();
        history.push("/");
        window.location.reload();
      })
      .catch((e) => {
        if (e.response) {
          setErrors({
            msg: JSON.stringify(e.response.data.detail),
          });
          console.log("error " + JSON.stringify(e.response.data));
        }
      });
  };

  return (
    <div className="mb-1">
      <form action="" onSubmit={onSubmitHandler} className="p-2">
        <div
          className={`${
            newUser
              ? "my-2 border-bottom border-success mb-2 text-right"
              : "d-none"
          }`}
        >
          <span className="small font-weight-bold">
            {`account created for `}{" "}
            <span className="newusername text-primary">{`${newUser}`} </span>
            <span className="font-weight-regular"></span>
          </span>
        </div>
        <legend className="text-primary font-weight-bold small">
          Sign In To Tasko
        </legend>
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

        <div class="input-group mb-3">
          <div class="input-group-prepend" style={{ width: "7rem" }}>
            <span class="input-group-text font-weight-bold w-100" id="">
              Password
            </span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
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
          {formErrors.msg.slice(1, -1)}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
