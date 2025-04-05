import { BrowserRouter, Routes, Route } from "react-router";

import MainPage from "@/components/pages/MainPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
