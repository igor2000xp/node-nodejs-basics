import * as stream from "stream";

export const transform = async () => {
    // Write your code here
  const readFromTerminal = process.stdin;
  const writeFromTerminal = process.stdout;

  class TransformStream extends stream.Transform {
    constructor(options = {}) {
      super(options);
    }

    _transform(chunk, encoding, callback) {
      const stringifyReversedChunk = chunk.toString().split('').reverse().join('').trim();
      this.push(`${stringifyReversedChunk}\n\n`);
      callback();
    }
  }

  const myTransform = new TransformStream();

  readFromTerminal.pipe(myTransform).pipe(writeFromTerminal);
};

await transform();
