import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Container, Clientetop } from './styles'
// interface ClientesParametros {
//   clientes: String
// }

const Details: React.FC = () => {
  // const { params } = useRouteMatch<ClientesParametros>()
  // console.log (params)
  return (
    <Container>
      <Clientetop>
        <div>
            <input type='text' name='cliente' placeholder='Cliente' />
            <input type='text' name='email' placeholder='E-mail' />
            <input type='text' name='telefone' placeholder='Telefone' />
            <button type='submit'>Altera</button>
            <button type='submit'>Excluir</button>
          </div>
      </Clientetop>
    </Container>
  )
}

export default Details



{/* <ul>
  <li>
    <span>li</span>
    <span>li</span>

  </li>
<ul/> */}
