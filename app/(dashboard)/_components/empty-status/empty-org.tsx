import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function EmptyOrg() {
  return (
    <div className={"flex h-full flex-col items-center justify-center"}>
      <Image
        src={"./laptop.svg"}
        alt={"Empty Org"}
        width={200}
        height={200}
      />
      <h2 className={"mt-6 text-2xl font-semibold"}> Welcome to Wecollab! 🎉</h2>
            {/* <h2 className={"mt-1 max-w-xs text-center text-sm text-muted-foreground"}> Where you learn and collaborate!</h2> */}

      <p className={"mt-2 text-center text-sm text-muted-foreground"}>
   Lets start by creating your first WeCollab organisation.
</p>
      <div className={"mt-6"}>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Organization</Button>
          </DialogTrigger>
          <DialogContent hideClose hideModel className={"max-w-[480px]"}>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
