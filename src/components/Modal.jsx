import { useEffect, useRef } from "react";

import IconClose from "./Icons/IconClose";
import IconLock from "./Icons/IconLock";

import "./Modal.scss";

function Modal({ isOpen, onClose, projectData, children }) {
  // onClose가 매 렌더마다 새로 만들어져도 아래 이펙트가 재실행되지 않도록 ref로 참조
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // ESC 키 활성화 시 모달 닫힘 + 배경 스크롤 방지
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCloseRef.current();
      }
    };

    // 스크롤 위치 및 기존 인라인 스타일 저장
    const scrollY = window.scrollY;
    const { position, top, width, overflowY } = document.body.style;

    // 배경 스크롤 방지 (body의 다른 인라인 스타일은 건드리지 않는다)
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "hidden";

    // ESC 키 이벤트 등록
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.width = width;
      document.body.style.overflowY = overflowY;

      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const { title, company, period, role, techStack, images, links, summary } =
    projectData || {};

  // 기술 스택별 클래스 매핑
  const getTechClass = (tech) => {
    const techClassMap = {
      // 마크업
      HTML: "default",
      jsp: "default",

      // 스타일
      SCSS: "style",
      CSS: "style",
      Tailwind: "style",
      Bootstrap: "style",
      "Material UI": "style",
      "Styled Components": "style",
      Emotion: "style",

      // 프론트엔드 스크립트
      React: "script",
      JavaScript: "script",
      TypeScript: "script",
      "Next.js": "script",
      "Vue.js": "script",
      Angular: "script",
      "Nuxt.js": "script",
      jQuery: "script",

      // 라이브러리
      "Chart.js": "library",
      Recharts: "library",
      "three.js": "library",

      // 앱 개발
      "React Native": "app",

      // 웹서버
      "Node.js": "server",
      "Nest.js": "server",
      Spring: "server",
      Express: "server",
      Redis: "server",
      Supabase: "server",

      // 배포
      AWS: "deploy",
      Netlify: "deploy",
      Vercel: "deploy",

      // 협업툴
      Figma: "tool",
      Zeplin: "tool",
      Slack: "tool",
      Notion: "tool",
      github: "tool",
      gitlab: "tool",
    };

    return techClassMap[tech] || "default";
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        {/* 헤더 영역 */}
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose} className="btn-modal-close">
            <IconClose size={18} color="#999" />
          </button>
        </div>

        <div className="modal-body">
          {/* 기본 정보 영역 */}
          <div className="modal-info">
            <div className="info-grid">
              {company && (
                <div className="info">
                  소속:
                  <span>{company}</span>
                </div>
              )}
              {period && (
                <div className="info">
                  기간:
                  <span>{period}</span>
                </div>
              )}
              {role && (
                <div className="info">
                  역할:
                  <span>{role}</span>
                </div>
              )}
            </div>

            {techStack && (
              <div className="tech-stack">
                {techStack.map((tech) => (
                  <span key={tech} className={`tag-tech ${getTechClass(tech)}`}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {summary && <p className="summary">{summary}</p>}

            {/* 링크 영역 (있을 때만) */}
            {links && (
              <ul className="modal-links">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                    >
                      {link.label}
                      {link.private && (
                        <IconLock
                          size={12}
                          color="#4d9de0"
                          aria-label="외부 공유 불가"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 이미지 영역 (있을 때만) */}
          {images && (
            <div className="modal-images">
              {images.map((img, idx) => (
                <img key={idx} src={img.src} alt={img.alt} />
              ))}
            </div>
          )}

          {/* 자유 콘텐츠 영역 */}
          <div className="modal-description">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
