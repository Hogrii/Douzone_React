import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";
import styles2 from "./CSSModule2.module.scss";
// 위 import처럼 .wrapper의 이름이 같을 수 있다
// 이 경우에는 마지막에 입력한 css가 적용된다

const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정하고
const cx2 = classNames.bind(styles2);
// bind -> classNames의 함수

console.log(cx("wrapper", "inverted"));
console.log(cx2("wrapper", "inverted"));

console.log(styles.wrapper);
console.log(styles.inverted);
console.log([styles.wrapper, styles.inverted]);
const CSSModule = () => {
  return (
    <div className={(`${styles.wrapper}`, `${styles.inverted}`)}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
