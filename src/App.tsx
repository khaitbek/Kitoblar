import { Navigate, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import { selectTheme } from "./features/ThemeSlicer";
import { useSelector } from "react-redux"
import { auth } from "./features/AuthSlicer";
import GlobalStyles from "./assets/styles/styles"
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./pages/Loading/Loading";
import Skeleton from "./components/Skeleton/Skeleton";
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));
const NewAuthor = lazy(() => import("./pages/Home/Author/NewAuthor"));
const AuthorList = lazy(() => import("./components/AuthorList/AuthorList"));
const SingleAuthor = lazy(() => import("./pages/SinglePages/SingleAuthor/SingleAuthor"));
const SingleBook = lazy(() => import("./pages/SinglePages/SingleBook/SingleBook"));
const Profile = lazy(() => import("./pages/User/Profile/Profile"));
const Security = lazy(() => import("./pages/User/Security/Security"));
const Settings = lazy(() => import("./pages/User/Settings/Settings"));
const Book = lazy(() => import("./pages/Book/Book"));
const Search = lazy(() => import("./pages/Search"));
const BookList = lazy(() => import("./components/BookList/BookList"));
const NewBook = lazy(() => import("./pages/Home/Book/NewBook"));



function App() {
  const { token } = useSelector(auth);
  const theme = useSelector(selectTheme);

  return (
    <>
      <GlobalStyles theme={theme} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={token ? <Home /> : <Navigate replace={true} to="/register" />}>
            <Route path="author/:category_id" element={<AuthorList />} />
          </Route>
          <Route path="/search/:resource" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/authors/new" element={<NewAuthor />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route path="/books" element={<Book />} >
            <Route path="book/:category_id" element={<BookList />} />
          </Route>
          <Route path="/singleAuthor/:author_id" element={<SingleAuthor />} />
          <Route path="/singleBook/:book_id" element={<SingleBook />} />
          <Route path="profile" element={<Profile />} />
          <Route path="security" element={<Security />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
