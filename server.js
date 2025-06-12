const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const rootDir = __dirname;

app.use(express.static(rootDir));

app.get('/:page?', (req, res, next) => {
  const page = req.params.page || 'index';
  const filePath = path.join(rootDir, `${page}.html`);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return next();
    res.sendFile(filePath);
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, '404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
