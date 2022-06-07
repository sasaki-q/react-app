import { useRoutes } from "react-router-dom";
import { MainLogin } from "features/login/component/Main";
import { MainTodo } from 'features/todo/components/Main';
import { NotFound } from "components/elements/NotFound";

export const MyRoutes = () => useRoutes([
    {path: "/", element: <MainLogin/>},
    {path: "/todo", element: <MainTodo/>},
    {path: "/*", element: <NotFound/>},
]);