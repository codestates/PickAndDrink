import './App.css'
// 라우팅을 위한 import react-router-dom ?


function App() {
  return (
    <div>
{/* <!---------------- header  ----------------> */} {/* 컴포넌트 화*/}
<header>
  <div>logo</div>
  <div>search</div>  {/* 검색 컴포넌트 */}
  <div>signin</div>
</header>

{/* <!---------------- nav  ----------------> */}
<nav>
  <div>story</div>
  <div>음료 랭킹</div>
  <div>편의점 음료 특가</div>
  <div>Log in</div>
</nav>

{/* <!---------------- banner  ----------------> */}

<div id="banner">배너</div>

{/* <!---------------- rankingList  ----------------> */}

<section class="rankingList">
  <div class="test">픽냥이's 랭킹 pick</div>

<div class="rankItemContainer">
  <article>
    <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>

  <article>
  <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>

  <article>
  <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>

  <article>
  <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>

  <article>
  <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>

  <article>
  <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>
</div>
</section>

{/* <!---------------- saleList  ----------------> */}

<section class="saleList">
  <div class="test">할인이 곧 끝나요</div>

<div class="saleContainer">
  <article>
  <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>

  <article>
  <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>

  <article>
  <img src={`/image/pickCat.jpg`} alt="" />
    <div>탄산음료 1등</div>
  </article>
</div>
</section>

{/* <!---------------- footer  ----------------> */}
<footer>Footer영역</footer>
    </div>
  );
}

export default App;
