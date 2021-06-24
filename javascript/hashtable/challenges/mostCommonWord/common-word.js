'use strict';

const {HashTable} = require('../../hashtable');

function mostCommonWord(string){
    const table = new HashTable(1024);
    const str = string+"0";
    let mostCommon = [];
    let highestNum=0;
    let word ='';
    let wordCount =0;
    for(let i =0; i < str.length ; i++){
        let charCode = str.charCodeAt(i);
        if((charCode >=65 && charCode <=90)  || (charCode >=97 && charCode <=122) ){
            word+=str[i].toLowerCase();
        }else if(word.length>0){
            wordCount++;
            let find = table.get(word);
            if(find){
                const modified = table.findAndModify(word, {count:find[word].count+=1, firstTime:find[word].firstTime})
                if(modified.count >highestNum){
                    highestNum = modified.count
                    mostCommon =[{word:word,data:modified}];
                }else if(modified.count== highestNum){
                    mostCommon[mostCommon.length]={word:word,data:modified};
                }
            }else{
                const added = table.findAndModify(word, {count:1, firstTime:wordCount});
                if(!highestNum>0){
                    highestNum=1;
                    mostCommon=[{word:word,data:added}]
                }
            }
            word='';
        }
    }
    if(mostCommon.length==1){
        return mostCommon[0];
    }else{
        let first = mostCommon[0];
        for(let i =0; i< mostCommon.length;i++){
            if(mostCommon[i].data.firstTime < first.data.firstTime){
                first = mostCommon[i];
            }
        }
        return first;
    }
}

console.log( mostCommonWord('a cat cat ate Taco ate a  taco'));