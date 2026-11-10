import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import type { ModuleData } from "@/app/aura/(docs)/data/modules/types";
import { CountryAvatar } from "@/components/avatar-country";
import { Badge } from "@/components/badge";
import { Card } from "@/components/card";

export const profileCard: ModuleData = {
  components: ["card", "avatar", "badge"],
  demo: (
    <Card className="flex items-center gap-3">
      <CountryAvatar code="DE" fallback="Chris Grabiński" size={4} src={avatarImage.src} />
      <div className="flex flex-col">
        <p className="flex items-baseline gap-1.5 text-base font-medium">
          Chris Grabiński
          <Badge size={1}>Admin</Badge>
        </p>
        <p className="text-sm text-neutral-500">mail@example.com</p>
      </div>
    </Card>
  ),
  description:
    "A compact card presenting user identity with avatar, name, role badge, and contact information.",
  name: "profile-card",
  title: "Profile Card",
};
