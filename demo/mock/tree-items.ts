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


export let deepItemList: Array<Object> = [
    {
        name : 'First Element',
        spec : {
            props : {
                size : '10',
                weight : '10',
                color : 'red' 
            },
            version : '1.4'
        }
    },
    {
        name : 'Second Element',
        spec : {
            props : {
                size : '10',
                weight : '20',
                color : 'green' 
            },
            version : '1.4'
        }
    },
    {
        name : 'Third Element',
        spec : {
            props : {
                size : '20',
                weight : '10',
                color : 'black' 
            },
            version : '1.4'
        }
    },
]    
