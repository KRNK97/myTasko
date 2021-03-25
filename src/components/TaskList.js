import React from "react";
import AxiosInstance from "./Axios";

const TaskList = ({
  tasks,
  setTasks,
  setSelected,
  setEdit,
  editVisible,
  setCompTasks,
  setPendTasks,
  user,
}) => {
  if (!user) {
    return (
      <div className="m-4 p-4 text-muted text-lg-center">
        <div className="font-weight-bold">Hey There,</div>
        <div className="title">Sign Up To Start Using Tasko.</div>
        <a
          href="/register/"
          className="btn btn-outline-primary btn-md-sm btn-block mt-2"
        >
          Sign Up
        </a>
      </div>
    );
  }

  if (tasks.length < 1) {
    return (
      <div className="font-weight-bold p-2 text-center text-muted">
        Nothing here to see . . .
      </div>
    );
  }

  const statusHandler = (id) => {
    console.log(id);
    AxiosInstance.post(`tasks/${id}/status/`)
      .then((res) => {
        console.log(res);
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
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteHandler = (id) => {
    console.log(id);
    AxiosInstance.delete(`tasks/${id}/`)
      .then((res) => {
        console.log(res);
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
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const editHandler = () => {
    setEdit(!editVisible);
  };

  const renderTasks = tasks.map((t) => {
    return (
      <div
        className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between ${
          t.status ? "completed" : ""
        }`}
        onClick={() => setSelected(t)}
      >
        {/* <span style={{ fontSize: "0.4rem" }}>
          <i class="fas fa-circle-notch"></i>
        </span> */}
        <span className="text-dark w-100 p-0 task-title">{t.title}</span>

        <div className="buttons d-flex justify-content-between">
          <span
            className={
              t.status
                ? "btn btn-primary mr-1 icons"
                : "btn btn-outline-primary mr-1 icons"
            }
            onClick={() => statusHandler(t.id)}
          >
            <i class="fas fa-check"></i>
          </span>
          <span
            className="btn btn-outline-danger icons"
            onClick={() => deleteHandler(t.id)}
          >
            <i class="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="list-group shadow-sm">
      <span
        className="btn btn-light text-muted btn-block mb-1 mx-auto font-weight-bold"
        onClick={() => editHandler()}
      >
        {editVisible
          ? "Click on an item, then edit it using the displayed input box."
          : "Show Editing Input"}
      </span>
      {renderTasks}
    </div>
  );
};

export default TaskList;
