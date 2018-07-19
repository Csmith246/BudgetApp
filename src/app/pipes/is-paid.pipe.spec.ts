import { IsPaidPipe } from './is-paid.pipe';

describe('IsPaidPipe', () => {
  it('create an instance', () => {
    const pipe = new IsPaidPipe();
    expect(pipe).toBeTruthy();
  });
});
