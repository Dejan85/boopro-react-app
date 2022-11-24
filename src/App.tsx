import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, MoviesPage } from "src/pages";
import { PrivateRoutes } from "src/utils";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<MoviesPage />} path="/" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
}

export default App;
