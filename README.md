# Invenco Computer Store
This is a type script implementation that completes a test project described in https://gist.github.com/iknowcss/3d466f21b507a8d1fd2ade6561531aee

## To install
Assuming you have node.js installed.
```
npm install
```

## To compile
```
npx tsc
```

## To Run
```
npm start
```

## To Test
```
npx jest
```

## The SOLID design principles
The project's codebase is designed using the SOLID design principles. 
Which consists of
- <b>S</b>ingle Responsibility Principle, each class does a single job, separation of concerns. For example, Checkout class only concerns with checking out items where as each rule of each deal is responsible by other classes.
- <b>O</b>pen-Closed Principle, classes are open for extension but closed for modification. For example, when a new deal is introduced, we won't need to go back and modify any existing classes, we only need to create a new class that implements Process() method and register it into the Checkout.
- <b>L</b>iskov Substitution Principle (Not necessary in this project, unfortunately).
- <b>I</b>nterface Segregation Principle, don't put too much into an interface. For example, Product, and PricingRule interfaces have only a few properties. If we have had more, I would have split them out.
- <b>D</b>ependency Inversion Principle, High-level modules should not depend upon low-level ones. For example, each deal's logic (low-level) is done under the interface method Process() of each specific deal class, if we ever have to tweak how the rules work or performance optimisation, we can edit the implementation in the class. But the reference use of Process() which is called in Checkout.total() (high-level) won't need to change.
