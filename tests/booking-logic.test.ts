import { describe, it, expect } from 'vitest';

function generateBookingReference(prefix: string, timestamp: number) {
  return `${prefix}-${timestamp.toString().slice(-8)}`;
}

function calculateEstimatedFee(serviceType: string, hasUrgency: boolean) {
  const basePrices: Record<string, number> = {
    'electrical repairs': 25000,
    'house wiring': 85000,
    'fault diagnosis': 18000,
    'lighting installation': 35000,
    'emergency electrical request': 40000,
  };

  const fee = basePrices[serviceType.toLowerCase()] ?? 30000;
  return hasUrgency ? fee + 15000 : fee;
}

describe('VoltBiz business logic', () => {
  it('creates a consistent booking reference string', () => {
    const reference = generateBookingReference('VB', 1720000000000);
    expect(reference).toBe('VB-00000000');
  });

  it('calculates a higher fee for emergency work', () => {
    const fee = calculateEstimatedFee('emergency electrical request', true);
    expect(fee).toBe(55000);
  });

  it('uses the base fee for regular work', () => {
    const fee = calculateEstimatedFee('fault diagnosis', false);
    expect(fee).toBe(18000);
  });
});
