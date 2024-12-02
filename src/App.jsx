// style app css
import "./App.css";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/UserList/UserList";
import NewUserForm from "./components/NewUser/NewUserForm";
import { useState } from "react";

function App() {
  //use state
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  //delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      console.log(id);
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  // close modal
  const closeModal = (e) => {
    if (e.target.className == "overlay") setShowModal(false);
    if (e.key == "Escape") setShowModal(false);
  };

  //add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLenght={users.length} />
      <main>
        <div className="no-users">{users.length === 0 && <h2>No User</h2>}</div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        create user
      </button>
      <Footer />
    </div>
  );
}

export default App;
