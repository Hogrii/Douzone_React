import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  //상태 변수로 관리 (목록, 로딩중)
  //1. 서버에서 자료를 로딩한다 -> 비동기
  //2. 서버에 요청한 자료가 로딩중 일때는 화면에 로딩중 ...
  //3. 서버에 요청한 자료가 로딩 완료되면 출력
  const [articles, setArticles] = useState(null); //[article, article, article, article];
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    // 데이터가 가져와지기 전에 다음으로 넘어가지 못하게 막는다
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=kr&apiKey=ae3df86896064a709c97f5898afccbc5'
    );
    setArticles(response.data.articles);
    //서버에 요청한 자료가 로딩 완료되면 완료 설정
    setLoading(false); // 데이터를 가져온 후 Loading 상태를 false로 변경
  }, []);

  useEffect(() => {
    try {
      setLoading(true); // 데이터를 가져오기 전에  Loading 상태를 true로 변경
      //   axios
      //     .get(
      //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ae3df86896064a709c97f5898afccbc5"
      //     )
      //     .then(response => {
      //       setArticles(response.data.articles);
      //       //서버에 요청한 자료가 로딩 완료되면 완료 설정
      //       setLoading(false);
      //     });
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (loading) {
    // loading 값이 true면 로딩 메시지
    return <NewsListBlock>서버에서 뉴스 로딩중 ...</NewsListBlock>;
  }

  if (!articles) {
    return <NewsListBlock>서버에서 뉴스가 없습니다</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      {/* 뉴스들을 하나씩 NewsItem으로 만든다 */}
      {articles.map((article) => (
        <NewsItem article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
