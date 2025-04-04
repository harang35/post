import image1 from "./assets/1.jpg";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card-grid">
        <img src={image1} alt="이미지" />
        <div className="card_text">
          <p>제 목 : </p>
          <p>작성일 : </p>
          <p>작성자 : </p>
        </div>
      </div>
    </div>
  );
}
