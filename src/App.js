import React, { useState } from 'react';
import Account from './components/account'

//import img
import Boss1 from './img/boss1.png'
import Boss2 from './img/boss2.png'
import Boss3 from './img/boss3.png'


function App(props) {

  const [wallet, setWallet] = useState(2000)

  const [data, setData] = useState([{
    nom: "Black",
    prix: 100,
    stock: 5,
    url: Boss1
  },
  {
    nom: "Latte",
    prix: 150,
    stock: 5,
    url: Boss2,
  },
  {
    nom: "Vanilla",
    prix: 200,
    stock: 5,
    url: Boss3,
  }])

  const [panier, setPanier] = useState([])

  const add = (/** @type {number} */ i) => {
    let acheterArticle = [...data]
    let ajouterPanier = [...panier]
    if (acheterArticle[i].stock > 0 && wallet >= acheterArticle[i].prix) {
      acheterArticle[i].stock--
      ajouterPanier.push(acheterArticle[i])
      setWallet(wallet - acheterArticle[i].prix)
      setPanier(ajouterPanier)
      setData(acheterArticle)
    }
  }


  const remove = (i) => {
    let ajouterArticle = [...data]
    let retirerPanier = [...panier]
    setWallet(wallet + retirerPanier[i].prix)
    ajouterArticle[ajouterArticle.indexOf(retirerPanier[i])].stock++
    retirerPanier.splice(i, 1)

    setPanier(retirerPanier)
    setData(ajouterArticle)
  }

  return (
    <div className="App" >

      <Account
        wallet={wallet}
      />

      <h1>Produits</h1>
      <div id="articles">
        {data.map((data, i) => (
          <div key={i} className={data.stock === 0 ? "bg-danger" : data.stock === 1 ? "bg-warning" : ""}>
            <img className="dataIMG" src={data.url} alt={data.nom} />
            <h3>{data.nom}</h3>
            <h4>{data.prix}</h4>
            <p>{data.stock}</p>
            <button className={`btn btn-secondary ${data.stock === 0 ? "d-none" : ""}`} onClick={() => add(i)}>Add to cart</button>
          </div>
        ))}
      </div>
      <div>
        <h2>CART</h2>
        <div id="panier">
          {panier.map((data, i) => (
            <div key={i}>
              <h3>{data.nom}</h3>
              <button className="btn btn-secondary" onClick={() => remove(i)}>remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
