export let treeItems: Array<Object> = [
    {
        name: "First Element",
        children: [
            {
                name: "1 > First Element",
                children: [
                    {
                        name: "1 > 1 > First Element"
                    }
                ]
            },
            {
                name: "1 > Second Element",
                children: [
                    {
                        name: "1 > 2 > First Element"
                    },
                    {
                        name: "1 > 2 > Second Element"
                    },
                    {
                        name: "1 > 2 > Third Element"
                    }
                ]
            }
        ]
    }, {
        name: "Second Element"
    }, {
        name: "Third Element",
        children: [
            {

                name: "3 > First Element",
                children: []

            }
        ]
    }
]
