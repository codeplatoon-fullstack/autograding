const fs = require('fs');

fs.readFile('dist/index.js', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    // removes escape rules
    const regex = /\s+\.replace\(.*\)/g;
    const result = data.replace(regex, "");

    fs.writeFile('dist/index.js', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});