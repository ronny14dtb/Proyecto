type TreeNode = { value: number; branches?: TreeNode[] };

const tree: TreeNode = {
    value: 0, 
    branches: [
        {
            value: 5,
            branches: [
                { value: 2 },
                {
                    value: 4,
                    branches: [{ value: 3, branches: [{ value: 2 }, { value: 1 }] }],
                },
            ],
        },
        {
            value: 10,
            branches: [
                {
                    value: 2,
                    branches: [
                        { value: 4 },
                        {
                            value: 2,
                            branches: [{ value: 2, branches: [{ value: 1 }, { value: 5 }] }],
                        }
                    ]
                },
                {
                    value: 4,
                    branches: [{ value: 2, branches: [{ value: 1 }, { value: 23 }] }]
                }
            ]
        }
    ]
};
/*
    (arbol=0)
       /   \
     (5)   (10)
    /   \   /   \
  (2)   (4) (2)  (4)
        /    / \    \
      (3)  (4) (2)  (2)
      / \      /      /  \
    (2) (1)  (2)    (1)  (23)
           /  \
         (1)  (5)



*/
function sumTree(tree: TreeNode): number {
    let sum = tree.value;

    if (tree.branches) {
        for (const branch of tree.branches) {
            sum += sumTree(branch);
        }
    }

    return sum;
}

console.log(sumTree(tree));
