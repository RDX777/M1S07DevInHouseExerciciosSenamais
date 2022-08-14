import "./cardapio.css"

import json from "./Cardapio.json"

import { Card } from "./Card/Card.jsx"

const item1 = {
  imagem: json.entrada[0].imagem,
  nome: json.entrada[0].nome,
  descricao: json.entrada[0].descricao,
  valor: json.entrada[0].valor,
  tempoPreparo: json.entrada[0].tempoPreparo
}

const item2 = {
  imagem: json.entrada[1].imagem,
  nome: json.entrada[1].nome,
  descricao: json.entrada[1].descricao,
  valor: json.entrada[1].valor,
  tempoPreparo: json.entrada[1].tempoPreparo
}


function Cardapio() {
  return (
    <div className="div-cardapio">
      <Card itemCardapio={item1}/>
      <Card itemCardapio={item2}/>
      <Card itemCardapio={item2}/>
      <Card itemCardapio={item2}/>
      <Card itemCardapio={item1}/>
      <Card itemCardapio={item1}/>
    </div>
  )
}



export { Cardapio }