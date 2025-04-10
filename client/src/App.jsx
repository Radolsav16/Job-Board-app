import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import SignUp from "./components/sign-up/SignUp"


function App() {

  return (
    <>
      <Header />
      <Routes>
      <Route index element={<Hero />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
