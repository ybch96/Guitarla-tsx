import "./App.css";
import Guitar from "./components/Guitar";
import { useState } from "react";
import { db } from "./data/db";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  const addToCard = (iten) => {
    const itenExits = cart.findIndex((guitar) => guitar.id === iten.id);

    if (itenExits >= 0) {
      console.log("Si estaba en el carrito");
      const updateCart = [...cart]
      updateCart[itenExits].quantity++
      setCart(updateCart);
    } else {
      console.log("No estaba en el carrito");
      iten.quantity = 1
      setCart([...cart, iten]);
    }
  };
  console.log(cart);
 
  return (
    <>
    <Header 
    cart={cart}
    />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar key={guitar.id} guitar={guitar} addToCard={addToCard} />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
