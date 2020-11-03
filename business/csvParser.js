function getData() {
    const csv = require('csv-parser');
    const fs = require('fs');

    fs.createReadStream('./resources/a.csv')
        .pipe(csv())
        .on('data', (row) => {
            console.log(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
    });
}
