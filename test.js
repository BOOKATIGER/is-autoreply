
const isAutoreply = require('.');
const assert      = require('assert');

// Generally email is not autoreply
assert.ok(!isAutoreply({}));

// Test Auto-Submitted header
assert.ok(!isAutoreply({ 'Auto-Submitted': 'No' }));
assert.ok(!isAutoreply({ 'auto-submitted': 'no' }));
assert.ok(isAutoreply({ 'Auto-Submitted': 'Yes' }));
assert.ok(isAutoreply({ 'auto-submitted': 'yes' }));
assert.ok(isAutoreply({ 'auto-submitted': '' }));

// Test Return-Path header
assert.ok(!isAutoreply({ 'Return-Path': '' }));
assert.ok(!isAutoreply({ 'Return-Path': 'foo@example.com' }));
assert.ok(!isAutoreply({ 'return-path': 'foo@example.com' }));
assert.ok(isAutoreply({ 'Return-Path': '<>' }));
assert.ok(isAutoreply({ 'return-path': '<>' }));

// Test X-Auto-Response-Suppress header
assert.ok(!isAutoreply({ 'X-Auto-Response-Suppress': 'None' }));
assert.ok(!isAutoreply({ 'x-auto-response-suppress': 'none' }));
assert.ok(isAutoreply({ 'X-Auto-Response-Suppress': 'OOF' }));
assert.ok(isAutoreply({ 'x-auto-response-suppress': 'oof' }));
assert.ok(isAutoreply({ 'x-auto-response-suppress': 'RN, NRN' }));
assert.ok(isAutoreply({ 'x-auto-response-suppress': '' }));
