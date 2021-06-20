'use strict';

const {HashTable} = require('../../hashtable');

function repeatedWord (string){
    if(typeof string !=="string"){
        throw new Error('Not A String');
    }
    let word ='';
    const table = new HashTable(1024);
    for(let i =0; i<string.length ; i++){
        let code = string.charCodeAt(i);
        if((code >=65 && code <=90)  || (code >=97 && code <=122) ){
            word+=string[i].toLowerCase();
        }else if(word.length>0){
            if(table.contains(word)){
                return word;
            }
            table.set(word, word)
            word='';
        }
    }
    return null;
}

module.exports = repeatedWord;