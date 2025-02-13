var tree = {
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
                        },
                    ],
                },
                {
                    value: 4,
                    branches: [{ value: 2, branches: [{ value: 1 }, { value: 23 }] }],
                },
            ],
        },
    ],
};
function sumTree(tree) {
    var sum = tree.value;
    if (tree.branches) {
        for (var _i = 0, _a = tree.branches; _i < _a.length; _i++) {
            var branch = _a[_i];
            sum += sumTree(branch);
        }
    }
    return sum;
}
console.log(sumTree(tree));
