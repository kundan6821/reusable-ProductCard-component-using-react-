import ProductCard from "./components/ProductCard";

import iqoo from "./assets/iqoo.jpg";
import samsung from "./assets/samsung.jpg";
import google from "./assets/google.jpg";
import nothing from "./assets/nothing.jpg";

function App() {
  return (
    <div style={{ display: "flex", gap: "2px", padding: "2px" }}>
      <ProductCard
        name="iQOO"
        price="45,000"
        inStock={true}
        image={iqoo}
      />

      <ProductCard
        name="Samsung"
        price="80,000"
        inStock={false}
        image={samsung}
      />

      <ProductCard
        name="Google"
        price="65,000"
        inStock={true}
        image={google}
      />

      <ProductCard
        name="Nothing"
        price="35,000"
        inStock={true}
        image={nothing}
      />
    </div>
  );
}

export default App;
