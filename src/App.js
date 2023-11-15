import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewShoppingAdd from "./components/NewShoppingAdd";
import NewShoppingDelete from "./components/NewShoppingDelete";
import NewShoppingSearch from "./components/NewShoppingSearch";
import NewShoppingView from "./components/NewShoppingView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<HomestayLogin />}></Route> */}
        <Route path="" element={<NewShoppingAdd />}></Route>
        <Route path="search" element={<NewShoppingSearch />}></Route>
        <Route path="delete" element={<NewShoppingDelete />}></Route>
        <Route path="view" element={<NewShoppingView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
