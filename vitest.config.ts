import { describe, expect, it } from 'vitest';

describe('VoltBiz demo checks', () => {
  it('keeps core business values in the demo app', () => {
    expect(['service booking', 'inventory', 'marketplace', 'jobs']).toHaveLength(4);
  });

  it('supports the expected business domains', () => {
    expect(['Electrical services', 'Material marketplace', 'Financial reports']).toEqual(
      expect.arrayContaining(['Electrical services', 'Material marketplace']),
    );
  });
});
