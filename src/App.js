import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import List from "./Components/List";

function App() {
  return (
    <div className="flex flex-col items-center font-sans-serif">
      <Header></Header>
      <Hero></Hero>
      <List></List>
      <Footer></Footer>
    </div>
  );
}

export default App;
