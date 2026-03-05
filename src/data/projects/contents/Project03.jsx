const Project03 = () => (
  <div className="project-details">
    <section>
      <h3>📌 작업 배경</h3>
      <p className="word-keep-all">
        기존에 외부 협력업체에서 관리하던 사이트를 내부에서 운영하고자 개발.
      </p>
    </section>

    <section>
      <h3>🛠️ 담당한 작업</h3>
      <ul>
        <li>마크업(jsp) 및 스타일(SCSS) 관련 디렉토리 구조 설계</li>
        <li>정적 리소스 관리 방식 및 관련 컨벤션 설정</li>
        <li>마크업 및 스타일링 전반 담당</li>
        <li>UI 관련 스크립트 작성(jQuery) 및 일부 데이터 바인딩(ajax?)</li>
      </ul>
    </section>

    <section>
      <h3>🌱 새롭게 익힌 것</h3>
      <ul>
        <li>
          <h4>microsite 내 스타일/파일 분리</h4>
          <p></p>
        </li>
        <li>css mask</li>
        <li>svg icon component: jsp param and include</li>
        <li>커스텀 마크업 aria-role</li>
        <li>헷갈리는 마크업 정립</li>
      </ul>
    </section>

    <section>
      <h3>🪨 이슈 & 해결</h3>
      <ul>
        <li>scss 컴파일 문제 / dart sass와 node sass 버전 차이 문제</li>
        <li>그래프 svg + transform</li>
      </ul>
    </section>
  </div>
);

export default Project03;
