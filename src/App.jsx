import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },
    { path: "/settings", element: <Settings /> }
  ]);

  return (
    <div>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/profile" style={{ marginRight: "1rem" }}>Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
