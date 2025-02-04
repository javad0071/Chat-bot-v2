const express = require('express');
     const app = express();
     const port = 3000;

     // Route برای صفحه اصلی
     app.get('/', (req, res) => {
         res.send('سلام! این سرور من است.');
     });

     // Route برای صفحه مخفی
     app.get('/secret', (req, res) => {
         const password = req.query.password;
         if (password === '1234') {
             res.send('خوش آمدید! این صفحه مخفی است.');
         } else {
             res.send('کد اشتباه است!');
         }
     });

     // شروع سرور
     app.listen(port, () => {
         console.log(`سرور در حال اجرا است: https://javad0071.github.io/Chat-bot-v2/`);
     });