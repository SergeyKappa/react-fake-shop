import { createRoot } from 'react-dom/client';
import { App } from 'containers/App/App';
import 'index.css'
const root = createRoot(document.getElementById('root'));
root.render(<App />);


/*
import React from "react";
import ReactDOM from "react-dom";
import { Card, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const App = () => {
  const [cartProducts, setCartProducts] = React.useState([]);
  const [products, setProducts] = React.useState(getProducts());

  const handleAddProductToCart = productID => {
    setCartProducts([...cartProducts, productID]);
  };
  const handleRemoveFromCart = productID => {
    const newCartProducts = cartProducts.filter(id => id !== productID);
    setCartProducts(newCartProducts);
  };
  return (
    <>
      <div>
        <h1>Выберите товар</h1>
        {products.map(product => {
          const { id, name, price, photo } = product;
          let haveInCart = false;

          cartProducts.forEach(productID => {
            if (productID === id) {
              haveInCart = true;
            }
          });

          return (
            <Card title={name} key={id}>
              <p>{price}</p>
              <p>{photo}</p>
              {!haveInCart ? (
                <Button
                  onClick={() => handleAddProductToCart(id)}
                  type="primary"
                >
                  Добавить в корзину
                </Button>
              ) : (
                <Button
                  onClick={() => handleRemoveFromCart(id)}
                  type="primary"
                  danger
                >
                  Удалить из корзины
                </Button>
              )}
            </Card>
          );
        })}
      </div>
      <div>
        <h1>Ваша корзина</h1>
        {cartProducts.length > 0
          ? cartProducts.map(productID => {
              const productIndex = products.findIndex(product => {
                return product.id === productID;
              });
              let { name, id, price, photo } = products[productIndex];
              return (
                <Card title={name} key={id}>
                  <p>{price}</p>
                  <p>{photo}</p>
                </Card>
              );
            })
          : "Ваша корзина пуста! :("}
      </div>
    </>
  );
};

const getProducts = () => [
  {
    id: 1.1,
    name: "Title1",
    price: "10$",
    photo: "img1"
  },
  {
    id: 1.2,
    name: "Title2",
    price: "20$",
    photo: "img2"
  },
  {
    id: 1.3,
    name: "Title3",
    price: "30$",
    photo: "img3"
  },
  {
    id: 1.4,
    name: "Title4",
    price: "25$",
    photo: "img4"
  }
];

ReactDOM.render(<App />, document.getElementById("container"));
*/

//ReactDOM.render(element, document.getElementById('root'))
//const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<App/>);
//root.render(element);

// const element = (
//     <>
//         <h1>Hello, React.js</h1>
//         <p>
//             Додатки, створені за допомогою самого лише React, зазвичай мають
//             лише один кореневий вузол DOM. Якщо ви інтегруєте React в існуючий
//             додаток — ви можете мати будь-яку кількість ізольованих кореневих
//             DOM вузлів.
//         </p>
//         <p>
//             Для рендерингу React-елементу в кореневому DOM вузлі, викличте
//             функцію ReactDOM.render() з React-елементом та кореневим DOM вузлом
//             у якості аргументів:
//         </p>
//     </>
// )

// function App() {
//     return (
//         <>
//             <h1>Hello, i'm App Component.</h1>
//             <p>
//                 Додатки, створені за допомогою самого лише React, зазвичай мають
//                 лише один кореневий вузол DOM. Якщо ви інтегруєте React в
//                 існуючий додаток — ви можете мати будь-яку кількість ізольованих
//                 кореневих DOM вузлів.
//             </p>
//         </>
//     )
// }

//
function helle() {
    const name = 'Иван-Царевич'
    const ele = <h1>Здравствуй, {name}!</h1>
    //root.render(ele)
}
// setInterval(helle, 1500)

//
function tick() {
    const ent = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <p>Я делаю сайт на React.</p>
        </div>
    )
    //root.render(ent)
}
// setInterval(tick, 2000)

//
function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'Алесандер',
    lastName: 'Хацкевич',
}

const elem = <h1>Здравствуй, {formatName(user)}!</h1>
//root.render(elem)

//
function getGreeting(user) {
    if (user) {
        return <h1>Здравствуй, {formatName(user)}!</h1>
    }
    return <h1>Здравствуй, незнакомец.</h1>
}
//root.render(getGreeting())

//
const eleent = (
    <div>
        <h1>Здравствуйте!</h1>
        <h2>Рады вас видеть.</h2>
    </div>
)
//root.render(eleent)

//
function Welcome(props) {
    return <h1>Привет, {props.name}</h1>
}
const ement = <Welcome name="Алиса" />
//root.render(ement);// Привет Алиса
