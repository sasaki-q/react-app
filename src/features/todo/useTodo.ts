import { Todo } from "features/todo/type"
import { http } from "utils/http";

export const useTodos = () => {

    const getTodos = async(): Promise<Array<Todo>> => {
        const res = await http.get('todos/1');
        console.log(`DEBUG axios get response === ${res.data["todos"]} === ${http.defaults.baseURL}`)
        return res.data["todos"];
    };

    return getTodos;
}