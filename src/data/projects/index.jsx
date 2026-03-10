/**
 * 프로젝트 데이터
 * featured: true → Home section03에 노출 (최대 3개)
 * Content      → Modal children으로 렌더링될 컴포넌트
 */
import Project01 from "./contents/Project01";
import Project02 from "./contents/Project02";
import Project03 from "./contents/Project03";

export const projects = [
  {
    id: "project01",
    featured: true,
    title: "mood-diary",
    techStack: ["React Native", "TypeScript", "HTML", "SCSS"],
    summary: "작성 중...",
    Content: Project01,
  },
  {
    id: "project02",
    featured: true,
    title: "tarot-shuffle",
    techStack: ["Vue.js", "JavaScript", "HTML", "CSS"],
    summary: "요약입니다.",
    Content: Project02,
  },
  {
    id: "project03",
    featured: true,
    title: "푸르넷 예비교사 온라인 교육",
    company: "금성출판사",
    period: "2026.01.05 ~ 2026.02.12",
    role: "프론트엔드 개발",
    techStack: ["jsp", "SCSS", "JavaScript", "jQuery", "Figma", "gitlab"],
    summary: "푸르넷 예비교사 대상 온라인 학습 사이트 개발",
    Content: Project03,
    link: "https://sam.epurunet.co.kr/online",
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
