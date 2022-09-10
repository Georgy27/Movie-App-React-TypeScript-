import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Movies,
  Series,
  SingleContent,
  Error,
  Favourites,
} from "./pages";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        {/* public routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="content/:id" element={<SingleContent />} />

          {/* error */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
