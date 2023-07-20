import './App.css';
import { Routes, Route } from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';

// 사용할 JSON 데이터
// jsonplaceholder.typicode.com/todos

function App() {
  // const [data, setData] = useState('안녕하세요');

  /*
  const add = (a, b) => {
    return a + b;
  };
   */

  // const onClick = async () => {
  // const sum = add(10, 20);
  // 서버에서 자료를 얻어서 설정하면 된다
  // await을 사용하면 해당 작업이 모두 수행될때까지 대기한다
  // await과 async는 짝을 이룬다.. await을 사용하면 항상 async를 붙여주어야 한다
  /*
    // async-await 방식
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const jsonData = await response.json(); // 비동기로 response를 받아와야 한다
    setData(JSON.stringify(jsonData));
     */

  /*
    // axios 방식
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f'
      );
      setData(JSON.stringify(response.data)); // JSON -> String
    } catch (e) {
      console.log(e);
    }
   */

  /*
    // fetch 방식
    fetch('https://jsonplaceholder.typicode.com/todos/1') // then은 당장 실행하는 것이 아니고 해당 작업이 완료된 이후에 호출하는 후처리 함수이다
      // 상태코드 결과
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json(); // fetch를 사용했기 때문에 .json()을 사용해야 한다
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
      // 실제 응답 데이터
      .then((response) => {
        console.log('응답자료 문자열 : ' + JSON.stringify(response));
        setData(JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
   */
  // };

  /*
  const article = {
    title:
      '‘P의 거짓’, 소울라이크 본고장 일본서 오프라인 행사 개최한다 - 게임플',
    description:
      "[게임플] 네오위즈가 개발 중인 ‘P의 거짓’이 골드행을 기념해 일본에서 오프라인 이벤트 ‘P의 거짓 JAPAN PREMIUM’을 개최한다.P의 거짓은 동화 ‘피노키오’를 잔혹극으로 각색한 액션 RPG다. '크라트라'라는 가상 도시와 '화석병'을 소재로 동화 속 피노키오의 모험을 영리하게 비튼 스토리와 유럽 ‘벨 에포크’ 시대 분위기의 아트워크, 프롬소프트웨어의 ‘소울’ 시리즈를 연상시키는 난도 높은 전투가 특징이다.이번 행사는 P의 거짓의 골드행을 기념하기 …",
    url: 'http://www.gameple.co.kr/news/articleView.html?idxno=206552',
    urlToImage:
      'http://cdn.gameple.co.kr/news/thumbnail/202307/206552_215715_757_v150.jpg',
  };

  const articles = [article, article, article, article];
   */

  /*
    // 라우터 적용으로 인해 주석처리
    // 카테고리 최초값을 전체보기로 설정
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => setCategory(category), []);
   */

  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
