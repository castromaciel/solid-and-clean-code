# Variable names

The names of the variables must necessarily be in English and must be pronounceable, we show below a **bad** example:

```typescript
//bad, these names we must avoid
const n = 53;

const tx = 0.15;

const coms = 1;

const mmddyyyy = new Date('April 24, 2000 00:00:00');
```

You have to try not to save characters when naming these variables. What we are looking for is that each of these names are very expressive.

```typescript
// better
const numberOfUnits = 53;

const tax = 0.15;

const comissions = 1:

const birthDate = new Date('April 24, 2000 00:00:00');
```

## Lack of technical information

```typescript
// bad
class AbstractUser { };
class UserMixin { };
class UserImplementation { };
interface UserInterface { };
```

```typescript
// better
class User { };
interface User { };
```
