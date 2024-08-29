import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = true;

  return (
    <div className="App">
      {/* css global */}
      <h1 className="title">CSS no React</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Pegou css do componente</p>
      {/* inline style */}
      <p style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue" }}>
        Este elemento utiliza inline
      </p>
      {/* inline style dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS DINAMICO
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "pink" }}>
        CSS DINAMICO
      </h2>
      {/* classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter uma classe
      </h2>
      {/* CSS MODULES */}
      <Title />
    </div>
  );
}

export default App;
