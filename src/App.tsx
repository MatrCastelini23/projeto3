import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListaProdutos from "./pages/ListaProdutos"

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaProdutos />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

