import './App.css';
import Profile from './components/profile';


function App() { // 리턴할떄 반드시 하나의 태그만 출력
  const name = '홍길동';
  const list = ['HTML', 'CSS', 'React','Javascript']
  return (
    <>
      {/* <h1 className='orange'>Welcome to React World~!~!</h1>
      <h1>{`${name} 문자열님`} 반갑습니다 ~_~</h1>
      <h1>{name} 반갑습니다 ~_~</h1>
      <ul>
        {
          list.map(v => <li>{v}</li> )  
        }
      </ul> */}
      <Profile />
      <Profile />
      <Profile />
    </>
  );
}

export default App;
