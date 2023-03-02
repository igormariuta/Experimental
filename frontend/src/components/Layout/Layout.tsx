import { ReactNode, useContext } from "react";
import { BoxArrowRight, Gear } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { user, logout } = useContext(UserContext);

  // useEffect(() => {
  //   console.log("layout " + user);
  // }, [user]);

  return (
    <>
      <nav className="bg-zinc-600">
        <div className="container mx-auto flex justify-between p-3">
          <div className="flex ">
            <Link
              to="/"
              className="mr-3 bg-gray-500 px-3 py-1 rounded text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mr-6 bg-gray-500 px-3 py-1 rounded text-white"
            >
              About
            </Link>
          </div>

          {user ? (
            <div className="flex items-center">
              <span className="mr-3 mb-0 text-white">{user.username}</span>
              <Link
                to="/profile"
                className="mr-3 bg-gray-500 p-2 rounded text-white"
              >
                <Gear />
              </Link>
              <button
                onClick={logout}
                className="bg-gray-500 p-2 rounded text-white"
              >
                <BoxArrowRight />
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                to="/login"
                className="mr-3 bg-gray-500 rounded px-3 py-1 text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gray-500 rounded px-3 py-1 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto">
        <main className="p-3 py-6 text-gray-800">{children}</main>
      </div>
    </>
  );
};

export default Layout;
