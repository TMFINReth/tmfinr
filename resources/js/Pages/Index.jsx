import Features from "./components/elements/Features";
import Footer from "./components/elements/Footer";
import Header from "./components/elements/Header";
import LastPrices from "./components/elements/LastPrices";
import Tools from "./components/elements/Tools";
import Charts from "./components/elements/charts";

function App() {
  return (
    <>
      <LastPrices />
      <main className="container flex flex-col align-top  text-white items-center">
        <Header />
        <Charts />
        <Tools />
        <Features />
        <Footer />
      </main>
    </>
  );
}

export default App;
