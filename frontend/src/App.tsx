import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { UserProvider } from "./contexts/UserContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog" element={<BlogPage />} /> */}
            {/* <Route path="/blog/:postId" element={<PostPage />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
}

// function AppRoutes() {
//   const { route } = useRoute();

//   switch (route.name) {
//     case "home":
//       return <Home />;
//     case "about":
//       return <About />;
//     case "post":
//       return <Post />;
//     default:
//       return <div>Page not found</div>;
//   }
// }

export default App;
