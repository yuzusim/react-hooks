import React, { useEffect, useState } from "react";
import defaultAxios from "axios";

// useAxios: Axios 요청을 처리하는 커스텀 훅/함수
const useAxios = (opts, axiosInstance = defaultAxios) => {
  // 상태 관리 초기값을 객체(object) 형태로 설정
  const [state, setState] = useState({
    loading: true, // 데이터 로딩 중 상태를 나타냄 (true면 로딩 중)
    error: null, // 에러 발생 시 에러 정보를 담기 위한 필드 (초기값은 없음)
    data: null, // 실제 데이터를 담기 위한 필드 (초기값은 없음)
  });

  // useEffect 재실행용 상태값
  const [trigger, setTrigger] = useState(0);

  // refetch 함수 생성 (데이터 재요청 함수)
  const refetch = () => {
    // 요청 시작 시 상태 초기화
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    // opts.url이 존재하지 않으면 함수 실행을 중단
    if (!opts.url) {
      return; // URL이 없으므로 아무 동작도 하지 않고 종료
    }

    // option인  configuration(구성) 전달
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]); // trigger 바뀌면 재실행
  return { ...state, refetch }; // ...state와 refetch 함수를 리턴
};

const Axios = () => {
  // useAxios 훅 호출, url, 인스턴스 넣기(안넣었는데 상관 없다 함)
  // 현재 상태 관리 초기값 가져옴
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  // 상태 관리 값 콘솔에서 확인
  //   console.log(
  //     `Loading:${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  //   );

  return (
    <div className="App">
      {/* API 요청이 성공해서 data가 존재하면 data.status 값을 보여줌 */}
      <h1>{data && data.status}</h1>

      {/* 콘솔로그 대신 로딩일때 작업 : API 요청이 진행 중일 때 "Loading"이라는 문구를 보여줌 */}
      <h2>{loading && "Loading"}</h2>

      {/* 버튼 클릭 시 useAxios 훅에서 제공하는 refetch 함수 호출
        -> 다시 API 요청을 시도함 */}
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default Axios;
