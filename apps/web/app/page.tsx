import { prisma } from "@repo/db";
import { Button } from "@repo/ui/button";

export default async function Home() {
  const users = await prisma.user.findMany()
  return (
    <>
    {JSON.stringify(users)}
    <h1>hiii</h1>
    <Button className="text-white bg-black" appName="apps/web">Submit</Button>
    </>
  );
}
// export const revalidate = 60 // revalidate every 60 seconds
// or
export const dynamic = 'force-dynamic'
