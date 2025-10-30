import PostList from "@/components/post-list"
import PostCard from "@/components/post-card"
import Profile from "@/components/profile"
import SnippetTemplate from "./base"

export default function Home() {
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
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Posts from Nathan Colosimo
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
              Post from Nathan Colosimo
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
              Nathan Colosimo Profile
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Profile handle={"nathancolosimo"} />
          </div>
          <SnippetTemplate commands={PROFILE_SNIPPET} />
        </div>
      </main>
    </div>
  )
}
