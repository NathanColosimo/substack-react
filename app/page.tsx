import PostList from "@/components/post-list";
import PostCard from "@/components/post-card";
import Profile from "@/components/profile";
import CodeSample from "../components/utils-code-block";
import type { ReactNode } from "react";
import SnippetTemplate from "./base";
import { Suspense } from "react";

type DemoSectionProps = {
  /**
   * Title shown above each live example so visitors can quickly scan the registry surface.
   */
  title: string;
  /**
   * One-line description that explains what problem the showcased component solves.
   */
  description: string;
  /**
   * Installation commands rendered via `SnippetTemplate` for copy-paste convenience.
   */
  commands: { label: string; code: string }[];
  /**
   * Optional helper text for extra guidance (for example, prop tips or behaviour notes).
   */
  helper?: string;
  /**
   * The rendered demo, typically a registry component instance.
   */
  children: ReactNode;
};

function DemoSection(props: DemoSectionProps) {
  return (
    <section className="flex flex-col gap-6 rounded-xl border bg-card/30 p-6">
      <div className="space-y-2">
        <h2 className="text-base font-semibold leading-none tracking-tight">
          {props.title}
        </h2>
        <p className="text-sm text-muted-foreground">{props.description}</p>
        {props.helper ? (
          <p className="text-xs text-muted-foreground/80">{props.helper}</p>
        ) : null}
      </div>
      <div className="flex min-h-[360px] items-center justify-center rounded-lg border bg-background p-6">
        {props.children}
      </div>
      <SnippetTemplate commands={props.commands} />
    </section>
  );
}

