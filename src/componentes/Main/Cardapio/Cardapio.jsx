import "./cardapio.css"

import json from "./Cardapio.json"

import { Card } from "./Card/Card.jsx"

function montaCard(item) {
  return item.map((item) => {
    return <Card itemCardapio={item} />
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
              <div className="div-cardapio" key={index}>
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