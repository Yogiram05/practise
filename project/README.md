# DevOps Exam Project

A very simple Node.js Express backend for DevOps hands-on practice and AWS EC2 deployment.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open the API in your browser or use curl:
   ```bash
   curl http://localhost:3000/
   ```

## Docker

Build the image:
```bash
docker build -t devops-exam-project .
```

Run the container:
```bash
docker run -p 3000:3000 devops-exam-project
```

## API

- `GET /`
- Response:
  ```json
  {
    "message": "DevOps Exam Project Running Successfully"
  }
  ```
