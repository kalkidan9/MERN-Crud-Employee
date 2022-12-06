import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./coomponents/UserList";
import AddUser from "./coomponents/AddUser";
import EditUser from "./coomponents/EditUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
