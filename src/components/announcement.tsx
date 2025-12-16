import { type LucideIcon, XIcon } from "lucide-react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { IconBox } from "@/components/icon-box";
import { IconButton } from "@/components/icon-button";

const messages = {
  close: "Close",
} as const;

type AnnouncementProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonLabel: string;
  onClick?: () => void;
  onClose?: () => void;
};

const Announcement = ({
  title,
  description,
  icon: Icon,
  buttonLabel,
  onClick,
  onClose,
}: AnnouncementProps) => {
  return (
    <Card className="flex items-center gap-3 p-4 shadow-lg" variant="glass">
      <IconBox className="shrink-0 self-start">
        <Icon />
      </IconBox>
      <div className="flex items-center gap-6">
        <div>
          <div className="font-medium text-sm">{title}</div>
          <div className="text-neutral-600 text-sm">{description}</div>
        </div>
        <Button className="shrink-0" onClick={onClick} size={2}>
          {buttonLabel}
        </Button>
      </div>

      <IconButton
        aria-label={messages.close}
        className="shrink-0"
        onClick={onClose}
        size={2}
        variant="ghost"
      >
        <XIcon />
      </IconButton>
    </Card>
  );
};

export { Announcement };
