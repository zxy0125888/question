import React, { FC } from "react";
import QuestionCard from "../components/QuestionCard";
const List: FC = () => {
  //   const [list, setList] = useState([
  //     {
  //       id: "q1",
  //       title: "问卷1",
  //       createAt: "3月10日 13:30",
  //       isPublished: true,
  //       isStar: true,
  //       answerCount: 5,
  //     },
  //     {
  //       id: "q1",
  //       title: "问卷1",
  //       createAt: "3月10日 13:30",
  //       isPublished: true,
  //       isStar: true,
  //       answerCount: 5,
  //     },
  //     {
  //       id: "q1",
  //       title: "问卷1",
  //       createAt: "3月10日 13:30",
  //       isPublished: true,
  //       isStar: true,
  //       answerCount: 5,
  //     },
  //   ]);
  //   const addQuestion = () => {
  //     setList({
  //       id: "q6",
  //       title: "问卷1",
  //       createAt: "3月10日 13:30",
  //       isPublished: true,
  //       isStar: true,
  //       answerCount: 5,
  //     });
  //   };
  return (
    <>
      <div>List</div>
      <QuestionCard />
    </>
  );
};

export default List;
