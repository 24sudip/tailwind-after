import "./app.css";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <h2 className="text-[#C53213] uppercase text-center relative after:absolute after:bottom-[10px] after:left-[50%] content-[*] after:h-1 after:w-10 after:bg-red-600 p-5 after:translate-x-[-50%] after:opacity-0 hover:after:opacity-100">hello</h2>
      <input placeholder="text" className="border-2 border-solid border-rose-500"/>
      <Header/>
      <div className="md:container flex mx-auto">
        <div className="w-1/2 h-[100px]">
          <h3 className="font-rob uppercase">hello</h3>
        </div>
        <div className="w-1/2 h-[100px] bg-[green]"></div>
      </div>
    </>
  );
}

export default App;
