const Project02 = () => (
  <div className="project-details">
    <section>
      <h4>📌 작업 배경</h4>
      <p className="mb12">
        이 프로젝트는 타로 카드를 한 장 뽑아볼 수 있는 개인 프로젝트입니다.
      </p>
      <p className="mb12">
        보통 실무에서 애니메이션을 구현할 땐 순수 <code>CSS Animation</code>을
        주로 사용해왔습니다. 스크롤 이벤트 등의 DOM을 직접적으로 조종해야 하는
        경우에는 <code>JavaScript</code>나 그에 기반한 라이브러리를
        사용해왔고요. 이 포트폴리오에 들어간 애니메이션도 <code>GSAP</code>로
        구현했습니다.
      </p>
      <p>
        <code>Three.js</code>에 대한 관심은 오래전부터 있었습니다. 다만
        실무에서는 <code>Three.js</code>를 사용할 정도의 애니메이션을 구현할
        일이 없었고, 그래서 라이브러리를 다뤄볼겸 이 프로젝트를 만들게
        되었습니다. 모든 애니메이션이 라이브러리로 구현된 것은 아니며, 순수{" "}
        <code>CSS</code>와 <code>Three.js</code>를 둘 다 사용하며 차이점을
        비교하며 구현해보았습니다.
      </p>
    </section>

    <section>
      <h4>⭐ 주요 특징</h4>
      <ul className="description-list">
        <li>
          <h5>커스텀 텍스쳐 생성: 파티클 레이어링</h5>
          <p></p>
        </li>
      </ul>
    </section>
  </div>
);

export default Project02;
