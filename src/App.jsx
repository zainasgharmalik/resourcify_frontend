import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { routes } from "./routes"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((r, index) => (
          <Route key={index} path={r.path} element={<r.element />} />
        ))}
      </Routes>
    </Router>
  )
}

export default App
