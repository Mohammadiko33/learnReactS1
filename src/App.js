import logo from './logo.svg';
import './App.css';
// import Classs from './classs'; film38
// import Film39 from './film39'; film39
import Film42 from './film40-41-42/film42';// film39

function App() {
  return (
    <div className="App">
      {/* <Classs/> */}
     {/*    <Film39 name='mohammad' age="18" job='full stack developer' />
    <Film39 name='reza' age="16" job='ai developer' />
      <Film39 name='amir' age="19" job='backend developer' />
      <Film39 name='ali' age="22" job='security developer' />
      <Film39 name='erfan' age="17" job='front developer' /> */}

      <Film42 title="combo funny" caption="buy 1 funny combo get 1 coca cola" price={10.3} image="film40/image/24-SaleOff-comboFunny.png" count={0} />
      <Film42 title="SALAD MIXED VINEGAR " caption="buy 1 funny combo get" price={3.4} image="film40/image/26-SaleOff-salad.png" count={50} />
      <Film42 title="CHICKEN BUGGER" caption="buy 1 hamburger get 1 coca" price={6.3} image="film40/image/28-SaleOff-chickenBarger.png" count={15} />
    </div>
    
  );
}

export default App;
