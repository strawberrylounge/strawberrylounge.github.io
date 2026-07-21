/**
 * 프로젝트 데이터
 * featured: true → Home section03에 노출 (최대 3개)
 * Content      → Modal children으로 렌더링될 컴포넌트
 */
import Project01 from "./contents/Project01";
import Project02 from "./contents/Project02";
import Project03 from "./contents/Project03";
import Project04 from "./contents/Project04";

import "./Projects.scss";

export const projects = [
  {
    id: "project01",
    featured: false,
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
    summary: "푸르넷 정식 교사가 되기 전 예비 교육을 받는 온라인 학습 사이트",
    Content: Project03,
    links: [
      {
        label: "live",
        url: "https://sam.epurunet.co.kr/online",
        private: true,
      },
      {
        label: "mockup",
        url: "https://strawberrylounge.github.io/online/main.html",
        private: false,
      },
    ],
  },
  {
    id: "project04",
    featured: true,
    title: "푸르넷 아이스쿨",
    company: "금성출판사",
    role: "프론트엔드 개발",
    techStack: ["jsp", "SCSS", "JavaScript", "jQuery", "Figma", "gitlab"],
    summary: "유아 및 초등학생을 대상으로 한 학습 사이트",
    Content: Project04,
    links: [
      {
        label: "live",
        url: "https://www.purunet-ischool.co.kr",
        private: false,
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
