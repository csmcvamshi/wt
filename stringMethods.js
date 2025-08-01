var s = new String('hello this is a string');
console.log(s);
console.log(`the length of the string is ${s.length}`);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log("split():"+s.split("i").toString());
console.log("repalcing all the e->x: "+s.replaceAll("e","i"));
console.log("trimming:"+s.trim());
console.log("subString():"+s.substring(2,7));
console.log("char at 1 index "+ s.charAt(1));
console.log("code point of char at index 1"+s.charCodeAt(1));
console.log("conact():"+s.concat(" can you see?"));

