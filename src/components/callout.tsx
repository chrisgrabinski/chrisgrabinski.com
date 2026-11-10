import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangleIcon, CheckCircleIcon, InfoIcon, XCircleIcon, XIcon } from "lucide-react";
import type React from "react";
import { Card } from "@/components/card";
import { IconButton } from "@/components/icon-button";
import { cn } from "@/lib/styles";

const calloutVariants = cva("", {
  defaultVariants: {
    status: "info",
  },
  variants: {
    status: {
      error: "bg-red-800",
      info: "bg-blue-800",
      success: "bg-green-800",
      warning: "bg-yellow-800",
    },
  },
});

type CalloutVariants = VariantProps<typeof calloutVariants>;

type CalloutStatus = CalloutVariants["status"];

const CalloutIcon = ({
  status,
  ...props
}: React.ComponentProps<typeof InfoIcon> & { status: CalloutStatus }) => {
  switch (status) {
    case "error":
      return <XCircleIcon {...props} />;
    case "info":
      return <InfoIcon {...props} />;
    case "success":
      return <CheckCircleIcon {...props} />;
    case "warning":
      return <AlertTriangleIcon {...props} />;
    default:
      return <InfoIcon {...props} />;
  }
};

interface CalloutProps extends Omit<React.ComponentProps<"div">, "children">, CalloutVariants {
  description: string;
  title: string;
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
}

const Callout = ({
  className,
  description,
  status = "info",
  onDismiss,
  title,
  ...props
}: CalloutProps) => {
  return (
    <Card className={cn("flex gap-2", calloutVariants({ status }), className)} {...props}>
      <CalloutIcon className="size-6 shrink-0" status={status} />
      <div>
        <div className="text-pretty">{title}</div>
        <div className="mt-0.5 text-pretty text-foreground-muted">{description}</div>
      </div>
      {onDismiss && (
        <IconButton onClick={onDismiss} size={1} variant="ghost">
          <XIcon />
        </IconButton>
      )}
    </Card>
  );
};

export { Callout };
