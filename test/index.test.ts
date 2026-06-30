import { describe, it, expect } from 'vitest'
import { version } from '../src/index'

describe('tiny-kit barrel', () => {
  it('exposes a version string', () => {
    expect(typeof version).toBe('string')
  })
})
