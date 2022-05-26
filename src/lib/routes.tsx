import { useRoutes } from "react-router-dom";
import { MainLogin } from "features/login/component/Main";
import { MainTodo } from 'features/todo/components/Main';

export const MyRoutes = () => useRoutes([
    {path: "/", element: <MainLogin/>},
    {path: "/todo", element: <MainTodo/>},
]);