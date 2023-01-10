import { useEffect, useState } from "react";

export default function useIntialRender() {
  const [isFirst, setFirst] = useState(true);
  useEffect(() => {
    setFirst(false);
  }, [isFirst]);
  return isFirst;
}
