/**
 * 프로젝트 데이터
 * featured: true → Home section03에 노출 (최대 3개)
 * content    → Modal children으로 렌더링될 JSX
 */
export const projects = [
  {
    id: "project01",
    featured: true,
    title: "mood-diary",
    techStack: ["React Native", "TypeScript", "HTML", "SCSS"],
    summary: "작성 중...",
    content: <div className="project-details">작성 중...</div>,
  },
  {
    id: "project02",
    featured: true,
    title: "tarot-shuffle",
    techStack: ["Vue.js", "JavaScript", "HTML", "CSS"],
    summary: "요약입니다.",
    content: (
      <div className="project-details">
        <h3>🎯 주요 성과</h3>
        <ul>
          <li>페이지 로딩 속도 40% 개선</li>
          <li>사용자 만족도 90% 달성</li>
        </ul>
        <h3>🔧 해결한 문제</h3>
        <p>
          초기에 상태 관리가 복잡해서 렌더링 성능 이슈가 있었는데, Redux 구조를
          재설계하고 useMemo를 적절히 활용해서...
        </p>
        <h3>💡 배운 점</h3>
        <p>성능 최적화의 중요성을 깨달았고, 앞으로는...</p>
      </div>
    ),
  },
  {
    id: "project03",
    featured: true,
    title: "푸르넷 예비교사 온라인 교육",
    company: "금성출판사",
    period: "2026.01.05 ~ 2026.02.12",
    role: "프론트엔드 개발",
    techStack: ["jsp", "SCSS", "javaScript", "jQuery"],
    summary: "푸르넷 예비교사 대상 온라인 학습 사이트 개발",
    content: (
      <div className="project-details">
        <hgroup>
          <h3>📌 작업 배경</h3>
          <p className="word-keep-all">
            기존에 외부 협력업체에서 관리하던 사이트를 내부에서 개발 및
            운영하고자 개발 요청.
          </p>
        </hgroup>

        <hgroup>
          <h3>🛠️ 담당한 작업</h3>
          <p>마크업(jsp) 및 스타일(SCSS) 관련 디렉토리 구조 설계</p>
          <p>정적 리소스 관리 방식</p>
        </hgroup>

        {/* <h3>🌱 새롭게 다룬 환경</h3>
        <p>JSP · 레거시 CSS 등 낯선 기반에서 작업하며 겪은 것들</p> */}

        <h3>🪨 이슈 & 해결</h3>
        <p>작업 중 마주친 문제와 어떻게 풀었는지</p>
      </div>
    ),
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
