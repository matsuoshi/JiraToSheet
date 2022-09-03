import { prepare, getConfig } from "./app"

describe('foo', () => {
  test('bar', () => {
    const expected = prepare(1)
    expect(expected).toBe(2)
  })
})
