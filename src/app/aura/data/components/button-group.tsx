import { CopyIcon, ScissorsIcon, UserIcon } from "lucide-react";
import type { ComponentData } from "@/app/aura/data/components/types";
import { ButtonGroupItem, ButtonGroupRoot } from "@/components/button-group";

export const buttonGroup: ComponentData = {
  demo: (
    <ButtonGroupRoot>
      <ButtonGroupItem>
        <ScissorsIcon />
        Cut
      </ButtonGroupItem>
      <ButtonGroupItem>
        <CopyIcon />
        Copy
      </ButtonGroupItem>
      <ButtonGroupItem>
        <UserIcon />
        Me
      </ButtonGroupItem>
    </ButtonGroupRoot>
  ),
  description:
    "Groups related buttons into a connected control that shares size and variant.",
  name: "button-group",
  sourceUrl:
    "https://github.com/chrisgrabinski/chrisgrabinski.com/blob/main/src/components/button-group.tsx",
  title: "Button Group",
  variants: [
    {
      demo: (
        <ButtonGroupRoot variant="outline">
          <ButtonGroupItem>
            <ScissorsIcon />
            Cut
          </ButtonGroupItem>
          <ButtonGroupItem>
            <CopyIcon />
            Copy
          </ButtonGroupItem>
          <ButtonGroupItem>
            <UserIcon />
            Me
          </ButtonGroupItem>
        </ButtonGroupRoot>
      ),
      title: "Outline",
    },
  ],
};
