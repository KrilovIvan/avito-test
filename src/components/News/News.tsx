import { useEffect } from "react";
import s from "./News.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { GET_NEWS, time } from "../../helpers/constants";
import { getNewNews } from "../../api/news";
import NewCont from "./New/NewCont";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
function setIntervalImmediately(func: Function, interval: number): number {
  func();
  return setInterval(func, interval);
}
const News = () => {
  const newNewsId = useAppSelector((state) => state.newsReducer.newNewsId);
  const dispatch = useAppDispatch();
  const getGet = async () => {
    const data = await getNewNews();
    dispatch({ type: GET_NEWS, newNewsId: data?.data });
  };
  useEffect(() => {
    setIntervalImmediately(getGet, time);
    clearInterval(time);
  }, []);

  let newsSlice = newNewsId.slice(0, 100);

  return (
    <>
      <Button
        sx={{ position: "fixed" }}
        variant="contained"
        onClick={getGet}
        className={s.button}
      >
        Update
      </Button>
      <Stack spacing={[1]}>
        <NewCont newId={newsSlice} />
      </Stack>
    </>
  );
};

export default News;
