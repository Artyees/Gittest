// var t = 0;
// t0 = performance.now();
// const large = new Array(10000000).fill('hehe');
// for (let i = 0; i < large.length; i++) {
//     if (large[i] == "hehe") {
//         t++;
//     }
// }
// t1 = performance.now();

// console.log(t1 - t0)
// console.log(t)

// const arra = [1, 2, 3, 4, 5]
// const ar = [1, 2, 3]

// function pairarray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(`${arr[i]} , ${arr[j]} \n`)
//         }
//     }
// }

// pairarray(["a", "b"]);

// console.log("ginrnbnben;knbnaebnababneab;nae".length)


// const arr = [1, 2, 3, 4, 5, 12, 15, 18, 19];
// const finding = 5;
// function findTheRangeSum(arr, finding) {
//     var n = 0;
//     let m = arr.length - 1;
//     if (arr[m] + arr[m - 1] < finding || arr[0] + arr[1] > finding) {
//         console.log("Not possible -- finding value is out of range");
//     }
//     else {
//         let j = arr[n];
//         let k = arr[m]

//         while (n != m) {

//             j = arr[n];
//             k = arr[m]
//             if (j + k == finding) {
//                 console.log("Found with " + j + " + " + k + " = " + finding)
//                 break;
//             }
//             else {
//                 if (j + k < finding) {
//                     n++;
//                 }
//                 else {
//                     m--;
//                 }

//             }
//         }
//     }
// }

// findTheRangeSum(arr, finding)



// const arr1 = ["a", null, "c", "x"];
// const arr2 = ["r", null, "s", "w"];


// function findingSameValueIn2Arrays(arr1, arr2) {
//     const map1 = new Map;
//     var i = 0;
//     var j = 0;
//     var flag = false;
//     while (i < arr1.length && j < arr2.length) {
//         if (map1.has(arr1[i])) {
//             console.log(`Value ${arr1[i]} founded`)
//             flag = true;
//             break;
//         }
//         else {
//             map1.set(arr1[i], arr1[i])
//         }
//         if (map1.has(arr2[j])) {
//             console.log(`Value ${arr2[j]} founded`)
//             flag = true;
//             break;
//         }
//         else {
//             map1.set(arr2[j], arr2[j])
//         }
//         i++;
//         j++;
//     }
//     if (flag == false) {
//         console.log("Both array have unique values")
//     }
//     console.log(map1)
// }
// findingSameValueIn2Arrays(arr1, arr2)

// Create a Set
// const letters = new Set();

// // Create Variables
// const a = "x";
// const b = "y";
// const c = "z";

// // Add the Variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);
// letters.add("d");
// letters.add([1, 2, 3, 4])
// letters.add([1, 2, 3, 4])
// letters.add(a)


// console.log(letters);






// Create a Set
// const letterss = new Set(["a", "b", "c"]);
// letterss.add("z")
// console.log(letterss.values())

// console.log(letterss)


// const arr1 = [1, 2, 4, 8];
// const sum = 8;
// const arr2 = [1, 2, 4, 4];

// function fundpair(arr1, sum) {
//     len = arr1.length
//     const set = new Set();
//     for (let i = 0; i < len; i++) {
//         if (set.has(arr1[i])) {
//             return true
//         }
//         set.add(sum - arr1[i])
//     }
//     return false
// }

// console.log(fundpair(arr2, sum))



// class Player {
//     constructor(name, type) {

//         this.name = name;
//         this.type = type;
//         console.log("Player : ", this)
//     }
//     intro() {
//         console.log(`Player Introduction : ${this.name} & ${this.type}`)
//     }
// }

// class Character extends Player {
//     constructor(name, type, power) {
//         super(name, type);
//         this.power = power
//         console.log(" Character : ", this)
//     }
//     line() {
//         console.log(`Character Introduction : ${this.name} & ${this.type} , ${this.power} RAWRRRR`)
//     }
// }

// var wizard = new Character("Arty", "Wizard", "FireBall");
// wizard.intro();
// wizard.line();


// class MyArray {
//     constructor(length, data) {
//         this.length = 0;
//         this.data = {};
//     }
//     get(index) {
//         return this.data[index];
//     }
//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }
//     pop() {
//         const lastItem = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return lastItem;
//     }

//     delete(index) {
//         const item = this.data[index];
//         this.shiftItems(index);
//     }
//     shiftItems(item) {
//         for (let i = item; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length - 1]
//         this.length--;

//     }
// }

// const arr = new MyArray;
// arr.push("hehe")
// arr.push("weeee1")
// arr.push("weeee2")
// arr.delete(0);
// arr.push("weeee3")
// arr.push("weeee4")
// console.log(arr);


// let text = "How are you?";
// const myArray = text.split('');
// const newArr = [];
// for (let i = myArray.length - 1; i >= 0; i--) {
//     newArr[i] = myArray[(myArray.length - 1) - i]
// }
// // console.log(myArray);
// // console.log(newArr);
// const str = newArr.join("")
// console.log(text)
// console.log(str);


// //Second method / way
// let text2 = "How are you?";
// const backwardArray = [];
// for (let i = text2.length - 1; i >= 0; i--) {
//     backwardArray.push(text2[i])
// }
// console.log(backwardArray);
// const reverse = backwardArray.join('')
// console.log(reverse)

// //Third method / way

// let text3 = "How are you?";
// function reversee(strr) {
//     return strr.split('').reverse().join('');
// }
// console.log(reversee(text3))


class HashTable {
    constructor(size) {
        this.data = new Array(size);

    }

    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
    }
    get(key) {
        let address = this._hash(key);
        let currentbucket = this.data[address];
        if (currentbucket) {
            for (let i = 0; i < currentbucket.length; i++) {
                if (currentbucket[i][0] == key) {
                    return currentbucket[i][1]
                }
            }
        }
        else {
            return undefined;
        }
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
}

const hash = new HashTable(5);
hash.set("grapes", 10000);
hash.set("mangoes", 100);
hash.set("mangoes", 200);
hash.set("mangoes", 300);
console.log(hash.get("grapes"))
console.log(hash.get("mangoes"))
console.log(hash)

