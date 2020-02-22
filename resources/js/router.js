import Delete from "./components/DeleteMe/Delete";
const routes = [
    {
        path: '/app',
        component: Delete,
        children: [
            {
                path: ':word',
                component: Delete,
            },
        ],
    },
];

export default routes;
