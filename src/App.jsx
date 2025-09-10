import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search.jsx";
import Weather from "./components/Weather.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Search /> },
    { path: "/weather/:city", element: <Weather /> }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
