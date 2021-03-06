"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("item", [
      //! 이마트24 행사상품 목록

      {
        name: "BR)민트초코우유190ml",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809288633038.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "BR)베리베리스트로베리우유190ml",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809288633045.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "BR)쿠키앤크림우유190ml",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809288633052.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "HK)르블렌히비스커스500ml",
        price: 2500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809422041576.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "HK)새싹보리500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809422041125.jpg",
        ranking_count: 5,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "HK)헛개수500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801007171210.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "HK)헛개수EX500ml",
        price: 3000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809422041729.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "OKF)골드유자500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713911496.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)골드유자스파클링500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713911793.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)골드키위500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713910659.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)그린스무디350ML",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809041429007.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)레드스무디350ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809041429113.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)레몬진저500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713911571.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)마누카허니레몬에이드500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713911007.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)밀키비해피스파클링500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713912349.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)비타민C레몬스파클링500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713911229.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)사이다스파클링500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713910529.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)샤인머스켓500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713910185.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)샤인머스켓스파클링500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713910567.jpg",
        ranking_count: 3,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)스포츠XR바이크500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713913063.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)아쿠아이온밸런스500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713911304.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)알로에베라킹500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809041427065.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)옐로우스무디350ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809041429120.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)요구르트스파클링500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713911328.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "OKF)워터멜론500ML",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809041429649.jpg",
        ranking_count: 3,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "e)복숭아에이드1000ml",
        price: 3000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8808024029906.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "e)소프트워터복숭아500ml(new)",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801382148739.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "e)소프트워터청포도500ml(new)",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801382148753.jpg",
        ranking_count: 2,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "e)스파클링워터베리메들리500ml",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713910871.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "e)스파클링워터오렌지피치500ml",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809713910888.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "e)아메리카노블랙1000ml",
        price: 3000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8808024028169.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "e)아메리카노스위트1000ml",
        price: 3000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8808024028152.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "e)아메리카노헤이즐넛향1000ml",
        price: 3000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8808024029890.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "e)에너지워터블루레몬500ml(new)",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801382148777.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "hy)에이스280ml",
        price: 1300,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801128280310.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "간개무량150ml",
        price: 5000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801147123155.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "강철부대)아이온블루워터500ml",
        price: 1800,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809125069167.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "강철부대)아이온워터500ml",
        price: 1800,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809125069150.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "경남)레모나핑크120ml",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806102878910.jpg",
        ranking_count: 3,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "경남)링커180ml",
        price: 1300,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809125069020.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "고려은단)비타민C병100ml",
        price: 700,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806012810314.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "골든드랍)흑당밀크티캔270ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801105915938.jpg",
        ranking_count: 3,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)경옥진100ml",
        price: 5000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002018201.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "광동)대추쌍화150ml",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002018201.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)더진한헛개차골드라벨500ml",
        price: 3000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002020334.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "광동)돼지감자차500ml",
        price: 1600,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002017976.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)비타500로열폴리스120ml",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002017990.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)비타500캔240ml",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002010977.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)비타민500콜라겐100ml",
        price: 1000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002020440.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)솔표위청수75ml",
        price: 1000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002018454.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)옥수수수염차이너브이500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002020846.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)우엉차500ml",
        price: 1600,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002012919.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)유자쌍화150ml",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002021096.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)진한헛개차1.5L",
        price: 3000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002009391.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "광동)헛개파워100ml",
        price: 5000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002010861.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "광동)헛개파워알바린15ml",
        price: 2500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002018720.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "광동)흑미차500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806002020136.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)로스터리블랙글레이즈드250ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069411859.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)로스터리에스프레소라떼250ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069184289.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)로스터리옐로버번돌체라떼250ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069185286.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)맛있는두유GT검은콩깨",
        price: 1400,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069179223.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)이오20's요구르트135ml",
        price: 1000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069176567.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)초코에몽250ml",
        price: 1400,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069185194.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)프렌치카페몽블랑라떼320ml",
        price: 2500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069401690.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)프렌치카페슈크림라떼320ml",
        price: 2500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069401683.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)프렌치카페흑임자라떼320ml",
        price: 2500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069404394.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "남양)핫초코에몽원컵",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801069406619.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "네슬레)핫쵸코원컵",
        price: 1100,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801055772469.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "농심)백산수2L",
        price: 1700,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801043020473.jpg",
        ranking_count: 0,
        category: "물",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "농심)백산수500ml",
        price: 950,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801043022781.jpg",
        ranking_count: 4,
        category: "물",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "담터)생강차원컵",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8803284611151.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "담터)쌍화차원컵",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8803284610994.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "담터)호두아몬드율무차원컵",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8803284610475.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)심플리스무스라떼240ml",
        price: 1800,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801037092240.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)심플리스무스로스티라떼360ml",
        price: 2400,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801037093575.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)심플리스무스로스티블랙360ml",
        price: 2400,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801037093582.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)심플리스무스블랙240ml",
        price: 1800,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801037092264.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)심플리스무스아메리카노240ml",
        price: 1800,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801037092257.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)티오피너티카라멜300ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801115384250.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)티오피마일드라떼300ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801115381754.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)티오피볼드라떼300ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801115381761.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동서)티오피트루블랙300ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801115381778.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)티오피트리플라떼300ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801115384212.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)플라워피니쉬라떼360ml",
        price: 2400,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801037094886.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동서)플라워피니쉬블랙360ml",
        price: 2400,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801037094879.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동아)나랑드사이다제로500ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801097235014.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동아)모닝케어D100ml",
        price: 5000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806011416005.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "동아)모닝케어H100ml",
        price: 5000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806011415992.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "동아)모닝케어S100ml",
        price: 1400,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8806011416012.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },
      {
        name: "동아)컨피던스230ml",
        price: 1500,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801097271005.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },
      {
        name: "동원)네스퀵초코드링크180ml",
        price: 1200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801155208011.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동원)덴마크드링킹요구르트딸기310ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801122001362.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동원)덴마크드링킹요구르트베리믹스310ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801155822828.jpg",
        ranking_count: 5,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동원)덴마크드링킹요구르트복숭아310ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801155733797.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동원)덴마크드링킹요구르트사과310ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801122001386.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동원)덴마크드링킹요구르트플레인310ml",
        price: 2000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801155822941.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동원)보성홍차아이스티레몬500ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801047284499.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동원)보성홍차아이스티복숭아500ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801047284482.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동원)오미자차500ml",
        price: 2200,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8801047289685.jpg",
        ranking_count: 4,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      {
        name: "동화)홍삼골드100ml",
        price: 1000,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/8809125067347.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 1,
      },

      {
        name: "레드불)캔355ml",
        price: 2900,
        img: "https://www.emart24.co.kr/upload/eventProduct/202112/9002490232887.jpg",
        ranking_count: 2,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 4,
        event_id: 2,
      },

      // 이마트24 행사상품 목록 끝
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("item", null, {});
  },
};
