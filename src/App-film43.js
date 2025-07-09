import logo from './logo.svg';
import './App.css';
// import Classs from './classs'; film38
// import Film39 from './film39'; film39
// import Film42 from './film40-41-42/film42';// film41
// import Film44 from './film40-41-42/fim44';// film44
import Film45 from './film40-41-42/film45';// film45

function App() {
 const productsItem = [
  {title: "Combo funny", caption: "buy 1 funny combo get 1 coca cola", price: 10.3 ,image: "film40/image/24-SaleOff-comboFunny.png" , count:0},
  // film45 {title: "Combo funny", caption: "buy 1 funny combo get 1 coca cola", price: 10.3 , count:0},
  {title: "SALAD MIXED VINEGAR", caption: "buy 1 funny combo get", price: 3.4 ,image: "film40/image/26-SaleOff-salad.png" , count: 0},
  {title: "CHICKEN BUGGER" ,caption: "buy 1 hamburger get 1 coca", price: 6.3, image: "film40/image/28-SaleOff-chickenBarger.png" , count: 15},
 ]
  return (
    <div className="App">
      <Film45 {...productsItem[0]} />
      <Film45 {...productsItem[1]} />
      <Film45 {...productsItem[2]} />
    </div>
    
  );
}

export default App;

// توضیحات
// ما میتونیم بجای اینکه داخل خود پروداکت مشخصاتشو بنویسسیم میتونیم داخل یک ارایه  جداگانه بنویسیم  و مشخصات رو اونجا قرار بدیم و با ارگیومنت و ایندکس ازش استفاده کنیم