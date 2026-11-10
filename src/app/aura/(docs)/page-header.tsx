import { BlurContainer } from "@/app/aura/blur-container";
import { AppShellPanelToggle } from "@/components/app-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";

const PageHeader = ({
  breadcrumbs,
}: {
  breadcrumbs?: React.ComponentProps<typeof Breadcrumbs>["items"];
}) => {
  return (
    <div className="sticky top-0 z-10">
      <div className="relative z-10 flex h-16 items-center gap-4 px-2">
        <AppShellPanelToggle className="*:size-5" />
        {breadcrumbs && <Breadcrumbs includeJsonLd items={breadcrumbs} />}
      </div>
      <BlurContainer className="absolute inset-0" direction="bottom" />
    </div>
  );
};

export { PageHeader };
