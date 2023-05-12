import { useRedirectTo } from 'utils/utils';
import React from "react";

interface Props {
  path: string;
  children: React.ReactNode;
}

function RedirectButton({ path, children }: Props) {
  const redirectTo = useRedirectTo();

  function handleButtonClick() {
    redirectTo(path);
  }

  return (
    <button onClick={handleButtonClick}>
      {children}
    </button>
  );
}

export default RedirectButton;
