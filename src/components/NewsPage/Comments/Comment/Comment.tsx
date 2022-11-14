import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getComment } from "../../../../api/news";
import { toDateNorm } from "../../../../helpers/functions";
import Comments from "../Comments";
import s from "./Comment.module.css";
interface ICommentsProps {
  commentId: number;
}
interface IComment {
  by: string;
  id: number;
  parent: number;
  text: string;
  time: number;
  type: string;
  kids?: number[];
}
const Comment = (props: ICommentsProps) => {
  const [showKid, setShowKid] = useState(false);
  const [showCom, setShowCom] = useState(false);
  const [comment, setComment] = useState<IComment>();
  useEffect(() => {
    (async () => {
      let data = await getComment(props.commentId);
      setComment(data?.data);
    })();
  }, [props.commentId]);

  let dateNorm = toDateNorm(comment?.time);
  return (
    <div className={s.contaner}>
      <div>
        <div className={s.byDate}>
          <div>{comment?.by}</div>
          <div>{dateNorm}</div>
          {comment?.kids && (
            <div
              onClick={() => {
                setShowKid((prev) => !prev);
                setShowCom((prev) => !prev);
              }}
            >
              {showCom ? (
                <span className={s.show}>hide comments</span>
              ) : (
                <span className={s.show}>show comments</span>
              )}
            </div>
          )}
        </div>
        <Typography variant="body2" sx={{ background: "rgb(230, 230, 230)" }}>
          {comment?.text}
        </Typography>
      </div>
      {comment?.kids && showKid && <Comments commentIds={comment?.kids} />}
    </div>
  );
};

export default Comment;
