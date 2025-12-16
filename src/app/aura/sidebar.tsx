import Link from "next/link";

import avatar from "@/app/(homepage)/images/chris-grabinski.jpg";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Navigation } from "@/app/aura/navigation";
import { Avatar } from "@/components/avatar";
import { Card } from "@/components/card";
import { ScrollArea } from "@/components/scroll-area";

export const Sidebar = () => {
  return (
    <div className="sticky top-0 flex h-dvh w-64 shrink-0 flex-col border-neutral-300 border-r">
      <header className="px-4 py-6">
        <Link href="/aura">
          <AuraLogo className="text-2xl" />
        </Link>
      </header>
      <ScrollArea className="flex-1 p-2">
        <Navigation />
      </ScrollArea>
      <footer className="p-4">
        <Link href="/">
          <Card className="relative flex items-center gap-3 overflow-visible bg-neutral-900 p-3 text-neutral-50">
            <Avatar fallback="Chris Grabinski" size={3} src={avatar.src} />
            <div>
              <p className="font-medium text-sm">Created by</p>
              <p className="text-sm">Chris Grabiński</p>
            </div>
          </Card>
        </Link>
      </footer>
    </div>
  );
};
