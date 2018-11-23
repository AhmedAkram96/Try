const webpush = require('web-push');
var express = require('express');

const publicVapidKey = 'BDOVB7uBfJtzd1LVED6arTp7BCNB8p5ayAFxSeGfsKpo8m9oBIp2TCsa1igQ96RnraTsRzbrWSFFxZlZrISBj7Y';
const privateVapidKey = 'qvoHShWvcYluMvj0P5o0oJcGhYaY7pZOQK3oyG6ZSPs';

// Replace with your email
webpush.setVapidDetails('mailto:ahmed.akram32765@gmail.com', publicVapidKey, privateVapidKey);
console.log("ahmed");
var app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(3000);