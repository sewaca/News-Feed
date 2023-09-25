import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
