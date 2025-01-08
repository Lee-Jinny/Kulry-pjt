const Subevent = () => {
  // 이미지 경로 배열 생성
  const images = [
    "subevent_image/subevent_img1.jpg",
    "subevent_image/subevent_img2.jpg",
    "subevent_image/subevent_img3.jpg",
    "subevent_image/subevent_img4.jpg",
    "subevent_image/subevent_img5.jpg"
  ];

  // 0부터 4 사이의 랜덤한 인덱스 생성
  const randomIndex = Math.floor(Math.random() * images.length);
  
  // 랜덤하게 선택된 이미지 경로
  const randomImage = images[randomIndex];

  return (
    <div style={{ cursor: 'pointer', width: '100%' , height: 'auto'}}>
      <img src={randomImage} alt="random subevent" />
    </div>
  );
}

export default Subevent;