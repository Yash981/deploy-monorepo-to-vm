import { prisma } from "@repo/db";


export default async function Home() {
  const users = await prisma.user.findMany()
  return (
    <>
    {JSON.stringify(users)}
    </>
  );
}
export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
