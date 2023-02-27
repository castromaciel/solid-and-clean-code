# Technical Debt

## What is technical debt?

Technical debt is **the cost of additional rework** caused by choosing the fastest solution instead of the most effective.

**It is the lack of quality in the code**, which generates a debt that will affect future costs. These costs are economic and time:

* Carrying out maintenance
* Refactor the code
* Understand the code
* Additional time on code transfer

### Martin Fowler technical debt scheme

![Technical debt scheme](https://www.devopsgroup.com/wp-content/uploads/2020/08/devopsgroup_blog_tech_debt.png)

## How is technical debt paid? 

Falling into technical debt is normal and often unavoidable. We must be aware and worry about paying the technical debt. Techical debt is paid with **_Refactiring_**

## Refactoring

It's the process that aims to improve the code without altering its behavior to make it more understandable and tolerant of changes.

Usually, for a strong refactoring to have the expected objective, it is essential to have unit tests.

If we don't implement unit tests, we'll fall into famous: *"If it works, don't touch it"*.

Poor software quality always ends up being paid or assumed by someone. Whether it is the client, the provider with resources or the developer himself spending time refactoring or wasting time programming on a fragile system.
