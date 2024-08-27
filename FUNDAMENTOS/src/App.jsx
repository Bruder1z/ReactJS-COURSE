
import './App.css'

import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'
import Manu from './components/Manu' 

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression />
      <MyComponent />
      <Manu />
    </div>
    
  )
}

export default App
