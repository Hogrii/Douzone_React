import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const NewsItem = ({ article }) => {
  /*
  const title =
    '‘P의 거짓’, 소울라이크 본고장 일본서 오프라인 행사 개최한다 - 게임플';
  const description =
    "[게임플] 네오위즈가 개발 중인 ‘P의 거짓’이 골드행을 기념해 일본에서 오프라인 이벤트 ‘P의 거짓 JAPAN PREMIUM’을 개최한다.P의 거짓은 동화 ‘피노키오’를 잔혹극으로 각색한 액션 RPG다. '크라트라'라는 가상 도시와 '화석병'을 소재로 동화 속 피노키오의 모험을 영리하게 비튼 스토리와 유럽 ‘벨 에포크’ 시대 분위기의 아트워크, 프롬소프트웨어의 ‘소울’ 시리즈를 연상시키는 난도 높은 전투가 특징이다.이번 행사는 P의 거짓의 골드행을 기념하기 …";
  const url = 'http://www.gameple.co.kr/news/articleView.html?idxno=206552';
  const urlToImage =
    'http://cdn.gameple.co.kr/news/thumbnail/202307/206552_215715_757_v150.jpg';
   */

  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      <div className="thumbnail">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={urlToImage} alt={title} />
        </a>
      </div>
      <div classname="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
