const handleListen = require('./handleListen');

test('should call res.send() with Hello World!', () => {
  const log = jest.fn();
  const port = 4000;
  handleListen(log, port);
  expect(log.mock.calls).toHaveLength(1);
  expect(log.mock.calls[0][0]).toBe(`Your app listening on port ${port.toString()}!`);
});