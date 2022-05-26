import { http } from "utils/http";
import { Todo } from "features/todo/type"

export const useTodos = () => {

    const getUserTodos = async(uid: number): Promise<Array<Todo>> => {
        const res = await http.get(`/todos/${uid}`);
        return res.data;
    };

    return {
        getUserTodos,
    };
}