import { Container, Typography } from "@mui/material";
import Comment from "./Comment/Comment";
import s from "./Comments.module.css";
interface ICommentProps {
  commentIds: number[];
  descendants?: number;
}
const Comments = (props: ICommentProps) => {
  let comments = props?.commentIds?.map((el: number) => (
    <Comment commentId={el} />
  ));
  return (
    <>
      {props.descendants != 0 && (
        <Container>
          <Typography variant="h6">Comments</Typography>
          <div className={s.comments}>{comments}</div>
        </Container>
      )}
    </>
  );
};

export default Comments;
