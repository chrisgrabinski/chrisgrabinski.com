import Link from "next/link";

import avatar from "@/app/(homepage)/images/chris-grabinski.jpg";
import { AuraLogo } from "@/app/aura/aura-logo";
import { Navigation } from "@/app/aura/navigation";
import { AgentRing } from "@/components/agent-ring";
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
        <Link className="group" href="/">
          <Card className="flex items-center gap-3 overflow-visible p-3">
            <div className="relative flex">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-full opacity-0 transition duration-300 group-hover:opacity-100">
                <AgentRing animated glow />
              </div>
              <Avatar fallback="Chris Grabinski" size={3} src={avatar.src} />
            </div>
            <div>
              <p className="text-neutral-600 text-sm">Created by</p>
              <p className="duraiton-300 font-medium text-sm transition group-hover:text-pink-500">
                Chris Grabiński
              </p>
            </div>
          </Card>
        </Link>
      </footer>
    </div>
  );
};
