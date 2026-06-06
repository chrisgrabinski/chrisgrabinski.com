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
        "group/aura-logo relative aspect-192/64 h-[1.5em] saturate-150",
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
        viewBox="0 0 192 64"
        width="192"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Aura</title>
        <path
          clipRule="evenodd"
          d="M40 0C44.4183 0 48 3.58172 48 8V56C48 60.4183 44.4183 64 40 64C35.7199 64 32.2252 60.6389 32.0107 56.4121L31.9893 55.5879C31.7817 51.4976 28.5024 48.2183 24.4121 48.0107L24 48C19.7199 48 16.2252 51.3611 16.0107 55.5879L15.9893 56.4121C15.7748 60.6389 12.2801 64 8 64C3.58172 64 0 60.4183 0 56C0 51.7199 3.36114 48.2252 7.58789 48.0107L8.41211 47.9893C12.6389 47.7748 16 44.2801 16 40V24C16 19.7199 19.3611 16.2252 23.5879 16.0107L24.4121 15.9893C28.5024 15.7817 31.7817 12.5024 31.9893 8.41211L32.0107 7.58789C32.2252 3.36114 35.7199 0 40 0ZM32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24Z"
          fillRule="evenodd"
        />
        <path d="M96 16C100.418 16 104 19.5817 104 24V56C104 60.4183 100.418 64 96 64H80C75.7199 64 72.2252 60.6389 72.0107 56.4121L71.9893 55.5879C71.7817 51.4976 68.5024 48.2183 64.4121 48.0107L63.5879 47.9893C59.3611 47.7748 56 44.2801 56 40V24C56 19.5817 59.5817 16 64 16C68.4183 16 72 19.5817 72 24V40C72 44.4183 75.5817 48 80 48C84.4183 48 88 44.4183 88 40V24C88 19.5817 91.5817 16 96 16Z" />
        <path d="M136 16C140.418 16 144 19.5817 144 24C144 28.2801 140.639 31.7748 136.412 31.9893L135.588 32.0107C131.361 32.2252 128 35.7199 128 40V56C128 60.4183 124.418 64 120 64C115.582 64 112 60.4183 112 56V40C112 35.7199 115.361 32.2252 119.588 32.0107L120.412 31.9893C124.502 31.7817 127.782 28.5024 127.989 24.4121L128.011 23.5879C128.225 19.3611 131.72 16 136 16Z" />
        <path
          clipRule="evenodd"
          d="M168 16C172.28 16 175.775 19.3611 175.989 23.5879L176.011 24.4121C176.218 28.5024 179.498 31.7817 183.588 31.9893L184.412 32.0107C188.639 32.2252 192 35.7199 192 40V56C192 60.4183 188.418 64 184 64H168C163.72 64 160.225 60.6389 160.011 56.4121L159.989 55.5879C159.782 51.4976 156.502 48.2183 152.412 48.0107L151.588 47.9893C147.361 47.7748 144 44.2801 144 40C144 35.7199 147.361 32.2252 151.588 32.0107L152.412 31.9893C156.502 31.7817 159.782 28.5024 159.989 24.4121L160.011 23.5879C160.225 19.3611 163.72 16 168 16ZM168 32C163.582 32 160 35.5817 160 40C160 44.4183 163.582 48 168 48C172.418 48 176 44.4183 176 40C176 35.7199 172.639 32.2252 168.412 32.0107L168 32Z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export { AuraLogo };
