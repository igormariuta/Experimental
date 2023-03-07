import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoutes";

function App() {
  // const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            {/* <Route
              path="/profile"
              element={
                <PrivateRoute user={user}>
                  <Profile />
                </PrivateRoute>
              }
            /> */}

            {/* <React.Suspense fallback={<span>loading ...</span>}>
              <Route path="/profile" element={<Profile />} />
            </React.Suspense> */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
