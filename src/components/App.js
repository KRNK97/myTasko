import Bar from "./Bar";
import EditBar from "./EditBar";
import TaskList from "./TaskList";
import Register from "./Register";
import Login from "./Login";

import Nav from "./Nav";
import { useState, useEffect, Fragment } from "react";
import AxiosInstance from "./Axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [currentUser, setUser] = useState(null);
  const [Tasks, setTasks] = useState([]);
  const [selectedTask, setSelected] = useState(null);
  const [editVisible, setEdit] = useState(false);
  const [completedTasks, setCompTasks] = useState([]);
  const [pendingTasks, setPendTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {
    AxiosInstance.get("getuser/")
      .then((res) => {
        console.log(res.data.current_user);
        setUser(res.data.current_user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, setUser);

  useEffect(() => {
    AxiosInstance.get("tasks/all/")
      .then((res) => {
        console.log(res.data.tasks);
        setTasks(res.data.tasks);

        // set complete tasks in new state
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
  }, [setTasks]);

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const getTask = () => {
    if (filter == "all") {
      return Tasks;
    } else if (filter == "comp") {
      return completedTasks;
    }

    return pendingTasks;
  };

  return (
    <Router>
      <div className="container mt-lg-4 mt-0">
        <Nav user={currentUser} setUser={setUser} />

        <div className="header px-2 d-flex align-items-center justify-content-between">
          <div className="my-1 title d-inline">Tasko</div>
          <div class="input-group my-1 w-50">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Filter
              </label>
            </div>
            <select
              name="filter"
              id="filter"
              className="custom-select"
              onChange={(e) => filterHandler(e)}
            >
              <option
                value="all"
                className="font-weight-regular text-primary p-2"
                selected
              >
                All
              </option>
              <option
                value="comp"
                className="font-weight-regular text-primary p-2"
              >
                Completed
              </option>
              <option
                value="pend"
                className="font-weight-regular text-primary p-2"
              >
                Pending
              </option>
            </select>
          </div>
        </div>
        {/* <Bar
          setTasks={setTasks}
          setEdit={setEdit}
          editVisible={editVisible}
          setCompTasks={setCompTasks}
          setPendTasks={setPendTasks}
        />
        {editVisible ? (
          <EditBar
            selectedTask={selectedTask}
            setTasks={setTasks}
            setCompTasks={setCompTasks}
            setPendTasks={setPendTasks}
          />
        ) : (
          ""
        )} */}

        {/* <TaskList
          tasks={getTask()}
          setTasks={setTasks}
          setSelected={setSelected}
          setEdit={setEdit}
          editVisible={editVisible}
          setCompTasks={setCompTasks}
          setPendTasks={setPendTasks}
        /> */}
        <Route
          exact
          path="/"
          component={() => (
            <Fragment>
              <Bar
                setTasks={setTasks}
                setEdit={setEdit}
                editVisible={editVisible}
                setCompTasks={setCompTasks}
                setPendTasks={setPendTasks}
              />
              {editVisible ? (
                <EditBar
                  selectedTask={selectedTask}
                  setTasks={setTasks}
                  setCompTasks={setCompTasks}
                  setPendTasks={setPendTasks}
                />
              ) : (
                ""
              )}
              <TaskList
                tasks={getTask()}
                setTasks={setTasks}
                setSelected={setSelected}
                setEdit={setEdit}
                editVisible={editVisible}
                setCompTasks={setCompTasks}
                setPendTasks={setPendTasks}
                user={currentUser}
              />
            </Fragment>
          )}
        />
        <Route
          exact
          path="/register/"
          component={() => <Register setNewUser={setNewUser} />}
        />
        <Route
          exact
          path="/login/"
          component={() => <Login newUser={newUser} />}
        />
        {/* <Route exact path="/login/" component={Logout} /> */}
      </div>
    </Router>
  );
};

export default App;
