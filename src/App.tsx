// Import assets
import './assets/style/css/style.css'

// Components
import TodoList from "./components/TodoList.tsx";
import TodoForm from "./components/TodoForm.tsx";

function App() {

  return (
        <div className="app-container h-auto d-flex align-items-center justify-content-center flex-column mb-5">
            <h3 className="mt-5 mb-5">Todo React App</h3>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default App
