// Optional Chaining
const x: {
  user: {
    name: string;
    address?: {
      street: string;
      city: string;
    };
  };
} = undefined as any;

// ? is early termination if address is null or undefined
const y = x.user.address?.city;
console.log(x.user.address?.city);

/*------------------------------------------------------------------------------------------------*/

// Nullish Coalescing
class Foo {
  // # is hard privacy
  // If you use 'private' and use debugger, name will appear. With # it will not
  // If you inherit Foo, the inherited class will have no idea about 'name' - truly private
  #name: string;

  // Public - shorthand for having a classfield called name on the constructor argument
  constructor(rawName?: string) {
    // If null or undefined use 'no name'
    this.#name = rawName ?? 'no name'
  }

  log() {
    console.log(this.#name)
  }
}

/*------------------------------------------------------------------------------------------------*/

// Tuple types
// Can now put a spread in the middle
type Foo2<T extends any[]> = [boolean, ...T, boolean];

/*------------------------------------------------------------------------------------------------*/

// Labelled Tuple Types
// Array with fixed number of elements
type Address = [
  streetNumber: number,
  city: string,
  state: string,
  postal: number
];

function printAddress(...address: Address) { }

printAddress(122, "San Francisco", "CA", 1231);

/*------------------------------------------------------------------------------------------------*/

// Recursive Typed Alias and Interfaces - can now have a recursive typed value

// Type JSONValue refers to itself
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
    [k: string]: JSONValue;
  };

const val: JSONValue = {
  name: 'r ich',
  address: {
    street: 'Spear St'
  }
};

/*------------------------------------------------------------------------------------------------*/

// Template type literal
// Could be good for CSS-in-JS, React onClick functions etc
type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`;

export * as foo from './data/channels';