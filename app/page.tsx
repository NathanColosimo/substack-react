import PostList from "@/components/post-list";
import PostCard from "@/components/post-card";
import Profile from "@/components/profile";
import SnippetTemplate from "./base";
import { cacheLife } from "next/cache";

export default async function Home() {
  'use cache';
  cacheLife("days");
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

  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Substack React Registry, by <a href="https://nathancolosimo.com" target="_blank" rel="noopener noreferrer" className="underline">Nathan Colosimo</a>
        </h1>
        <p className="text-muted-foreground">
          A registry for displaying Substack posts and profiles, built with
          React and Shadcn.
        </p>
        <p className="text-muted-foreground">
          Use the snippets below to add the components to your project.
        </p>
        <p className="text-muted-foreground">
          For more information, see the{" "}
          <a
            href="https://github.com/nathancolosimo/substack-react"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub repo
          </a>
          .
        </p>
        <br />
        <strong>Simple features and design:</strong>
        <ul>
          <li>
            - Fetch-based api and zod-based validation for server & client
            compatability, no abstracted api or npm packages.
          </li>
          <li>- Customizable components based on Shadcn UI components.</li>
          <li>
            - Minimal dependencies, just shadcn, lucide-react, and zod. Easily
            replaceable with your own icons or validators.
          </li>
        </ul>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              {"Posts from Nathan Colosimo - <PostList profileHandle=\"nathancolosimo\" />"}
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PostList profileHandle="nathancolosimo" />
          </div>
          <SnippetTemplate commands={POST_LIST_SNIPPET} />
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              {"Post from Nathan Colosimo - <PostCard postId={150198789} />"}
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PostCard postId={150198789} />
          </div>
          <SnippetTemplate commands={POST_CARD_SNIPPET} />
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              {"Nathan Colosimo Profile - <Profile handle=\"nathancolosimo\" />"}
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Profile handle={"nathancolosimo"} />
          </div>
          <SnippetTemplate commands={PROFILE_SNIPPET} />
        </div>
      </main>
    </div>
  );
}
