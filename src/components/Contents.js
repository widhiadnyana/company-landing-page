import HomeCarousel from "./HomeCarousel";
import { useEffect, useState } from "react";

const Contents = (id) => {
  const [page, setPage] = useState();

  useEffect(() => {
    setPage(id);
  }, []);

  return page;
};

export default Contents;
