import './App.css'
import { Todo } from './Todo/Todo'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  
  return (
    <section>
       <Todo/>
       <ToastContainer className="z-higher" />
     </section>
  )
}

export default App
