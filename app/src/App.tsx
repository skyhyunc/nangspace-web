import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Clock } from "./pages/Clock"
import { Calendar } from "./pages/Calendar"
import { Navbar } from "./components/Navbar"

function App() {
  return <>
  <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Container>
  </>
}

export default App;
