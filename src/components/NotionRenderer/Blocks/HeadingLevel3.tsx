import styled from "styled-components";
import { useAtom } from "jotai";

import utils from "@/utils";
import { tableOfContentsAtom } from "@/atoms/tableOfContents";

import type { HasChildrenToggleableHeading3 } from "@/types/notion";

import ToggleOuter from "../common/components/ToggleOuter";
import RichText from "../common/components/RichText";
import InlineCopyButton from "../common/components/InlineCopyButton";
import { commonBox } from "../common/styles";

interface Props {
  block: HasChildrenToggleableHeading3;
  depth: number;
}

const Wrapper = styled.div`
  ${commonBox}
  position: relative;
  margin: 2rem 0 1rem;
  font-size: 1.2rem;

  &:hover .inline-copy-button {
    display: block;
  }
`;

const Heading = styled.h5`
  flex: 1;
  font-weight: bold;
`;

const Anchor = styled.div`
  display: hidden;
  position: relative;
  top: -90px;
`;

const HeadingLevel3 = ({ block, depth }: Props) => {
  // 헤더에서 h1태그, 타이틀에서 h2 태그 사용중이므로 h5태그 사용
  const [tableOfContents] = useAtom(tableOfContentsAtom);
  const hash = utils.convertCleanedText(
    block.heading_3.rich_text.map((item) => item.plain_text).join("")
  );

  return (
    <Wrapper>
      {tableOfContents.some((item) => item.id === block.id) && (
        <InlineCopyButton hash={hash} />
      )}
      <Anchor id={hash} />
      <ToggleOuter
        childrenBlocks={block.heading_3.children}
        isToggleable={block.heading_3.is_toggleable}
        depth={depth}
      >
        <Heading>
          <RichText richText={block.heading_3.rich_text} />
        </Heading>
      </ToggleOuter>
    </Wrapper>
  );
};

export default HeadingLevel3;
