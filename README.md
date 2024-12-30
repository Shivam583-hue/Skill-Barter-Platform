# OpportuneHub

OpportuneHub is a multi-purpose website designed to foster collaboration and connectivity among users. Whether you're looking to work on a project, discuss data structures and algorithms, share your work portfolio, or find job opportunities, OpportuneHub has got you covered.

## 🚀 Live Deployment
[OpportuneHub](https://opportunehub.onrender.com/)  
_Deployed on Render free tier so response times may be slow ._

### Test Credentials
For users who just want to look around, use the following test credentials:
- **Email**: yaadnhi@gmail.com
- **Password**: 123456

## Features

1. **Collaboration and Chatrooms**  
   - Create a new chatroom in the Chatrooms section. Each chatroom gets a unique ID.
   - Use this ID to create an opportunity post in the Post section.
   - When people comment on your opportunity post, you can review their profiles and invite them to collaborate by adding them to your chatroom.

2. **Direct Collaboration Requests**  
   - Send proposals directly to users from their profiles.
   - View and manage your collaboration proposals in the Inbox page.

3. **DSA Section**  
   - Post and discuss anything related to Data Structures and Algorithms (DSA).

4. **Jobs Section**  
   - Find job opportunities or referral openings posted by other users.

5. **Flex Section**  
   - Showcase your projects, designs, or portfolios to impress potential employers, clients, or collaborators.

## Tech Stack

OpportuneHub is built using the following technologies:

- **Frontend**: React, TypeScript, Tailwind CSS, ShadCN UI, Material-UI (MUI), DaisyUI
- **Backend**: Express, Node.js
- **Database**: Prisma ORM with PostgreSQL
- **Real-Time Communication**: Socket.IO
- **Deployment**: Render (Free Tier)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/opportunehub.git
   cd opportunehub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Configure your `.env` file with your PostgreSQL connection string.
   - Run migrations using Prisma:
     ```bash
     npx prisma migrate dev
     ```

4. Start the development server:
   ```bash
   cd backend
   npm run server
   ```

5. Access the application locally at `http://localhost:5000`.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or features to add.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Feel free to explore OpportuneHub and make the most out of its collaborative features!

