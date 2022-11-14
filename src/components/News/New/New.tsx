import { NavLink } from "react-router-dom";
import s from "./New.module.css";
import { IItem } from "../../../helpers/interfaces";
import { toDateNorm } from "../../../helpers/functions";

interface NewProps {
  newData: IItem;
}

const New = (props: NewProps) => {
  let dateNorm = toDateNorm(props.newData?.time);
  return (
    <NavLink to={`/new/${props.newData.id}`} className={s.navlink}>
      <div className={s.authorCont}>
        <span className={s.name}>{props.newData?.title}</span>
        <span className={s.date}>{dateNorm}</span>
      </div>
      <div className={s.authorCont}>
        <span className={s.author}>{props.newData?.by}</span>
        <span className={s.rate}>
          Rating:<b>{props.newData?.score}</b>
        </span>
      </div>
    </NavLink>
  );
};

export default New;
