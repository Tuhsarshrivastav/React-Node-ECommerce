import "./App.css";
import data from "./data";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./components/Product";
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classNameList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classNameList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
