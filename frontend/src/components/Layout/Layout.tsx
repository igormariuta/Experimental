import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <div className="container mx-auto">
        <nav className="flex justify-between bg-gray-200 p-3">
          <div className="flex ">
            <Link
              to="/"
              className="mr-3 bg-gray-300 px-3 py-1  text-gray-600 hover:text-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mr-6 bg-gray-300 px-3 py-1  text-gray-600 hover:text-gray-800"
            >
              About
            </Link>
          </div>

          {user ? (
            <div className="flex items-center">
              <span className="mr-3 mb-0">{user.name}</span>
              <button
                onClick={logout}
                className="bg-gray-300 px-3 py-1 text-gray-600 hover:text-gray-800"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-gray-300 px-3 py-1 text-gray-600 hover:text-gray-800"
            >
              Login
            </Link>
          )}
        </nav>

        <main className="p-6 text-gray-800">{children}</main>

        <footer className="bg-gray-600 text-white p-3">
          <p className="text-sm">&copy; Blog. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
