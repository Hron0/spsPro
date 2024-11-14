'use server'
import { getServerSession } from "@/lib/data/auth"
import { signOut } from "../../auth"
import { Button } from '@/components/ui/button';


const page = async () => {
  const session = await getServerSession()

  console.log(session?.user)

  return (
    <div className="flex flex-col gap-4">
        <h1 className='white text-3xl'>
            {session?.user.email}
            ball
        </h1>
        <form 
        action={async () => {
          "use server"
          await signOut()
        }}>
          <Button variant="secondary">Sign Out</Button>
        </form>
    </div>
  )
}

export default page