import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import History from "./pages/History/History"
import InfoCard from "./components/InfoCard/InfoCard"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/history" element={<History />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
      
    </BrowserRouter>
  )
}

export default App
