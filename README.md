
# Dependant Object Keys (Name WIP)

This is a small utility type, which allows you to create one way "dependancies", or "constraints" between keys in diffrent objects.

Currently the type only supports boolean => any dependancies, but I plan to support any => any dependancies in the future.


## Installation

Install dependant-object-keys:

 - with npm
 ```bash
   npm install dependant-object-keys
 ```
 - with yarn
 ```bash
    yarn add dependant-object-keys
 ```


    
## Usage/Examples

To import the type, use import type like so:
```typescript
import type { DependantObj } from 'dependant-object-keys'
```
Then define the interface to use as the allowed values (you can use one of your existing interfaces / data structures), 

and the object defining which keys are supposed to exist, it should be extandable to the following type:
```typescript
interface BooleanIndex {
    [key:string]:boolean
}
```
 (again, you can use on of your existing data structures)
```typescript
interface AnyIndex {
  [key: string | symbol | number]: any
}

interface TestKeyMap1 extends AnyIndex {
  foo: 'fai' | 'fom'
  bar: 'bir' | 'bor'
}

const testMap1 = {
  isFoo: true,
  isBar: false,
} as const // We use as const to ensure the type signature is exact with the values in the object
```

Then we can define the actual constrained object, here are several examples of expected outcomes:
```typescript
const obj1 = {
  foo: 'fai',
  bar: 'bir', // will give TS error -  Object literal may only specify known properties, 
              // and 'syntax' does not exist in type DependantObj<typeof testMap1, TestKeyMap>
} satisfies DependantObj<typeof testMap1, TestKeyMap>

const testMap2 = {
  isFoo: true,
  isBar: true,
} as const

const obj2 = {
    foo: 'hi', // will give TS error - Type '"hi"' is not assignable to type '"fai" | "fom"'.
} satisfies DependantObj<typeof testMap2, TestKeyMap> // will also give TS error - Property 'bar' is missing in type '{ foo: "fai"; }', 
                                                      // but required in type DependantObj<typeof testMap2, TestKeyMap> 
```


## Authors

- [@Shachar Ron Zohar](https://github.com/shacharRonZohar)


## Acknowledgements

 - [Tom Bachar](https://www.linkedin.com/in/tom-bechar-8710851a6/) - who sent me on the right direction for solving this problem.

 - [Noy Morgenshtein](https://www.linkedin.com/in/noy-morgenshtein-260032231/) - which helped me understand typescripts conditional types.

## Feedback

If you have any feedback, please reach out to me @ rz_shachar@gmail.com, or feel free to open up a github issue / discussion for the repo!


## Contributing

This is a simple project in it's baby stages, so any and all contributions are always welcome!
