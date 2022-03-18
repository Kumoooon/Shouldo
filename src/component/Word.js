import { useState } from "react";

export default function Word({ word }) {
  let [show, setShow] = useState(false);
  let [isdone, setIsdone] = useState(word.isDone);
  function upper() {
    setIsdone(!isdone);
  }
  return (
    <tr className={isdone ? "off" : ""}>
      <td>
        <input
          type="checkbox"
          checked={isdone}
          onChange={() => {
            upper();
          }}
        ></input>
      </td>
      <td>{word.eng}</td>
      <td>{show === true ? word.kor : null}</td>
      <td>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          뜻 보기
        </button>

        <button>삭제</button>
      </td>
    </tr>
  );
}
