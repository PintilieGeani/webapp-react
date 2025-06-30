
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import SingleMovies from "./pages/SingleMovie"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GuestLayout from "./components/layouts/GuestLayout"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<SingleMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
