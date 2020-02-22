const routes = [
    {
        path: '/app',
        component: () =>
            import( /* webpackChunkName: "communication" */ './components/DeleteMe/Delete'),
        children: [
            {
                path: ':word',
                component: () =>
                    import(
                        /* webpackChunkName: "communication" */ './components/DeleteMe/Delete'
                        ),
            },
        ],
    },
];

export default routes;
