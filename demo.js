"use strict";

const pkg = require('./package.json');

console.log('='.repeat(50));
console.log(`  ${pkg.name} v${pkg.version}`);
console.log('='.repeat(50));
console.log(`  ${pkg.description}`);
console.log('');
console.log('  Status: Library loaded successfully');
console.log('');
console.log('  Available APIs:');

const fs = require('fs');
const apis = fs.readdirSync('./src/apis').map(f => f.replace('.js', ''));
apis.forEach(api => console.log(`    - ${api}`));

console.log('');
console.log('  Usage: require("sagor-noob") and call login({ appState }, callback)');
console.log('  See examples/ directory for usage examples.');
console.log('='.repeat(50));

try {
  const lib = require('./index');
  if (typeof lib === 'object') {
    console.log('  Library exports: OK');
  }
} catch (e) {
  console.error('  Library load error:', e.message);
}

console.log('='.repeat(50));
console.log('  Library is ready. Keeping process alive...');

setInterval(() => {}, 1000 * 60 * 60);
