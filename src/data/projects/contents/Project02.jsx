const Project02 = () => (
  <div className="project-details">
    <section>
      <h3>📌 작업 배경</h3>
      <p className="word-keep-all">내가 쓰려고.</p>
    </section>

    <section>
      <h3>🛠️ 담당한 작업</h3>
      <ul>
        <li>전부</li>
      </ul>
    </section>

    <section>
      <h3>🌱 새롭게 익힌 것 or 적응한? 것?</h3>
      <ul>
        <li>
          <h4>three.js 예정</h4>
          <p>애니메이션</p>
        </li>
      </ul>
    </section>

    <section>
      <h3>🪨 이슈 & 해결</h3>
      <ul>
        <li>
          <h4>
            scss 컴파일 문제 / dart sass와 node sass의 차이에 따른 기존 문법
            사용 방식 문제
          </h4>
          <p>
            interpolation 등등 . . . 이게 이슈 해결이 맞나? 암튼 최신형인
            dartjs로 옮기고 deprecated되는 문법제거후 sass 모듈/보간법/함수 분리
          </p>
        </li>
      </ul>
    </section>
  </div>
);

export default Project02;
