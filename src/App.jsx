import { GroceryList } from "./GorceryList/GorceryList";
import { Headers } from "./Headers.jsx/Headers";
import { Form } from "./Form/Form";
import { Footer } from "./Footer/Footer";


export default function App() {

  return (
    <div className="app">
      <Headers/>
      <Form/>
      <GroceryList/>
      <Footer/>
    </div>
  )
}
