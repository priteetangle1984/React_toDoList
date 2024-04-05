export default function Todo ({todo, completeTodo, deleteTodo}) {
    return (
        <li>
            <div>
                <h2>{todo.text}</h2>
                <label>
                    Complete
                    <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => {
                        completeTodo(todo.id, e)
                    }}
                    />
                </label>
                <button
                    onClick={(e) => {
                        deleteTodo(todo.id)
                    }}
                >
                    Delete Todo
                </button>
            </div>
        </li>
    )
}