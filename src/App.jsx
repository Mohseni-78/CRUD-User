// React Router Dom =============>
import { Route, Routes } from "react-router-dom";
// Components ===========>
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Update from "./components/Update";
// React Hot Toast ===========>
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route  index element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<>Not Found</>} />
        <Route path="/update/:email" element={<Update />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
