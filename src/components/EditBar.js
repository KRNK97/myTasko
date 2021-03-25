import React, { useState, useEffect } from "react";
import AxiosInstance from "./Axios";
import { useHistory } from "react-router-dom";

const EditBar = ({ selectedTask, setTasks, setCompTasks, setPendTasks }) => {
  console.log(selectedTask);
  const initialData = Object.freeze({
    title: "",
    status: false,
  });

  useEffect(() => {
    setTask({
      ...initialData,
      ["title"]: selectedTask ? selectedTask.title : "",
      ["status"]: selectedTask ? selectedTask.status : false,
    });
  }, [selectedTask]);

  const [task, setTask] = useState(initialData);

  const onChangeHandler = (e) => {
    setTask({
      ...initialData,
      [e.target.name]: e.target.value,
      ["status"]: selectedTask.status,
    });
    console.log(task);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // update the task
    AxiosInstance.put(`tasks/${selectedTask.id}/`, {
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
        console.log("updating data");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="mb-1">
      <form action="" onSubmit={onSubmitHandler}>
        {/* <label htmlFor="title" className=" text-secondary">
          Edit
        </label> */}
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              <i class="fas fa-pen"></i>
            </span>
          </div>
          <input
            type="text"
            name="title"
            placeholder="select a task to start editing"
            className="form-control form-inputs-edit"
            onChange={onChangeHandler}
            value={task.title}
            disabled={selectedTask ? "" : "disabled"}
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default EditBar;
