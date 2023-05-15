// Import assets
import './assets/style/css/style.css'

// Components
import TodoList from "./components/TodoList.tsx";

function App() {

  return (
        <div className="app-container d-flex align-items-center justify-content-center flex-column">
            <h3>Todo React App</h3>
            <TodoList />
        </div>
    )
}

export default App