export default async function Home() {
  const POST_LIST_SNIPPET = [
    {
      label: "pnpm",
      code: "pnpm dlx shadcn@latest add https://substack-react.nathancolosimo.com/r/post-list.json",
    },
    {
      label: "npm",
      code: "npx shadcn@latest add https://substack-react.nathancolosimo.com/r/post-list.json",
    },
  ];

  const PROFILE_SNIPPET = [
    {
      label: "pnpm",
      code: "pnpm dlx shadcn@latest add https://substack-react.nathancolosimo.com/r/profile.json",
    },
    {
      label: "npm",
      code: "npx shadcn@latest add https://substack-react.nathancolosimo.com/r/profile.json",
    },
  ];

  const POST_CARD_SNIPPET = [
    {
      label: "pnpm",
      code: "pnpm dlx shadcn@latest add https://substack-react.nathancolosimo.com/r/post-card.json",
    },
    {
      label: "npm",
      code: "npx shadcn@latest add https://substack-react.nathancolosimo.com/r/post-card.json",
    },
  ];

  const POST_UTILS_SNIPPET = [
    {
      label: "pnpm",
      code: "pnpm dlx shadcn@latest add https://substack-react.nathancolosimo.com/r/post-utils.json",
    },
    {
      label: "npm",
      code: "npx shadcn@latest add https://substack-react.nathancolosimo.com/r/post-utils.json",
    },
  ];

  const PROFILE_UTILS_SNIPPET = [
    {
      label: "pnpm",
      code: "pnpm dlx shadcn@latest add https://substack-react.nathancolosimo.com/r/profile-utils.json",
    },
    {
      label: "npm",
      code: "npx shadcn@latest add https://substack-react.nathancolosimo.com/r/profile-utils.json",
    },
  ];

  const registryCatalog = [
    {
      name: "Post List",
      summary:
        "Fetches the latest posts for a Substack profile and renders them with Shadcn Item primitives.",
    },
    {
      name: "Post Card",
      summary:
        "Server component for showcasing a single post — delegates UI to PostCardDisplay.",
    },
    {
      name: "Post Card Display",
      summary:
        "Presentational card that accepts a parsed post object. Bring your own data source.",
    },
    {
      name: "Profile",
      summary:
        "Server component that looks up a public Substack profile and passes it to ProfileDisplay.",
    },
    {
      name: "Profile Display",
      summary:
        "Display-only profile layout with avatar, cover, and subscribe call-to-action.",
    },
    {
      name: "Post & Profile Utils",
      summary:
        "Zod-backed fetch helpers for posts, publications, and profile metadata.",
    },
  ] as const;

  const PROFILE_UTILS_USAGE = `import { profileForHandle } from "@/lib/profile";

async function loadProfile() {
  // Fetch the author profile once so you can share the id across other helpers.
  const profile = await profileForHandle("nathancolosimo");

  return { profile };
}`;

  const POST_UTILS_USAGE = `import {
    postForId,
    publicationPostsForURL,
    userPostsForId,
  } from "@/lib/posts";
import { profileForHandle } from "@/lib/profile";

async function loadPosts() {
  // Fetch the author profile once so you can share the id across other helpers.
  const profile = await profileForHandle("nathancolosimo");

  // Pull the ten latest posts for dashboards or newsletters.
  const latestPosts = await userPostsForId(profile.id, { limit: 10 });

  // Hydrate a hero card with a specific post id.
  const featurePost = await postForId(latestPosts[0]?.id ?? 0);

  // Reuse publication data for landing pages, sorted newest-first by default.
  const publicationPosts = await publicationPostsForURL(
    "https://nathancolosimo.substack.com",
    { limit: 5 }
  );

  return { profile, latestPosts, featurePost, publicationPosts };
}
`;

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col gap-12 px-4 py-10">
      <header className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Substack React Registry, by <a href="https://nathancolosimo.com" target="_blank" rel="noopener noreferrer" className="underline">Nathan Colosimo</a>
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Minimal primitives for Substack content in React.
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Built with the Shadcn component model and Zod validation so you can wire up Substack posts,publications, and profiles without bespoke SDKs. Install only what you need using the snippets below, or explore the full registry on
            <a
              className="ml-1 underline"
              href="https://github.com/nathancolosimo/substack-react"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <section className="rounded-xl border bg-card/20 p-6">
          <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Registry Overview
          </h2>
          <dl className="mt-5 grid gap-4 md:grid-cols-2">
            {registryCatalog.map((entry) => (
              <div key={entry.name} className="space-y-1">
                <dt className="text-sm font-semibold">{entry.name}</dt>
                <dd className="text-sm text-muted-foreground">
                  {entry.summary}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </header>
      <main className="flex flex-col gap-10 pb-10">
        <DemoSection
          commands={POST_LIST_SNIPPET}
          description="Async server component that pulls the latest Substack posts for a handle and renders them with Item primitives."
          helper="Tip: Pair with Post Utils to hydrate list views on the server or in RSC routes."
          title="PostList"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <PostList profileHandle="nathancolosimo" />
          </Suspense>
        </DemoSection>

        <DemoSection
          commands={POST_CARD_SNIPPET}
          description="Look up a single post by id and display it using the shared PostCardDisplay layout."
          helper="Pass any integer Substack post id, or prefetch the post and use PostCardDisplay directly."
          title="PostCard"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <PostCard postId={150198789} />
          </Suspense>
        </DemoSection>

        <DemoSection
          commands={PROFILE_SNIPPET}
          description="Resolve a public Substack handle and present a card layout with cover, avatar, and link actions."
          helper="Need finer control? Install ProfileDisplay for a presentation-only version."
          title="Profile"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Profile handle="nathancolosimo" />
          </Suspense>
        </DemoSection>

        <section className="flex flex-col gap-6 rounded-xl border bg-card/20 p-6">
          <div className="space-y-2">
            <h2 className="text-base font-semibold tracking-tight">
              Backend utilities
            </h2>
            <p className="text-sm text-muted-foreground">
              These helpers mirror the `registry.json` entries for `post-utils`
              and `profile-utils`. Each function performs a fetch to Substack
              and validates the payload with Zod so downstream components
              receive typed data.
            </p>
          </div>
          <div className="rounded-lg border bg-background">
            <CodeSample
              data={[
                {
                  code: PROFILE_UTILS_USAGE,
                  filename: "app/(routes)/substack-demo/actions.ts",
                  language: "typescript",
                },
              ]}
              title="Profile Utils Usage"
            />
          </div>
          <SnippetTemplate commands={PROFILE_UTILS_SNIPPET} />

          <div className="rounded-lg border bg-background">
            <CodeSample
              data={[
                {
                  code: POST_UTILS_USAGE,
                  filename: "app/(routes)/substack-demo/actions.ts",
                  language: "typescript",
                },
              ]}
              title="Post Utils Usage"
            />
          </div>
          <SnippetTemplate commands={POST_UTILS_SNIPPET} />
        </section>
      </main>
    </div>
  );
}
