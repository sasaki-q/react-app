import { Todo } from "features/todo/type"

const todos: Array<Todo> = [
    {id: 1, title: "coding", isDone: true},
    {id: 2, title: "unit test", isDone: false},
    {id: 3, title: "integration test", isDone: false},
]

export const useTodos = () => {

    const getTodos = async(): Promise<Array<Todo>> => {
        return todos;
    };

    return getTodos;
}