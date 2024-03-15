'use strict';

const Person = function(firdtName, birthyes){
 this.firdtName = firdtName;
 this.birthyes = birthyes
}

const hello = new Person('jonas', 1991);

const toukir = new Person('toukir', 1999)


///////prototype//////////

Person.prototype.calcage = function(){
    console.log(2024 - this.birthyes)
}

hello.calcage();
toukir.calcage();


console.log(toukir.__proto__);
console.log(toukir.__proto__.__proto__);



const arr = [1,2,3,4,5,6,7];
console.log(arr.__proto__);


const acccout = {
    ower: 'toukir',
    movement : [200.530,120,300,'bitch'],
    
    get latest(){
        return this,this.movement.slice(-1).pop()
    }
}

console.log(acccout.latest);