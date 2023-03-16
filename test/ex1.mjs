
import {printTriangle} from '../ex1.mjs'
import {expect} from 'chai'

describe('printTriangle', () => {
  it('should print a triangle pattern of asterisks', () => {
    const num = 5;
    const expectedOutput = '*\n**\n***\n****\n*****\n';
    expect(printTriangle(num)).to.equal(expectedOutput);
  });

  it('should print an empty string for 0', () => {
    const num = 0;
    const expectedOutput = '';
    expect(printTriangle(num)).to.equal(expectedOutput);
  });
});


