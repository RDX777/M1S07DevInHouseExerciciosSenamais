import "./card.css"

import PropType from 'prop-types';

function Card({itemCardapio}) {

  return (
    <div className="card">
      <img src={itemCardapio.imagem} alt={itemCardapio.nome} />
      <p>{itemCardapio.nome}</p>
      <p>{itemCardapio.descricao}</p>
      <p><strong>Preço: </strong>R$ {itemCardapio.valor}</p>
      <p><strong>Tempo de preparo: </strong>{itemCardapio.tempoPreparo} minutos</p>
    </div>
  )
}

Card.propTypes = {
  itemCardapio: PropType.shape({
    imagem: PropType.string,
    nome: PropType.string.isRequired,
    descricao: PropType.string.isRequired,
    valor: PropType.number.isRequired,
    tempoPreparo: PropType.number.isRequired
  })
}

export { Card }