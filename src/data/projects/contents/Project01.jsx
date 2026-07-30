import img01 from "@/assets/images/project/01/01.jpg";

const Project01 = () => (
  <div className="project-details">
    <section>
      <h4>📌 작업 배경</h4>
      <p className="word-keep-all">
        분당서울대학교병원에서 개발한{" "}
        <a
          href="https://www.snubh.org/dh/main/index.do?DP_CD=DCD27&MENU_ID=002005"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          기분기록지
        </a>
        를 웹으로 옮긴 프로젝트입니다. 종이 기반인 기록지를 옮기면서 통계까지 한
        번에 볼 수 있는 사이트를 만들고 싶었습니다.
      </p>
    </section>

    <section>
      <h4>👩‍💻 핵심 기능</h4>
      <ul>
        <li>마크업(jsp) 및 스타일(SCSS) 관련 디렉토리 구조 설계</li>
        <li>정적 리소스 관리 방식 및 관련 컨벤션 설정</li>
        <li>마크업 및 스타일링 전반 담당</li>
        <li>UI 관련 스크립트 개발(jQuery)</li>
      </ul>
    </section>
  </div>
);

export default Project01;
