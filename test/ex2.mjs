
import {printTree} from '../ex2.mjs'
import {expect} from 'chai'

describe('printTree', () => {
  it('should print a pine tree-like structure of asterisks', () => {
    const num = 5;
    const expectedOutput = '    *\n   ***\n  *****\n *******\n*********\n    *\n';
    expect(printTree(num)).to.equal(expectedOutput);
  });

  it('should print two asterisks for 1', () => {
    const num = 1;
    const expectedOutput = '*\n*\n';
    expect(printTree(num)).to.equal(expectedOutput);
  });
});


