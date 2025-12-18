import { ShoppingBagIcon } from "lucide-react";
import { Announcement } from "@/components/announcement";

const name = "announcement";

const components = ["announcement", "icon-box", "button"];

const Component = () => {
  return (
    <Announcement
      buttonLabel="Try it"
      description="Lean back and enjoy a cup of hot cocoa while our agent finds the best gifts."
      icon={ShoppingBagIcon}
      title="Shop smarter this season"
    />
  );
};

export const AnnouncementDemo = {
  Component,
  components,
  name,
};
