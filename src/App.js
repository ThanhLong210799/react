import { Routes, Route } from "react-router-dom";
import Login from "./features/authorization/Login";
import List from "./features/list/List";
import CreateData from "./features/create/CreateData";
import DetailData from "./features/detail/Detail";
import CreateData2 from "./features/create/CreateData2";
import Confirm from "./features/create/ConfirmData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/List" element={<List />}></Route>
      <Route path="/Create" element={<CreateData />}></Route>
      <Route path="/Create2" element={<CreateData2 />}></Route>
      <Route path="/Confirm" element={<Confirm />}></Route>
      <Route path="/Detail/:id" element={<DetailData />}></Route>
    </Routes>
  );
}

export default App;
