"use client";

import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "./snippet";
import { useState } from "react";

type Command = {
  label: string;
  code: string;
};

function SnippetTemplate(props: { commands: Command[] }) {
  const [value, setValue] = useState(props.commands[0].label);
  const activeCommand = props.commands.find((command) => command.label === value);

  return (
    <Snippet onValueChange={setValue} value={value}>
      <SnippetHeader>
        <SnippetTabsList>
          {props.commands.map((command) => (
            <SnippetTabsTrigger key={command.label} value={command.label}>
              {command.label}
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        {activeCommand && (
          <SnippetCopyButton
            onCopy={() =>
              console.log(`Copied "${activeCommand.code}" to clipboard`)
            }
            onError={() =>
              console.error(
                `Failed to copy "${activeCommand.code}" to clipboard`
              )
            }
            value={activeCommand.code}
          />
        )}
      </SnippetHeader>
      {props.commands.map((command) => (
        <SnippetTabsContent key={command.label} value={command.label}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
};

export default SnippetTemplate;
