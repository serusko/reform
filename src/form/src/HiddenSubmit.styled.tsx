import { FC } from "react";
import styled from "@emotion/styled";

const C: FC<{ className?: string; formId?: string }> = ({
  className,
  formId,
}) => (
  <button className={className} type="submit">
    Submit {formId}
  </button>
);

export const HiddenSubmit = styled(C)`
  position: absolute;
  overflow: hidden;
  border: none;
  padding: 0;
  height: 0;
  width: 0;
`;
