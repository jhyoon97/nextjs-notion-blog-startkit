import { css } from "@emotion/react";
import React, { useState } from "react";

// components
import NotionRenderer from "components/NotionRenderer";
import Spacer from "components/Spacer";
import { BiCaretRight } from "react-icons/bi";

// types
import type { HasChildrenBlockObject } from "@types";
import type { Theme } from "@emotion/react";

interface Props {
  childrenBlocks?: Array<HasChildrenBlockObject>;
  isToggleable?: boolean;
  depth: number;
  children: React.ReactNode;
}

const box = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const titleRow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const toggleButton = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 3px;

  & > svg {
    transition: transform 0.3s;
  }

  &:hover {
    background: ${theme.hoverBackground};
  }
`;

const childrenBox = css`
  margin-left: 2rem;
`;

const ToggleBlock = ({
  childrenBlocks,
  isToggleable,
  depth,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={box}>
      <div css={titleRow}>
        {isToggleable && (
          <button
            type="button"
            css={toggleButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BiCaretRight
              size="20"
              style={{
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </button>
        )}

        {children}
      </div>

      {childrenBlocks && isToggleable && isOpen && (
        <div css={childrenBox}>
          <Spacer />
          <NotionRenderer blocks={childrenBlocks} depth={depth} />
        </div>
      )}
    </div>
  );
};

export default ToggleBlock;