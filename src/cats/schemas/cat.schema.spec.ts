import { Cat.Schema } from './cat.schema';

describe('Cat.Schema', () => {
  it('should be defined', () => {
    expect(new Cat.Schema()).toBeDefined();
  });
});
