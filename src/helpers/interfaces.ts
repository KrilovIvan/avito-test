export interface IItem {
  id: number;
  by: string;
  descendants: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  url: string;
  parent: number;
  text: string;
}
