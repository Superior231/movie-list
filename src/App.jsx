import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./layouts/Main";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
