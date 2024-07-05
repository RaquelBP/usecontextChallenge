import './App.css'; // Archivo de estilos CSS
import React from 'react';
import { ThemeProvider } from './themes/ThemeContext';
//import LanguageSelector from './LanguageSelector';
import RoutesApp from './routes/RoutesApp';

const App = () => {
  return (
    <ThemeProvider>
      <RoutesApp/>
    </ThemeProvider>
  );
};

export default App;
