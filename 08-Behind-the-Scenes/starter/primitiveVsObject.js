/**Learning** Javascript primitive datatype:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt
In memory management above are called as primitive types.
Primitive types are stored in execution context of function, in which they are declared, 
which is executed in call stack. Objects are stored in heap.
 */

/**Object literal, Arrays, Functions etc all are objects.
In memory management above are called reference types.
In javascript engine, functions are executed in call stack and objects are stored in heap
 */

/**Learning** In below code, javascript engine will create a unique identifier with name age, then
a piece  of memory will be allocated with certain address and finally value of variable
is stored at specified address. All these things will happen in call stack execution context where primitive 
values are stored. Identifier age is actually points to unique address and not to the value
and value is stored at that address.*/
let age = 30;

/**Learning** In below line old age varialbe will point address to which age points. */
let oldAge = age;

/**Learning** When we are changing value of age variable to 31 then new unique address is created 
which holds value 31 and now age identifier starts pointing to this new address instead of old
address which contains value 30. Since olgAge identifier is still pointing to old address
 which contains value 30 so old age value is still 30. */
age = 31;
console.log(`**primitiveVsObject**age =${age}`);
console.log(`**primitiveVsObject**oldAge =${oldAge}`);

/**Learning** In below line, data of object me1 will lie in heap. An identifier will name me1 will be 
created in execution context which points to unique address and this unique address will contain 
address of heap where data of object me1 is stored. Call stack only stored reference of object which is 
actually present in heap. */
const me1 = {
  name: 'Avnish',
  age: 30,
};

/**Learing** A new friend identifier will be created which points to same unique address to which me1 points.
Since this unique address contains reference of heap where actual object lies. */
const friend = me1; //Copying me object into friend

/**Learning** Now when we changes age in friend object then atually object in heap, whose reference 
contained by unique address in call stack which is pointed by me1 and friend identifier is changed. Although
friend identifier is const but still we can change data in object. Actually we cant changes object reference
value  but we can go in heap and change data in object. */
friend.age = 27;
console.log(friend);

/**Learning** Since data in object is changed which is referenced by me1 object point during updating 
age  of friend object so me1 object will also print age = 27 */
console.log(me1); //Both me1 and friend has age 27 although it is changed only for friend

let lastName = 'Mishra';
let oldLastName = lastName;
lastName = 'Tiwari';
console.log(lastName, oldLastName);

const Neetish = {
  firstName: 'Neetish',
  lastName: 'Jha',
  age: 30,
  married: false,
};

const marriedNeetish = Neetish;
marriedNeetish.married = true;
console.log(`Neetish married = ${Neetish.married}`);
console.log(`Neetish married = ${Neetish.married}`);

/**Learning** Object const/variable stores below line will give error that we are trying to  change an const because
here we are trying to change reference address from old object address to new object
address  */
//marriedNeetish = {};

//Copying Objects
const bhuwaneshwar = {
  firstName: 'bhuwaneshwar',
  lastName: 'pandey',
  age: 30,
  married: false,
  /**Learning** Array is an object behind the scenes. So below array is object within an object  */
  family: ['Gyaneshwar', 'Avnish'],
};

/**Learning** bhuwaneshwar object data is copied in bhuwaneshwarCpoy object but other
has different address in heap so if there is any change in one object there it will not 
affect the other one. But for nested object like family it will only copy reference so any change in 
nested object in one object will be reflected in other one so there is only shallow copy instead of 
deep copy. For deep copy external libraries are used. */
const bhuwaneshwarCopy = Object.assign({}, bhuwaneshwar);
bhuwaneshwarCopy.lastName = 'Morrison';
console.log('bhuwaneshwar lastName', bhuwaneshwar);
console.log('bhuwaneshwarCopy lastName', bhuwaneshwarCopy);

bhuwaneshwarCopy.family.push('Mary');
bhuwaneshwarCopy.family.push('John');

/**Learning** after adding family member in family arra */
console.log('bhuwaneshwar lastName', bhuwaneshwar);
console.log('bhuwaneshwarCopy lastName', bhuwaneshwarCopy);
