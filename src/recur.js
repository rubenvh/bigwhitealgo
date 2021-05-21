function thunk(x) {
    return () => x;
}

function add2(fn1, fn2) {
    return fn1() + fn2();
}

function addn(ns) {
    if (ns.length === 1)
        return ns[0];
    else
        return add2(
            thunk(ns[0]), 
            thunk(addn(ns.slice(1))));
}

function addn2(...ns) {
    return ns
        .map(_ => thunk(_))
        .reduce((acc, curr) => () => add2(curr, acc), thunk(0))
        ();
}

console.log([1], addn([1]), addn2(1));
console.log([1, 2], addn([1, 2]), addn2(1, 2));
console.log("[1, .., 100]", addn(Array.from(Array(101).keys())), addn2(...Array.from(Array(101).keys())));