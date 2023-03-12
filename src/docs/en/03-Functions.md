# Functions

> _"We know we're developing clean code when each function does exactly what its name says."_ -**Ward Cunningham**

```typescript
function sendEmail (toWhom: string): boolean {

  // Verify email address
  if (!toWhom.includes("@")) return false;

  // Build body or message

  // Send email

  // If everything goes well
  return true;
}
```
Look at the example above. (Let's avoid internally how the function is built) the function obviously indicates that I want to send an email to that recipient, and return a boolean value.

We can see here the definition of it in which we have to verify an email, it is a small piece of fairly basic code. Otherwise, it does not come at at, we return **_false_**. and if not, then the body, the message or other things are built, but this remains subjective.

So this function, what it's literally doing is that.

Check the mail, build the body of the message that we want to send.

Send the mail and if everything goes well, return a **_true_**.

But let's look at this other exercise in which we have email this way sendemail doesn't receive any arguments and returns a boolean value.

Ok, so I would think it does not mean that the function is wrong.

That is not so, it is not the problem.

Because it could be that you have the email in another place, or that it is in a slightly higher scope in which it can be taken from there or perhaps some environment variable.

```typescript
function sendEmail (): boolean {

  // Verify user exists

  // Verify password

  // Create a new email at db

  // If everything goes well
  return true;
}
```

In here we are seeing that it says to verify if the user exists. This doesn't make much sense in this function. I would not expect to see this here.

The next action is Check password. The password for what? It may be that we are checking the password of the person's email, that is, of the email that we are going to use to send the mail. It could be that it is, but then comes creating a mailbox in the database and that doesn't make much sense.

**The function is called sin email.**

It's not sending any email, it's working like doing a login or something else.

So this is what we mean when we say **_Function names have to do exactly what their function name says._** That's all.

## Parameters and arguments

When we are defining a function, these variables are called **_parameters_**.

```typescript
function sendEmail (toWhom: string): boolean {
  // Verify email address
  if (!toWhom.includes("@")) return false;
  return true;
}
```

On the other hand, when we invoke this function, they are called **_arguments_**.

```typescript
sendEmail('castromaciel@email.com')
```

Now why do we highlight this?

Well, because **there is no limit to the number of parameters that we can define**.

The problem is that it is recommended that we limit it to three. The truth is that it is not a problem, but when there are more than three, the functions look quite heavy to read when they have many parameters.

As you can see here:

```typescript
// bad
function sendEmail(toWhom: string, from: string, body: string, subject: string, apiKey: string): boolean {

}
```
All of this line up here is exactly the same as what I have down here:
```typescript
// bad
function sendEmail(
  toWhom : string,
  from   : string,
  body   : string,
  subject: string, 
  apiKey : string
): boolean {

}
```
Only here it's ordered with a different tab stop, but it's basically the same. And these lines are literally the same, only there are better tabs.

Other problem is, when we are working with positional arguments, if we want to send only the **_apiKey_**, it must necessarily send the other parameters.

So, a better way to work this is to send 3 or 1 parameter. Why only one parameter? Because we can do this:

```typescript
// better
interface SendEmailOptions {
  apiKey : string
  body   : string,
  from   : string,
  subject: string, 
  toWhom : string,
}

function sendEmail({
  apiKey, body, from, subject, toWhom
}: SendEmailOptions): boolean {

} 
```

That helps a lot to make it easier to read, easier to maintain and that we have the relationship of each one of these.

There is also another recommendation, which is that their properties are ordered alphabetically.


Other recomendations

  - Simplicity is essential.
  - The functions must have a reduced size.
  - One-line functions without causing complexity.
  - Based on the Clean Code book, less than 20 lines.
  - Avoid using _else_.
  - Prioritize the use of the _ternary conditional_ (as far as possible)

**Bad example!!**
```ts
const getDeduction = ({
  isAffiliate = false, isPremium = true, hasChristmasDeduction = false, amountToPay = 100
}): number => {
  let result;
  if (isAffiliate) {
    result = amountToPay / 0.1;
  } else {
    if (isPremium) {
      result = amountToPay / 0.2;
    } else {
      if (hasChristmasDeduction) {
        result = amountToPay / 0.25;
      } else {
        result = amountToPay; 
      }
    }
  }
  
  return result;
}
```

**Better**
```ts
const getDeduction = ({
  isAffiliate = false, isPremium = true, hasChristmasDeduction = false, amountToPay = 100
}): number => {
  if (isAffiliate) return amountToPay / 0.1;

  if (isPremium) return amountToPay / 0.2;

  return hasChristmasDeduction ? 0.25 : amountToPay
}
```