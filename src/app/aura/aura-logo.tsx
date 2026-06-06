import auraLogo from "@/app/aura/aura-logo.svg";
import { cn } from "@/lib/styles";

interface GradientProps extends React.ComponentProps<"span"> {
  animated?: boolean;
}

export const Gradient = ({ animated, className, ...props }: GradientProps) => {
  return (
    <span
      className={cn("aura-gradient aura-gradient-animation", className)}
      {...props}
    />
  );
};

const AuraLogo = ({
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "children">) => {
  return (
    <div
      className={cn(
        "group/aura-logo relative aspect-208/64 h-[1.5em] saturate-150",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 blur-[0.75em] transition duration-500 group-hover/aura-logo:opacity-100">
        <Gradient
          className="mask-contain absolute inset-0"
          style={{ maskImage: `url(${auraLogo.src})` }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-75 blur-[0.5em] transition duration-400 group-hover/aura-logo:opacity-75">
        <Gradient
          className="mask-contain absolute inset-0"
          style={{ maskImage: `url(${auraLogo.src})` }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-75 blur-[0.125em] transition duration-300 group-hover/aura-logo:opacity-100">
        <Gradient
          className="mask-contain absolute inset-0"
          style={{ maskImage: `url(${auraLogo.src})` }}
        />
      </div>

      <svg
        className="absolute inset-0 size-full"
        fill="currentColor"
        height="64"
        viewBox="0 0 208 64"
        width="208"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M56 0C60.4183 0 64 3.58172 64 8V56C64 60.4183 60.4183 64 56 64C51.7199 64 48.2252 60.6389 48.0107 56.4121L47.9893 55.5879C47.7817 51.4976 44.5024 48.2183 40.4121 48.0107L40 48H24C19.7199 48 16.2252 51.3611 16.0107 55.5879L15.9893 56.4121C15.7748 60.6389 12.2801 64 8 64C3.58172 64 0 60.4183 0 56C0 51.7199 3.36114 48.2252 7.58789 48.0107L8.41211 47.9893C12.6389 47.7748 16 44.2801 16 40V24C16 19.5817 19.5817 16 24 16H40C44.2801 16 47.7748 12.6389 47.9893 8.41211L48.0107 7.58789C48.2252 3.36114 51.7199 0 56 0ZM40 24C35.5817 24 32 27.5817 32 32C32 36.4183 35.5817 40 40 40C44.4183 40 48 36.4183 48 32C48 27.5817 44.4183 24 40 24Z" />
        <path d="M112 16C116.418 16 120 19.5817 120 24V56C120 60.4183 116.418 64 112 64H96C91.7199 64 88.2252 60.6389 88.0107 56.4121L87.9893 55.5879C87.7817 51.4976 84.5024 48.2183 80.4121 48.0107L79.5879 47.9893C75.3611 47.7748 72 44.2801 72 40V24C72 19.5817 75.5817 16 80 16C84.4183 16 88 19.5817 88 24V40C88 44.4183 91.5817 48 96 48C100.418 48 104 44.4183 104 40V24C104 19.5817 107.582 16 112 16Z" />
        <path d="M152 16C156.418 16 160 19.5817 160 24C160 28.2801 156.639 31.7748 152.412 31.9893L151.588 32.0107C147.361 32.2252 144 35.7199 144 40V56C144 60.4183 140.418 64 136 64C131.582 64 128 60.4183 128 56V40C128 35.7199 131.361 32.2252 135.588 32.0107L136.412 31.9893C140.502 31.7817 143.782 28.5024 143.989 24.4121L144.011 23.5879C144.225 19.3611 147.72 16 152 16Z" />
        <path d="M184 16C188.28 16 191.775 19.3611 191.989 23.5879L192.011 24.4121C192.218 28.5024 195.498 31.7817 199.588 31.9893L200.412 32.0107C204.639 32.2252 208 35.7199 208 40V56C208 60.4183 204.418 64 200 64H184C179.72 64 176.225 60.6389 176.011 56.4121L175.989 55.5879C175.782 51.4976 172.502 48.2183 168.412 48.0107L167.588 47.9893C163.361 47.7748 160 44.2801 160 40C160 35.7199 163.361 32.2252 167.588 32.0107L168.412 31.9893C172.502 31.7817 175.782 28.5024 175.989 24.4121L176.011 23.5879C176.225 19.3611 179.72 16 184 16ZM184 32C179.582 32 176 35.5817 176 40C176 44.4183 179.582 48 184 48C188.418 48 192 44.4183 192 40C192 35.7199 188.639 32.2252 184.412 32.0107L184 32Z" />
      </svg>
    </div>
  );
};

export { AuraLogo };
