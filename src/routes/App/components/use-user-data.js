import { useEffect , useState} from "react";
import useLocalStorage from "./use-local-storage";

function useUserData() {
  const [userData, setUserData] =  useLocalStorage("user-data");
  const data = typeof userData !== "undefined" ? userData : "";
  
  useEffect(
    () => {
      window.localStorage.setItem("user-data", JSON.stringify(data));
    },
    [data]
  );
  return [data, setUserData];
}

export default useUserData;
