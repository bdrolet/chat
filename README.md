# Rerequisites
Docker: https://www.docker.com/
npm and node
# Env file
To create the .env file with the following values
```
BASE_URL='http://localhost:3000'
DATABASE_URL="postgresql://postgres:password1@localhost:5432/mydb"
```
# Get it running!

```bash
git clone git@github.com:bdrolet/chat.git
cd chat
npm run setup
npm run dev
```
have fun!
# Database Setup
```bash
npm run setup
```

...manual steps are below.

```bash
docker run --name chat-postgres -p 5432:5432 -e POSTGRES_PASSWORD=password1 -d postgres
npx prisma migrate dev --name init
npm install @prisma/client 
npx prisma generate 
```
# libraries Used
- ORM: https://www.prisma.io/
- Responsive Design: https://react-bootstrap.netlify.app/
- Icons: https://react-icons.github.io/react-icons/
# Improvements
- Implement Server Side Events: https://github.com/vercel/next.js/discussions/48427#discussioncomment-6029799
- Implement Authentication: https://next-auth.js.org/
- Secret Management: postgres database password

# APIs
- GET - /user (all users)
- GET - /api/user/[user_id] (single user)
- GET - /api/user/[user_id]/chat (get all a users chats)
- GET - /api/chat/[chat_id]  (get a chat)
- POST - /api/messsage (post a message)

# Web Pages
- / - (Load all users)
- /user/[user_id] - (Load all chats for a user)
- /user/[user_id]/chat/[chat_id] (Load a chat for a User)


