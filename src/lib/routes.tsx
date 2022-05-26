import { useRoutes } from "react-router-dom";
import { MainAuth } from "features/auth/component/Main";
import { MainTodo } from 'features/todo/components/Main';

export const MyRoutes = () => useRoutes([
    {path: "/", element: <MainAuth/>},
    {path: "/todo", element: <MainTodo/>},
]);