import { Routes, Route } from "react-router";

import Layout from "./components/Layout/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfilePage from "./pages/Profile/ProfilePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={**HOME_PAGE**} /> */}

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="user-profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}
