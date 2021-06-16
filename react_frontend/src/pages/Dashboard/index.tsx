//import { Console } from 'console';
import React, { useEffect, useState } from 'react';
import { Form } from './styles';
import api from '../../services/api'

interface Cadastro {
  //id: string;
  cliente: string;
  email: string;
  telefone: string;
}

// aula 3 24:43
// voltar e olhar aula 3 e 4



const Dashboard: React.FC = () => {
  // const [cliente, setcliente ] = useState<Cadastro[]>(()=> {
  //   const storagedcliente = localStorage.getItem(
  //     '@cliente:cadastro'
  //   )

  //     if (storagedcliente) {
  //       return JSON.parse(storagedcliente)
  //     }

  //     return[]
  // })

  // useEffect(() => {
  //   localStorage.setItem(
  //     '@cliente:cadastro',
  //     JSON.stringify(cliente)
  //   )

  // }, [cliente])


  const [ cliente, setcliente ] = useState<Cadastro[]>([])

  async function handleAddCliente(event: any) {
    event.preventDefault()

    const { target: form} = event

    const novoCadastro = {

      cliente: form.cliente.value,
      email: form.email.value,
      telefone: form.telefone.value,
    }


    await api.post('/clients', novoCadastro)

    setcliente([...cliente, novoCadastro,])
    console.log(cliente)
    console.log(novoCadastro)
    form.reset()

  }
  return (
    <>
        <Form onSubmit={handleAddCliente}>
          <input type='text' name='cliente' placeholder='Cliente' />
          <input type='text' name='email' placeholder='E-mail' />
          <input type='text' name='telefone' placeholder='Telefone' />
          <button type='submit'>Salvar</button>
        </Form>

  </>
  )
}

export default Dashboard








//<Form onSubmit={handleAddCliente}>

// const Dashboard: React.FC = () => {

//   return (
//     <Form>
//       <input type='text' name='cliente' placeholder='Cliente' />
//       <input type='text' name='email' placeholder='E-mail' />
//       <input type='text' name='telefone' placeholder='Telefone' />
//     <button type='submit'>Salvar</button>
//   </Form>
//   )
// }



