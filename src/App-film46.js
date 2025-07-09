import logo from './logo.svg';
import './App.css';
import Film46 from './componet/40-46.films/film46';// film45

function App() {
 const productsItem = [
  {title: "Combo funny", caption: "buy 1 funny combo get 1 coca cola", price: 10.3 ,image: "film40/image/24-SaleOff-comboFunny.png" , count:0},
  // film45 {title: "Combo funny", caption: "buy 1 funny combo get 1 coca cola", price: 10.3 , count:0},
  {title: "SALAD MIXED VINEGAR", caption: "buy 1 funny combo get", price: 3.4 ,image: "film40/image/26-SaleOff-salad.png" , count: 0},
  {title: "CHICKEN BUGGER" ,caption: "buy 1 hamburger get 1 coca", price: 6.3, image: "film40/image/28-SaleOff-chickenBarger.png" , count: 15},
 ]
  return (
    <div className="App">
      <Film46 {...productsItem[0]}><button>code off</button></Film46>
      <Film46 {...productsItem[1]}></Film46>
      <Film46 {...productsItem[2]}><ul>
       <li>about this</li>
       <li>shop</li>
       </ul></Film46>
    </div>
    
  );
}

export default App;

// توضیحات
// ما میتونیم همراه ساخت هر پروداکت یک المنت اچ تی ام الی یا ظور مثال علامت تخفیف یا یا هرچیزی که صرفه برای همون پرودات باشه میتونیم اراسل کنیم و ازش استفاده کنیم