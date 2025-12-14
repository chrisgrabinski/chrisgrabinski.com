import Image from "next/image";
import { AuraCard } from "@/app/(homepage)/components/aura-card";
import { RemoteLogo } from "@/app/(homepage)/components/remote-logo";
import { SpotifyStatus } from "@/app/(homepage)/components/spotify-status";
import { TypeformLogo } from "@/app/(homepage)/components/typeform-logo";
import { UnbabelLogo } from "@/app/(homepage)/components/unbabel-logo";
import avatar from "@/app/(homepage)/images/chris-grabinski.jpg";
import texture from "@/app/(homepage)/images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg";
import { GitHubIcon } from "@/icons/github";
import { InstagramIcon } from "@/icons/instagram";
import { LinkedInIcon } from "@/icons/linkedin";
import { ThreadsIcon } from "@/icons/threads";
import { XIcon } from "@/icons/x";

const profiles = [
  {
    href: "https://github.com/chrisgrabinski",
    icon: GitHubIcon,
    name: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/chrisgrabinski/",
    icon: LinkedInIcon,
    name: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/chrisgrabinski/",
    icon: InstagramIcon,
    name: "Instagram",
  },
  {
    href: "https://www.threads.net/@chrisgrabinski",
    icon: ThreadsIcon,
    name: "Threads",
  },
  {
    href: "https://twitter.com/chrisgrabinski",
    icon: XIcon,
    name: "X",
  },
];

export default function RootPage() {
  return (
    <>
      {/* <UkraineBanner /> */}
      <div className="isolate grid grow grid-cols-[24px_repeat(6,1fr)_24px] grid-rows-[48px_auto_repeat(2,24px)_auto] items-center md:grid-cols-[auto_repeat(6,minmax(0px,144px))_auto] md:grid-rows-none md:gap-6">
        <div className="relative z-10 col-start-2 col-end-6 row-start-2 row-end-3 pt-6 md:col-start-5 md:col-end-8 md:row-start-1 md:row-end-auto md:py-6">
          <Image alt="" src={avatar} />
        </div>
        <div className="z-10 col-start-2 col-end-8 row-start-4 row-end-6 pb-6 md:col-start-2 md:col-end-5 md:row-start-1 md:row-end-auto md:py-6">
          <h1 className="text-5xl sm:text-6xl">
            Chris
            <br /> Grabiński
          </h1>
          <p className="mt-3 text-2xl text-foreground-muted">
            Frontend Engineer
          </p>
          <p className="whitespace-balance mt-3 text-lg">
            Working with product teams to deliver beautiful, user‑friendly, and
            goal‑driven web experiences.
          </p>
          <p className="mt-6 text-foreground-muted text-xs">Worked with</p>
          <ul className="mt-3 flex items-center gap-6">
            <li>
              <RemoteLogo className="h-5" />
            </li>
            <li>
              <TypeformLogo className="h-5" />
            </li>
            <li>
              <UnbabelLogo className="h-6" />
            </li>
          </ul>
          <ul className="mt-12 flex gap-1.5">
            <SpotifyStatus />
            {profiles.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  aria-label={name}
                  className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background outline-0 outline-transparent outline-offset-[3px] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-foreground-muted"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <AuraCard />
        </div>
        <div className="relative col-start-4 col-end-9 row-start-1 row-end-5 h-full w-full overflow-clip md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-auto md:min-h-dvh">
          <Image
            alt=""
            className="absolute size-full scale-105 object-cover"
            src={texture}
            style={{ filter: "url(#flow)" }}
          />
          <svg aria-hidden className="pointer-events-none absolute">
            <title>Noise</title>
            <filter id="noise">
              <feTurbulence baseFrequency="0.05" />
              <feColorMatrix type="hueRotate" values="0">
                <animate
                  attributeName="values"
                  dur="5s"
                  from="0"
                  repeatCount="indefinite"
                  to="360"
                />
              </feColorMatrix>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0
               0 0 0 0 0
               0 0 0 0 0
               1 0 0 0 0"
              />
              <feDisplacementMap in="SourceGraphic" scale="10" />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              height="100%"
              id="flow"
              width="100%"
              x="0"
              y="0"
            >
              <feTurbulence
                baseFrequency="0.05 0.1"
                id="turbulence"
                numOctaves="3"
                seed="2"
              />
              <feDisplacementMap in="SourceGraphic" scale="20" />
              <animate
                attributeName="baseFrequency"
                dur="60s"
                keyTimes="0;0.5;1"
                repeatCount="indefinite"
                values="0.05 0.1;0.1 0.05;0.05 0.1"
                xlinkHref="#turbulence"
              />
            </filter>
          </svg>
        </div>
      </div>
    </>
  );
}
