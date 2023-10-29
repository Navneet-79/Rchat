import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join.js";
import Chat from "./component/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join/>}/>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <div className="App">
<Join/>
<Chat/>
</div> */}