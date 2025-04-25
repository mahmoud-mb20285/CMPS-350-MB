

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Home() {

  const allUsers = await prisma.user.findMany({
    where: {
      name: "Sarah Lee",
    },
  })
  
  // Display all users in the console
  console.log(allUsers);

  return (
    <article>
      <h1>Welcome Prisma & Server Actions examples</h1>
    </article>
  );
}


