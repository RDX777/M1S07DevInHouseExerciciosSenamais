import "./cardapio.css"

import json from "./Cardapio.json"

import { Card } from "./Card/Card.jsx"

function coletaSubCategoria(item) {
  let subCategoria = new Set()
  item.map(item => {
    subCategoria.add(item.subsecao)
  })
  return Array.from(subCategoria)
}

function montaCard(cardapio) {
  let subCategoria = coletaSubCategoria(cardapio)
  return subCategoria.map((item, index) => {
    return (
      <div key={index}>
        <h3>{item}</h3>
        <div className="div-cardapio">
          {localizaItem(cardapio, item)}
        </div>
      </div>
    )

  })
}

function localizaItem(cardapio, subCategoria) {
  let classificados =  cardapio.filter(item => {
    return item.subsecao == subCategoria
  })
  return classificados.map(itemCLassificado => {
    return <Card itemCardapio={itemCLassificado} />
  })
}

function Cardapio() {
  return (
    <div>
      {
        Object.keys(json).map((item, index) => {
          return (
            <div>
              <h2>{item}</h2>
              <div key={index}>
                {montaCard(json[item])}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}



export { Cardapio }