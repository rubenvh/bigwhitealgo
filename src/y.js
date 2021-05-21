let eternity = (x) => eternity(x);

// version 1
let length0 = ((x) => x.length === 0 ? 0 : 1 + eternity());
let length1 = ((x) => x.length === 0 ? 0 : 
  1 + ((x) => x.length === 0 ? 0 : 
  1 + eternity())(x.slice(1)));
let length2 = ((x) => x.length === 0 ? 0 : 1 + 
((x) => x.length === 0 ? 0 : 1 + 
    ((x) => x.length === 0 ? 0 : 1 + eternity())(x.slice(1))
)(x.slice(1)));

// version 2
length0 = ((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)))(eternity);
length1 = ((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)))(
    ((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)))(eternity)
);

length2 = ((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)))(
    ((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)))(
        ((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)))(eternity)
    )
);

// version3
length0 = ((mklength) => mklength(eternity))((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)));
length1 = ((mklength) => mklength(mklength(eternity)))((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)));
length2 = ((mklength) => mklength(mklength(mklength(eternity))))((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)));

// version4
length0 = ((mklength) => mklength(mklength))((mklength) => (x) => x.length === 0 ? 0 : 1 + mklength(x.slice(1)));
length1 = ((mklength) => mklength(mklength(mklength)))((mklength) => (x) => x.length === 0 ? 0 : 1 + mklength(x.slice(1)));
length2 = ((mklength) => mklength(mklength(mklength(mklength))))((mklength) => (x) => x.length === 0 ? 0 : 1 + mklength(x.slice(1)));

// version5 - one to rule them all
length0 = ((mklength) => mklength(mklength))((mklength) => (x) => x.length === 0 ? 0 : 1 + mklength(mklength)(x.slice(1)));
length2 = length1 = length0;

// version6 - extract original length
length0 = ((mklength) => mklength(mklength))(((mklength) => ((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)))((x)=>mklength(mklength)(x))));
length2 = length1 = length0;

console.log(length1([]));
console.log(length1([1]));
console.log(length2([1, 2]));

// version6 - let Y-combinator emerge (mklength => f), length lambda => le
let Y = (le) => ((f) => f(f))(((f) => le((x)=>f(f)(x))));
let lengthn = Y((length) => (x) => x.length === 0 ? 0 : 1 + length(x.slice(1)));

console.log(lengthn([1, 2, 3, 4, 5]));