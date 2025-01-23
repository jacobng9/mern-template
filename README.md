# Jacob's Mern Template 🍃

This repository provides a boilerplate MERN (MongoDB, Express.js, React.js, Node.js) stack application. It is designed to help beginner developers quickly spin up a full-stack web application with a scalable architecture.
For 

Fork the project first.

## Scripts

Test
```
npm run test
```
For deployment (Put commands into deployment website i.e. Render):
```
npm run build # client side command
npm run start # server side command
```
For development
```
cd client && npm run dev # client side command
npm run devstart # server side command
```

## Development
npm i in both server and client folders

Add .env in client folder
- VITE_REACT_APP_URI=http://localhost:5050

Add config.env in server folder
- ATLAS_URI=mongodb+srv://... (MongoDB drivers link)
- PORT=5050

  
## Deployment (example using Render)
Add .env in client folder
- VITE_REACT_APP_URI=https://mern-temp-render (Render deployed website link)

Add config.env in server folder
- ATLAS_URI=mongodb+srv://... (MongoDB drivers link)
- PORT=5050
Input deployment scripts for build and server commands

If any questions, please create comment!

## License
MIT License

