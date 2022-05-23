import { http } from "utils/http";
import { Todo } from "features/todo/type"

export const useTodos = () => {

    const getTodos = async(): Promise<Array<Todo>> => {
        const res = await http.get(`/todos/1`);
        return res.data["todos"];
    };

    const getUserTodos = async(uid: number): Promise<Array<Todo>> => {
        const res = await http.get(`/todos/${uid}`);
        return res.data["todos"];
    };

    return { 
        getTodos,
        getUserTodos,
    };
}