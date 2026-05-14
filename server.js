const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'DevOppouiytrs Exam Project Running Successfully',
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
