import { css, useTheme } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";

// types
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { HasChildrenParagraph } from "@types";
import type { Theme } from "@emotion/react";

import RichText from "./RichText";

interface Props {
  block: ParagraphBlockObjectResponse | HasChildrenParagraph;
  depth: number;
}

const paragraph = (theme: Theme) => css`
  margin-bottom: 0.25rem;
  color: ${theme.text};
  font-size: 1rem;
`;

const Paragraph = ({ block, depth }: Props) => {
  const theme = useTheme();

  return (
    <div>
      <p css={paragraph(theme)}>
        <RichText richText={block.paragraph.rich_text} />
      </p>
      {"children" in block.paragraph && (
        <NotionRenderer blocks={block.paragraph.children} />
      )}
    </div>
  );
};

export default Paragraph;
