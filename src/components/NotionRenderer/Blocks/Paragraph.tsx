import { css } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";
import RichText from "components/NotionRenderer/RichText";
import { blockBox } from "components/NotionRenderer/commonStyles";

// types
import type { HasChildrenParagraph } from "@types";
import type { Theme } from "@emotion/react";

interface Props {
  block: HasChildrenParagraph;
  depth: number;
}

const box = (theme: Theme) => css`
  margin-bottom: 0.25rem;
  color: ${theme.text};
  font-size: 1rem;
`;

const Paragraph = ({ block, depth }: Props) => {
  return (
    <>
      <p css={[blockBox, box]}>
        <RichText richText={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <NotionRenderer blocks={block.paragraph.children} depth={depth + 1} />
      )}
    </>
  );
};

export default Paragraph;