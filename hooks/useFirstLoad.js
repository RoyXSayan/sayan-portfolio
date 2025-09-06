// hooks/useFirstLoad.js
import { useEffect, useState } from "react";

export default function useFirstLoad() {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      setFirstLoad(true);
    }
  }, []);

  return firstLoad;
}
