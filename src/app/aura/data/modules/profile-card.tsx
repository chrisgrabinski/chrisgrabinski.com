import avatarImage from "@/app/(homepage)/images/chris-grabinski.jpg";
import type { ModuleData } from "@/app/aura/data/modules/types";
import { CountryAvatar } from "@/components/avatar-country";
import { Badge } from "@/components/badge";
import { Card } from "@/components/card";

export const profileCard: ModuleData = {
  components: ["card", "avatar", "badge"],
  demo: (
    <Card className="flex items-center gap-3">
      <CountryAvatar
        code="DE"
        fallback="Chris Grabiński"
        size={4}
        src={avatarImage.src}
      />
      <div className="flex flex-col">
        <p className="flex items-baseline gap-1.5 font-medium text-base">
          Chris Grabiński
          <Badge size={1}>Admin</Badge>
        </p>
        <p className="text-neutral-500 text-sm">mail@example.com</p>
      </div>
    </Card>
  ),
  description: "A card for displaying a user's profile information.",
  name: "profile-card",
  title: "Profile Card",
};
