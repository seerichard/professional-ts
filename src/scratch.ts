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

export * as foo from './data/channels';