"use client";

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockItem,
  type CodeBlockProps,
  type BundledLanguage,
} from "./kibo-ui/code-block";

type CodeSampleProps = {
  /**
   * Pre-highlighted files rendered inside the code block. The first entry controls the default tab.
   */
  data: CodeBlockProps["data"];
  /**
   * Short label displayed in the header next to the copy button.
   */
  title?: string;
};

export function CodeSample({
  data,
  title = "Usage example",
}: CodeSampleProps) {
  if (!data.length) {
    return null;
  }

  const defaultLanguage = data[0]?.language ?? "";

  return (
    <CodeBlock
      className="flex flex-col"
      data={data}
      defaultValue={defaultLanguage}
    >
      <CodeBlockHeader className="flex items-center justify-between px-4 py-2">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
        <CodeBlockCopyButton className="h-7 w-7" />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(file) => (
          <CodeBlockItem key={file.filename} value={file.language}>
            <CodeBlockContent language={file.language as BundledLanguage}>
              {file.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
}

export default CodeSample;
