import React from 'react' ; 

const Todos = (props) => {
    const todos = props.todos ; 
    const todoslist = todos.length ? (
        todos.map(todo => {
            return (
                <div className = "collection item  blue lighten-1" key = {todo.id} onClick = {() => {props.deletetodos(todo.id)}}>
                    <p>{todo.contain} <span className = "dark-text right">{todo.time}</span></p>
                </div>
            )
        })

    ) : (
            <p className = "center"> You have no todos left , Yay</p>
    );
    return (
        <div className = "todos">
            {todoslist}
        </div>
    );
}

export default Todos;