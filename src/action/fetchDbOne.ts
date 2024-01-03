//@ts-nocheck

import { connectDb } from "@/lib/connectDb"
import prisma from "@/lib/db"

const fetchDB = async()=>{
console.log("ok")
    await connectDb()
    const DBONE = await prisma.database.findMany({
        where: {
          PRODUCT: "SCARF-SCARF 125-BLUE-OS"
        },
      });
    return DBONE
    
}

export default fetchDB