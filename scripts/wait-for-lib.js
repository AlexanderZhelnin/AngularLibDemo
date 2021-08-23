const fs = require('fs');

function waitLib(path) {
  console.log(`Ждём создание папки ${path}...`);
  if (!fs.existsSync(path)) setTimeout(() => waitLib(path), 1000);
}
waitLib('./dist/my-lib');
