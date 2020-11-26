// @ts-nocheck
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
// Commented out due to type error
// type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`;

/*------------------------------------------------------------------------------------------------*/

// ts-expect-error vs ts-ignore

// Unused directive - shows ts-expect-error is no longer necessary
// Could surface bugs accidentally added through changing types
// Using command: @ts-expect-error
const num1 = 5;

// Will completely ignore everything
// @ts-ignore
const num2 = 5;

/*------------------------------------------------------------------------------------------------*/

// Unknown is a top type - it can hold any value
// Difference between "any" and "unknown" - unknown is on us to make a check on the value

function somethingRisky() { }

// A way to type assertions more effectively
// Defined return type is of Error - "err is Error"
// If an error, will return an error. Else will throw
function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error)) throw new Error(`Not an error: ${err}`);
}

try {
  somethingRisky();
} catch (err: unknown) {
  assertIsError(err);
  console.log(err.stack)
}

/*------------------------------------------------------------------------------------------------*/

// Can now import type ONLY
// Reduces code sent to the client
import type { useAsyncDataEffect } from '../src/utils/api';
// useAsyncDataEffect(); will not work - 'useAsyncDataEffect' cannot be used as a value because it was imported using 'import type'

export * as foo from './data/channels';