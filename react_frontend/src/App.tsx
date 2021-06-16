import React from 'react';
import Dashboard from './pages/Dashboard'
import GlobalStyle from './styles/global'
import Details from './Details';

const App: React.FC = () => (
  <>
    <Dashboard />
    <GlobalStyle />
    <Details/>
  </>

)

export default App;

