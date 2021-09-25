# reactor
Welcome to the Reactor component library!

All contributions are much welcome. If you have something just push it in the misc folder and the mages of webcraft will do the rest. If you feel like applying to the rules of development just see ----->


Rules of development:

* Components should follow atomic design as followed: If a component is a styled component or a animated component it is an atom | If a component is composed of one or more atom/s it is a molecule | If a component is composed of one or more atom/s and one or more molecule/s it is a compound | If a component is composed of one or more atom/s and one or more molecule/s and one or more compound/s it is an organism.
* Components should be appended with an ID< some number greater than the greates occuring number for that type of component > e.i styledButton_ID0 styledButton_ID1 and so forth.
* Components should follow the following structure: Each component is place in a directory with the components name incl. the appended ID< some number > starting with a lower case character together with a index.js file which exports the component e.i export { StyledMenu_ID0 } from './StyledMenu_ID0' | each components .jsx file should be the components name  incl. the appended ID< some number > starting with a upper case character.
* Components that has special util functionallity such as access control hooks and so forth, should be placed in the utils folder.
* The bullit regarding component naming and structure applies for themes as well. Well it applies for all files (hooks and other util components etc.)
* Components that use material-ui should be placed in the darkMatter directory.
* Every component should have an opening comment describing the component, and should have the following structure:
```javascript
/**
 * <What the component is/are> e.g A flexbox container
 * default values:
 * <example-property1: example-value1> e.g flex-direction: column
 * <example-property2: example-value2> e.g align-items: center
 * ...
 * props:
 * <examplePropery1: example-property1> e.i name of prop and what property it maps to
 * <examplePropery2: example-property2>
 * ...
 */
```
* If custom props is added to a component it should follow the following naming convention: exampleProperty e.i the css property but in camelCase syntax.
* If you feel like you need a separate branch to work on and then merge this to master go ahead. However the following rules must be obliged: Branches should have the following naming: dev-reactor-id< some number starting from 1 > number 0 is reserved as a testing branch which anyone can use.
* If you feel like hacking directly on the master branch... No guts no glory!

Rules for commit messages:

First row of commit message should be one of the following:
* Add of < atom | molecule | compound | organism | some sort of short message of what has been added >
* Update of < atom | molecule | compound | organism | some sort of short message of what has been updated >
* Remove of < atom | molecule | compound | organism | some sort of short message of what has been Removed >

Second row should be:
* Just a empty line.

Third row and so forth apply to the following rules:
* Max 30 characters before line break.
* The rest is up to you! Preferably some sort of description of what has been done.

A note that is worth remembering TypeScript is nice :)
