import Nft from "./pages/Nft";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nft />} />
    </Routes>
  );
}

export default App;
