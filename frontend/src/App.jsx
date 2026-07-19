import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import InputBox from "./components/InputBox";
import "./App.css";

function App() {
  return(
    <div className="app">
    <Header />
    <div className="chat-area">
    <ChatArea />
    </div>
    <div className="input-area">
    <InputBox />
    </div>
    </div>

  );
}

export default App;