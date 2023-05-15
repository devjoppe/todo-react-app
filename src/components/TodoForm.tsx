const TodoForm = () => {
    return(
        <div className="d-flex align-items-center mb-3 col-6 mb-5">
            <form className="d-flex mr-3 mb-0 col-12">
                <input type="text" className="form-control mr-3" id="formGroupExampleInput" placeholder="Enter a task here" />
                <button type="button" className="btn btn-primary mr-3">Save</button>
            </form>
        </div>
    )
}

export default TodoForm