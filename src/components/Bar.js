import React, { useState, useEffect } from "react";
import AxiosInstance from "./Axios";
import { useHistory } from "react-router-dom";
import "./App.css";

const Bar = ({
  setTasks,
  setEdit,
  editVisible,
  setCompTasks,
  setPendTasks,
}) => {
  const history = useHistory();

  const initialData = Object.freeze({
    title: "",
    status: false,
  });

  const [task, setTask] = useState(initialData);

  const onChangeHandler = (e) => {
    setTask({
      ...initialData,
      [e.target.name]: e.target.value,
    });
    console.log(task);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // add the task
    AxiosInstance.post("tasks/add/", {
      title: task.title,
    })
      .then((res) => {
        setTask({
          ...initialData,
          ["title"]: "",
        });
        console.log(res);
        // update task list after new task added
        AxiosInstance.get("tasks/all/")
          .then((res) => {
            console.log(res.data.tasks);
            setTasks(res.data.tasks);

            setCompTasks(
              res.data.tasks.filter((t) => {
                return t.status;
              })
            );

            setPendTasks(
              res.data.tasks.filter((t) => {
                return !t.status;
              })
            );
          })
          .catch((e) => {
            console.log(e);
          });
        console.log("getting data");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const editHandler = () => {
    setEdit(false);
  };

  return (
    <div className="mb-1">
      <form action="" onSubmit={onSubmitHandler}>
        {/* <label htmlFor="title" className="text-dark">
          Add
        </label> */}
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              <i class="fas fa-plus"></i>
            </span>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Add a task"
            className="form-control form-inputs"
            onChange={onChangeHandler}
            value={task.title}
            onFocus={() => editHandler()}
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default Bar;
