import { Routes, Route } from "react-router";

import Register from "./auth/Register";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}
