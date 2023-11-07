import { Header } from "./Header";
import { Board } from "./Board";
function App() {
  return (
    <div className="flex flex-col items-center min-h-screen text-gray-400 bg-black">
      <Header />
      <Board />
    </div>
  );
}

export default App;
