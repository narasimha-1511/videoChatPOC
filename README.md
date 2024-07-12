# Real-Time Video Chat Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This real-time video chat application is a peer-to-peer solution that enables seamless communication between users. Leveraging the power of WebRTC and Socket.IO, we have created a secure and efficient platform for real-time video and audio conversations.

## Features
List the key features of your application, such as:
- Peer-to-peer communication: Our application utilizes a direct connection between users, ensuring low latency and high-quality video and audio.
- Socket.IO as a signaling server: Socket.IO acts as the signaling server, facilitating the exchange of connection information between peers, enabling them to establish a direct WebRTC connection.
- Real-time video and audio: Users can engage in real-time video and audio conversations, providing an immersive communication experience.

## Installation
Provide step-by-step instructions on how to install and set up your application, including any dependencies or prerequisites.

1. Clone the repository:
```bash
git clone https://github.com/your-username/videoChatPOC.git
```

2. Navigate to the project directory:
```bash
cd videoChatPOC
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run build
npm start
```

## Usage

To use the real-time video chat application, follow these simple steps:

1. **Open your web browser and navigate to `localhost:3000`.**

2. **Enter your name in the input field.**

3. **Choose a room name to join or create a new room.**

4. **Click the "Join" button.**

5. **Once in the room, you will see a video preview of yourself.**

6. **Invite your friend(s) to join the same room by sharing the room URL or room name.**

7. **When your friend(s) join the room, you will see their video feed appear.**

8. **You can now engage in a peer-to-peer video chat with your friend(s).**

10. **To leave the room, simply click on leave room**

By following these steps, you and your friend(s) can join the same room and establish a direct peer-to-peer connection using WebRTC. The application leverages Socket.IO as the signaling server to facilitate the exchange of connection information between peers, enabling them to establish the WebRTC connection.

Remember, both you and your friend(s) must be connected to the same room to initiate the peer-to-peer video chat. Enjoy your real-time video conversations!
## Technologies Used
List the technologies, frameworks, and libraries used in your project, such as:
- React
- WebRTC
- Socket.IO
- Node.js
- Express

## Contributing
If you would like others to contribute to your project, provide guidelines on how to do so, such as:
- Fork the repository
- Create a new branch for your feature
- Submit a pull request with a description of your changes
