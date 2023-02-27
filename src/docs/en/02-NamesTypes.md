# Names according to data type

## Arrays 

For arrays, we know that they are an iterable list or the elements have something in common.

```typescript 
// bad 
const fruit = ['apple', 'orange', 'strewberry']
```
```typescript 
// regular
const fruitList = ['apple', 'orange', 'strewberry']
```
```typescript 
// good 
const fruits = ['apple', 'orange', 'strewberry']
```
```typescript 
// better 
const fruitNames = ['apple', 'orange', 'strewberry']
```

## Booleans

They usually have two values ​​(with the exception of undefined, null) this is not always the case and depends on the language

For this case, the use of prefixes (is, has, can) is recommended.

```typescript 
// bad
const open = true;
const write = true;
const active = true;
const fruit = false;
const notEmpty = false;
const noValues = false;
```

```typescript 
// better
const isOpen = true;
const canWrite = true;
const isActive = true;
const hasFruit = false;
const isEmpty = false;
const hasValues = false;
```

## Numbers

You can use many words, use prefixes like min, max, or use the word "of"

```typescript
// bad
const fruits = 3;
const cars = 10; 
```
```typescript
// better
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 1;

const totalOfCars = 10; 
```

## Functions 

They have several characteristics. They must represent actions, which generally must be named with the verb that represents the action followed by a noun. They should be descriptive and concise. You must express what you do and refrain from all implementation.

```typescript
// bad
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailIfFieldsValid();
```
```typescript
// better
createUser();
updateUser();
sendEmail();
```

## Classes

Classes should have names of nouns or noun phrases, avoid generic names because they can lead to classes doing more work than they should.

* The name is the most important thing in the class
* They shouldn't be too generic.
* Use UpperCamelCase

```typescript
// bad
class Manager {};
class User {};
class Data {};
class Info {};
```

3 Questions to determine/know if it is a good class name:

* What exactly does the class do?
* How exactly does this class perform a certain task? 
* Is there anything specific about his location?

If something doesn't make sense, it should be removed or refactored.

Advice: `more words !== better name`
```typescript
// bad
class SpecialViewingCaseMonsterManagerEvents {};
```
