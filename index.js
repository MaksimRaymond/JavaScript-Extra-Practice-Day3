/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */

// A closure is a comination of a function bundled together inside another function. it is used for data privacy. if you want to make it hard to access certain Information, hide it inside another function.
function internet() {

  var name = 'Xfinity'; 
  function displayName() { 
   console.log(name);
  }
  displayName();
}
internet();



/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }

  // count is available inside of countermaker and counter because of scope. it is not available in the global scope.
  // count is initailized with let so that we can change it.
//  when you use var isntead it has the possibility to change it to a value instead of a variable and it creates problems accessing it




/*
TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. the value of this inside a fucntion will be the window object if the function is in the global scope.
* 2. Whenever a function is called with a  dot before it, the object before that dot is this.
* 3.Whenever a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function. 
* 4. Whenever JavaScript’s .call or .apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

cat = 'Athena';
console.log(cat);

// Principle 2

// code example for Implicit Binding

// const myDog = {
//   name: 'Emma',
//   bark: 'bark',
//   dog: function(){
//     console.log(this.bark);
//   }
// }

// myDog.dog();

// Principle 3

// code example for New Binding

// function Dog(barking){
//   this.phrase = barking;
// }

// const myDog = new Dog('Bark Bark');

// console.log(myDog.phrase)

// Principle 4

// code example for Explicit Binding

// function dog (){
//   console.log(this.bark);
// }

// const myDog = {
//   name: 'Emma',
//   bark: 'bark',
// }

// const otherDog = {
//   name: 'Zeus',
//   bark: 'Rawr'
// }

// dog.call(myDog);
// dog.call(otherDog);





/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(attrs){
//   this.createdAt = attrs.createdAt;
//   this.name = attrs.name;
//   this.dimensions = attrs.dimensions 
// }
 
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`
//   }

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
// 

function CharacterStats(childAttrs){
//   GameObject.call(this, childAttrs)
//   this.healthPoints = childAttrs.healthPoints;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);

//   CharacterStats.prototype.takeDamage = function(){
//     return `${this.name} took damage`
//   }

  


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
// function Humanoid(hAttrs){
//   CharacterStats.call(this, hAttrs)
//   this.team = hAttrs.team;
//   this.weapons= hAttrs.weapons;
//   this.language = hAttrs.language;
// }

//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function(){
//     return `${this.name} offers a greeting in ${this.language}`
//   }

 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  // const mage = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   healthPoints: 5,
  //   name: 'Bruce',
  //   team: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Tongue',
  // });
  // const swordsman = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   healthPoints: 15,
  //   name: 'Sir Mustachio',
  //   team: 'The Round Table',
  //   weapons: [
  //     'Giant Sword',
  //     'Shield',
  //   ],
  //   language: 'Common Tongue',
  // });
  // const archer = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 4,
  //   },
  //   healthPoints: 10,
  //   name: 'Lilith',
  //   team: 'Forest Kingdom',
  //   weapons: [
  //     'Bow',
  //     'Dagger',
  //   ],
  //   language: 'Elvish',
  // });
  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.







/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */


class GameObject {
  constructor(attrs){
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }

  destroy(){
    return `${this.name} was removed from the game`
  }};

class CharacterStats extends GameObject {
 constructor(childAttrs){
   super(childAttrs)
this.healthPoints = childAttrs.healthPoints;
  }
  
    takeDamage(){
      return `${this.name} took damage`
    }}
  
 
    class Humanoid extends CharacterStats {
      constructor(hAttrs){
        super(hAttrs)
        this.team = hAttrs.team
        this.weapons = hAttrs.weapons
        this.language = hAttrs.language
      }
    
      greet(){
        return `${this.name} offers a greeting in ${this.language}`
      }
    }
    
    







  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.