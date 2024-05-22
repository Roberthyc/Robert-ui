// 导出一个数组,总共五层菜单层级
export default [
    {
        id: 1,
        title: '菜单1'
    },
    {
        id: 2,
        title: '菜单2'
    },
    {
        id: 3,
        title: '菜单3',
        children: [
            {
                id: 31,
                title: '子菜单3-1',
                children: [
                    {
                        id: 311,
                        title: '子菜单3-1-1'
                    },
                    {
                        id: 312,
                        title: '子菜单3-1-2',
                        children: [
                            {
                                id: 3121,
                                title: '子菜单3-1-2-1'
                            },
                            {
                                id: 3122,
                                title: '子菜单3-1-2-2',
                                children: [
                                    {
                                        id: 31221,
                                        title: '子菜单3-1-2-2-1'
                                    },
                                    {
                                        id: 31222,
                                        title: '子菜单3-1-2-2-2'
                                    },
                                    {
                                        id: 31223,
                                        title: '子菜单3-1-2-2-3'
                                    }
                                ]
                            },
                            {
                                id: 3123,
                                title: '子菜单3-1-2-3'
                            }
                        ]
                    },
                    {
                        id: 313,
                        title: '子菜单3-1-3'
                    }
                ]
            },
            {
                id: 32,
                title: '子菜单3-2'
            },
            {
                id: 33,
                title: '子菜单3-3'
            }
        ]
    },
    {
        id: 4,
        title: '菜单4'
    },
    {
        id: 5,
        title: '菜单5',
        children: [
            {
                id: 51,
                title: '子菜单5-1'
            },
            {
                id: 52,
                title: '子菜单5-2',
                children: [
                    {
                        id: 521,
                        title: '子菜单5-2-1'
                    },
                    {
                        id: 522,
                        title: '子菜单5-2-2'
                    }
                ]
            },
            {
                id: 53,
                title: '子菜单5-3'
            }
        ]
    },
];