import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import React from "react";
import ItemStatusFilter from "../item-status-filter";
import './app.css'

const App = () => {

    const todoData = [
        {label: 'drink coffee', important: false, id: 1},
        {label: 'make app', important: true, id: 2},
        {label: 'have a lunch', important: false, id: 3},
    ];
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div>
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;