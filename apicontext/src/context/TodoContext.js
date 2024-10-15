import {createContext,useContext} from "react";

export const TodoContext = createContext({
    Todos :[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
        ],
        addTodo: (Todo)=>{},
        UpdateTodo:(Todo,id)=>{},
        deleteTodo: (id)=>{},
        toggleCompleted:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider