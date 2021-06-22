'use strict';
const { HashTable } = require('../../hashtable');

function leftJoin(table1, table2) {
    let result = [];
    for (let i = 0; i < table1.filled.length; i++) {
        const list = table1.table[table1.filled[i]];
        let current = list.head;
        while (current) {
            const obj = Object.entries(current.data)[0];
            const found = table2.get(obj[0])
            obj[obj.length] = found ? found[obj[0]] : null;
            result[result.length] = obj;
            current = current.next;
        }
    }
    return result;

}

module.exports = { leftJoin, HashTable };