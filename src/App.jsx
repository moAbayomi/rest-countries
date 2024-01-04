import Home from "./Home";
import Header from "./Header";
import About from "./About";
import { useCountry } from "./CountryProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  const { darkMode } = useCountry();
  return (
    <main
      className={`${
        darkMode ? "bg-blueBg" : "bg-grayBg"
      }  min-h-[100vh] max-w-full`}
    >
      <div className="max-w-full grid my-4 ">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:nameParam" element={<About />}></Route>
      </Routes>
    </main>
  );
}

export default App;
