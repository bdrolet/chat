# Context
_This is a prototype of a fairly simple chat app written in nextjs._

This prototype utilizes...
- NextJS [app router](https://nextjs.org/docs/app). (Implemented in [@/app](/app/))
- API Layer using NextJS [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers). (Implemented in [@/app/api](/app/api/))
- Responsive UI using [bootstrap-react](https://react-bootstrap.netlify.app/). (Example in [users.tsx](/components/ui/users.tsx))
- UI Components using [React Components](https://react.dev/learn/your-first-component). (Implemented [@/components/ui](/components/ui/)


# Running Locally
_The sections below outline how to run this locally._
## Perequisites
- [Docker](https://www.docker.com/) ([Setup](https://www.docker.com/get-started/))
- [npm](https://www.npmjs.com/) ([Setup](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- [node](https://nodejs.org/en) ([Setup](https://nodejs.org/en/download))
## Env file
To create the .env file with the following values
```
BASE_URL='http://localhost:3000'
NEXT_PUBLIC_BASE_URL='http://localhost:3000'
DATABASE_URL="postgresql://postgres:password1@localhost:5432/mydb"
```
_Note: postgres password set in [setup.sh](/setup.sh)._
## Startup Scripts
_From nothing to running..._
```bash
git clone git@github.com:bdrolet/chat.git
cd chat
npm run setup
npm run dev
```
🦄😺 have fun!
# Database Setup
The database is setup in [Startup Scripts](#startup-scripts) using...
```bash
npm run setup
```
But, you can also setup manually. _(See contents of [setup.sh](/setup.sh))_...
```bash
docker run --name chat-postgres -p 5432:5432 -e POSTGRES_PASSWORD=password1 -d postgres
npx prisma migrate dev --name init
npm install @prisma/client 
npx prisma generate 
```
# Design
## libraries Used
- ORM: https://www.prisma.io/
- Responsive Design: https://react-bootstrap.netlify.app/
- Icons: https://react-icons.github.io/react-icons/

## APIs
- GET - /user (all users)
- GET - /api/user/[user_id] (single user)
- GET - /api/user/[user_id]/chat (get all a users chats)
- GET - /api/chat/[chat_id]  (get a chat)
- POST - /api/messsage (post a message)

## Web Pages
- / - (Load all users)
- /user/[user_id] - (Load all chats for a user)
- /user/[user_id]/chat/[chat_id] (Load a chat for a User)

## Future Improvements
- Implement Server Side Events: https://github.com/vercel/next.js/discussions/48427#discussioncomment-6029799
- Implement Authentication: https://next-auth.js.org/
- Secret Management: postgres database password
