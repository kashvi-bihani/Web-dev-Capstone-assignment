import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Tracker from "./pages/Tracker";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/learn",
    element: (
      <Layout>
        <Learn />
      </Layout>
    ),
  },
  {
    path: "/tracker",
    element: (
      <Layout>
        <Tracker />
      </Layout>
    ),
  },
]);