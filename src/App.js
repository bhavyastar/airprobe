import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Image from "./components/Image";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Image />} />
          <Route path="/dashboard" element={<Dashboard />} />
  
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
