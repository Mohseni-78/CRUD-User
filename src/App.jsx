import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Dashboard />}/>
      <Route path="/create" element={<Create />}/>
      <Route path="/update" element={<>Not Found</>}/>
      <Route path="/update/:email" element={<Update />}/>
    </Routes>
  );
}

export default App;
