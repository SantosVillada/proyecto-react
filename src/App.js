import './App.css';
import Header from './Components/Header'
import ItemListContainer from './Components/ItemListContainer';
const App = () => {

  const titulo = "Hola soy un titulo Prop"

  return (
    <>
      <Header />
      <ItemListContainer titulo = {titulo}  ejemplo = "segundo ejemplo de props"/>
    </>
  )
}

export default App;