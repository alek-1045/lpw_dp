import styled from 'styled-components'


export const Form = styled.form`

  width: 100%;
  max-width: 600px;
  margin: 50px;
  padding: 50px;
  background: #fff;


  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  input[type=tex] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ff0000;
    padding: 0 30px;
    font-size: 20px;
  }

    button{
      padding: 10px 20px;
      border-radius: 4px;
      border: 0;
      background: #ff0000;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }

`;
