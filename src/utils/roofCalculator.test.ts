import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateRoofScope, validateInquiryForm, formatCurrency } from './roofCalculator';

test('calculateRoofScope returns valid calculation for standing seam on standard pitch', () => {
  const result = calculateRoofScope({
    propertyType: 'residential',
    serviceType: 'standing-seam',
    estimatedSqFt: 2400,
    pitch: 'standard',
    substrateCondition: 'sound',
  });

  assert.equal(result.isFeasible, true);
  assert.equal(result.totalSquares, 24);
  assert.equal(result.pitchDifficultyMultiplier, 1.15);
  assert.ok(result.indicativePriceRange[0] > 0);
  assert.ok(result.indicativePriceRange[1] > result.indicativePriceRange[0]);
  assert.ok(result.estimatedMaterialWeightKg > 0);
  assert.equal(result.warnings.length, 0);
});

test('calculateRoofScope flags low pitch warning for slate tile', () => {
  const result = calculateRoofScope({
    propertyType: 'heritage',
    serviceType: 'slate-tile',
    estimatedSqFt: 3000,
    pitch: 'low',
    substrateCondition: 'sound',
  });

  assert.equal(result.isFeasible, true);
  assert.ok(result.warnings.some(w => w.includes('minimum 4:12 pitch')));
});

test('calculateRoofScope handles below minimum threshold', () => {
  const result = calculateRoofScope({
    propertyType: 'residential',
    serviceType: 'standing-seam',
    estimatedSqFt: 50,
    pitch: 'standard',
    substrateCondition: 'sound',
  });

  assert.equal(result.isFeasible, false);
  assert.ok(result.warnings[0].includes('Minimum scoping threshold'));
});

test('validateInquiryForm checks mandatory fields and email format', () => {
  const emptyCheck = validateInquiryForm({
    fullName: '',
    email: '',
    phone: '',
    projectAddress: '',
  });

  assert.equal(emptyCheck.isValid, false);
  assert.ok(emptyCheck.errors.fullName);
  assert.ok(emptyCheck.errors.email);
  assert.ok(emptyCheck.errors.phone);
  assert.ok(emptyCheck.errors.projectAddress);

  const invalidEmail = validateInquiryForm({
    fullName: 'Robert Robinson',
    email: 'invalid-email',
    phone: '555-0199',
    projectAddress: '123 Ridgecrest Dr',
  });

  assert.equal(invalidEmail.isValid, false);
  assert.ok(invalidEmail.errors.email);

  const valid = validateInquiryForm({
    fullName: 'Robert Robinson',
    email: 'robert@example.com',
    phone: '555-123-4567',
    projectAddress: '123 Ridgecrest Dr',
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('formatCurrency formats numbers correctly', () => {
  assert.equal(formatCurrency(25000), '$25,000');
});
