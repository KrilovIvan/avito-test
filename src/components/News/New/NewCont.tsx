import { useEffect } from "react";
import { getNews } from "../../../api/news";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { GET_NEW, SET_IS_LOADING } from "../../../helpers/constants";
import New from "./New";
import { CircularProgress } from "@mui/material";
import { IItem } from "../../../helpers/interfaces";
interface NewProps {
  newId: number[];
}

const NewCont = (props: NewProps) => {
  const newData = useAppSelector((state) => state.newsReducer.newData);
  const isLoading = useAppSelector((state) => state.newsReducer.isLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      dispatch({ type: SET_IS_LOADING, isLoading: true });
      const data = await getNews(props.newId);
      dispatch({ type: GET_NEW, newData: data });
      dispatch({ type: SET_IS_LOADING, isLoading: false });
    })();
  }, [props.newId]);

  newData.sort(function (a: IItem, b: IItem) {
    return b.time - a.time;
  });
  let showNew = newData.map((el) => {
    if (el === undefined) {
      return;
    }
    return <New newData={el} key={el.id} />;
  });

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        showNew
      )}
    </>
  );
};

export default NewCont;
