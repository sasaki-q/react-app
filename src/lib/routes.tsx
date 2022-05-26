import { useRoutes } from "react-router-dom";
import { MainLogin } from "features/login/component/Main";
import { MainTodo } from 'features/todo/components/Main';
import { NotFound } from "utils/views/NotFound";

export const MyRoutes = () => useRoutes([
    {path: "/", element: <MainLogin/>},
    {path: "/todo", element: <MainTodo/>},
    {path: "/*", element: <NotFound/>},
]);