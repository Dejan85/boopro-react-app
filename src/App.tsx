import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Movies } from "src/pages";
import { PrivateRoutes } from "src/utils";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Movies />} path="/" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
}

export default App;
