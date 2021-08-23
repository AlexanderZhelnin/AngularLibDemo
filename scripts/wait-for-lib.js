const fs = require('fs');

((path) => {
  console.log(`Ждём создание папки ${path}...`);
  if (!fs.existsSync(path)) setTimeout(() => waitFor(path), 1000);
  fs.ex;
})('./dist/my-lib');


