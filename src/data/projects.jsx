/**
 * 프로젝트 데이터
 * featured: true → Home section03에 노출 (최대 3개)
 * content    → Modal children으로 렌더링될 JSX
 */
export const projects = [
  {
    id: "project01",
    featured: true,
    title: "기분기록지(App)",
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
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
