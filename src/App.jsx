
import Home from "./pages/Home"
import Movies from "./pages/Movies"
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
