//your JS code here. If required.
const https = require('https');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

https.get(url, (res) => {
  let data = '';

  // Collect response data
  res.on('data', chunk => {
    data += chunk;
  });

  // When response is complete
  res.on('end', () => {
    const parsedData = JSON.parse(data);

    console.log('API Response:');
    console.log(`ID: ${parsedData.id}`);
    console.log(`Title: ${parsedData.title}`);
    console.log(`Completed: ${parsedData.completed}`);
  });

}).on('error', (err) => {
  console.error('Error making request:', err.message);
});
