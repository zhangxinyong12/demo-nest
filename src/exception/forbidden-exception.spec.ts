import { ForbiddenException } from './forbidden-exception';

describe('ForbiddenException', () => {
  it('should be defined', () => {
    expect(new ForbiddenException()).toBeDefined();
  });
});
