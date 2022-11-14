import { Card, CardContent, Typography, Link } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import s from "./NewsPage.module.css";
import Comments from "./Comments/Comments";
import { getComment } from "../../api/news";
import { useState } from "react";
import { IItem } from "../../helpers/interfaces";
import { toDateNorm } from "../../helpers/functions";
interface IId {
  id: string;
}
const NewsPage = () => {
  const newData = useAppSelector((state) => state.newsReducer.newData);
  const id: IId = useParams();
  const history = useHistory();

  let idnum = parseInt(id.id);
  const [news, setNews] = useState(
    newData.find((item: IItem) => item.id === idnum)
  );

  let dateNorm = toDateNorm(news?.time);
  return (
    <>
      <div className={s.buttons}>
        <Button
          variant="contained"
          onClick={() => {
            let path = `/`;
            history.push(path);
          }}
          className={s.toMainButton}
        >
          To main
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            (async () => {
              if (!news?.id) return;
              let data = await getComment(news?.id);
              setNews(data?.data);
            })();
          }}
        >
          Update
        </Button>
      </div>
      <Card sx={{ width: "1600px", margin: "0 auto" }}>
        <CardContent>
          <div className={s.titleLink}>
            <Typography gutterBottom variant="h5" component="div">
              {news?.title}
            </Typography>
            <Link href={news?.url} target="_blank" variant="body2">
              {news?.url}
            </Link>
          </div>
          <div className={s.authDate}>
            <Typography variant="body2" color="text.secondary">
              {news?.by}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dateNorm}
            </Typography>
            {news?.descendants !== 0 && (
              <Typography variant="body2" color="text.secondary">
                {news?.descendants} comment(s)
              </Typography>
            )}
          </div>
          <Typography variant="body2" color="text">
            {news?.text}
          </Typography>
          {news?.kids && (
            <Comments commentIds={news?.kids} descendants={news?.descendants} />
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default NewsPage;
