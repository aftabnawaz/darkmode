import { useEffect } from "react";
import useLocalStorage from "./use-local-storage";

function useDarkMode() {  
  const defaultDarkMode = false;
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode");    
  const enabled = typeof enabledState !== "undefined" ? enabledState : defaultDarkMode;

  useEffect(
    () => {
      const className = "dark-mode";
      const element = window.document.body;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled]
  );
  return [enabled, setEnabledState];
}

export default useDarkMode;
