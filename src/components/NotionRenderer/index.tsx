import { css } from "@emotion/react";

// types
import type { HasChildrenBlockObject } from "@types";

import HeadingLevel1 from "./HeadingLevel1";
import HeadingLevel2 from "./HeadingLevel2";
import HeadingLevel3 from "./HeadingLevel3";
import Code from "./Code";
import Image from "./Image";
import Paragraph from "./Paragraph";

interface Props {
  blocks: HasChildrenBlockObject[];
  depth?: number;
}

const box = (depth: number) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: ${depth * 1}rem;
  width: 100%;
`;

const NotionRenderer = ({ blocks, depth = 1 }: Props) => {
  return (
    <div css={box(depth)}>
      {blocks.map((block) =>
        (() => {
          switch (block.type) {
            case "heading_1":
              return <HeadingLevel1 key={block.id} block={block} />;
            case "heading_2":
              return <HeadingLevel2 key={block.id} block={block} />;
            case "heading_3":
              return <HeadingLevel3 key={block.id} block={block} />;
            case "code":
              return <Code key={block.id} block={block} />;
            case "image":
              return <Image key={block.id} block={block} />;
            case "paragraph":
              return <Paragraph key={block.id} block={block} depth={depth} />;
            case "bulleted_list_item":
              return "<<bulleted_list_item>>";
            case "numbered_list_item":
              return "<<numbered_list_item>>";
            case "link_preview":
              return "<<link_preview>>";
            case "bookmark":
              return "<<bookmark>>";
            default:
              return null;
          }
        })()
      )}
    </div>
  );
};

export default NotionRenderer;
