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
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray
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
console.log(hash.keys());
