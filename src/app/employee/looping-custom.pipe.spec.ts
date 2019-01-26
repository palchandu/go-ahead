import { LoopingCustomPipe } from './looping-custom.pipe';

describe('LoopingCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new LoopingCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
