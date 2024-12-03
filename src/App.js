import Login from "./components/auth/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="register/" element = {<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
