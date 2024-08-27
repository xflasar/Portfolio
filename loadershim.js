global.___loader = {
  enqueue: jest.fn(),
}

global.console = {
  ...console,
  //log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn()
}