import img01 from "@/assets/images/project/04/01.png";
import img01m from "@/assets/images/project/04/01-m.png";
import img02 from "@/assets/images/project/04/02.png";
import img02m from "@/assets/images/project/04/02-m.png";
import img03 from "@/assets/images/project/04/03.png";
import img04 from "@/assets/images/project/04/04.png";

const Project04 = () => (
  <div className="project-details">
    <section>
      <h4>📌 작업 내용</h4>
      <p className="word-keep-all">
        유아 및 초등학생 대상의 학습 사이트이며 회사의 가장 큰 프로젝트이기도
        합니다. 이 페이지에서는 해당 프로젝트 유지보수를 하며 겪었던 난항과 제가
        대응한 방식에 대해 설명하려 합니다.
      </p>
    </section>

    <section>
      <h4>👩‍💻 담당한 작업</h4>
      <ul>
        <li>마크업 및 스타일링 전반 담당</li>
        <li>UI 관련 스크립트(jQuery) 신규 건 개발</li>
        <li>정적 리소스 관리</li>
      </ul>
    </section>

    <section>
      <h4>💦 문제</h4>
      <ul className="description-list">
        <li>
          <h5>레거시 코드의 양</h5>
          <p>
            사내 최대 트래픽 서비스이며 회사의 업력이 오래된 만큼, 많은 이들의
            손을 거친 프로젝트였습니다. 코드베이스가 IE6 대응 코드가 남아있을
            정도로 오래된 레거시였습니다.
          </p>
        </li>
        <li>
          <h5>알아볼 수 없는 구조</h5>
          <p>
            2023년 리뉴얼을 거쳤다고 되어 있었으나 실제로는 전임자들의
            이니셜로만 이름 붙은 스타일 파일 (<code>_jar.scss</code>,{" "}
            <code>_kes.scss</code>, <code>_ksb.scss</code>)이 남아 있을
            뿐이었고, 이 파일명이 무엇을 의미하는지에 대한 설명이나 인수인계
            없이 방치되어 있었습니다. 같은 컴포넌트의 코드가 2개 이상의 파일에
            걸쳐 작성 되는 등 총 3만 줄 이상의 코드가 얽혀 알아보기
            어려웠습니다.
          </p>
        </li>
        <li>
          <h5>스타일 오버라이딩의 반복</h5>
          <p>
            위와 같은 알아보기 힘든 구조로 인해 프론트 담당자의 부재 중 추가 UI
            수정이 있을 시, 백엔드 개발자들이 인라인 스타일로 삽입 혹은{" "}
            <code>!important</code>를 남용하여 스타일 오버라이딩이 반복되는
            구조적 문제가 있었습니다.
          </p>
        </li>
        <li>
          <h5>현실적인 문제</h5>
          <p>
            전체 구조를 뒤엎는 게 가장 확실한 방법이겠지만, 당시 새로운 UI가
            자주 추가되었고, 다른 프로젝트의 업무량에 따른 일정 관리를 고려하면
            해당 방법은 리스크가 너무 컸습니다.
          </p>
        </li>
      </ul>
    </section>

    <section>
      <h4>🛠️ 해결</h4>
      <ul className="description-list">
        <li>
          <h5>별도 레이어(_maintenance.scss)를 설계</h5>
          <p>
            가장 중요한 건 1&#41; 기존 코드는 최대한 건드리지 않되 2&#41;
            안전하게 변경을 쌓아갈 수 있어야 하고 3&#41; 무엇보다 당시 프론트
            담당자가 저 뿐이었기에 프론트엔드가 아닌 개발자도 쉽게 받아들여질 수
            있어야 했습니다.
          </p>
          <p>
            별도 레이어를 추가한 것은 3번의 이유가 가장 컸습니다. 당시 업무량은
            많았으나 프론트 개발자는 저 하나여서, 급하고 비교적 단순한 수정 건은
            백엔드 개발자들이 진행하는 경우가 많았기에 문제가 반복될 가능성이
            컸기 때문입니다. 그래서 프론트 담당자인 제가 기준을 세워 혼선이 없게
            만들어야 한다고 생각했습니다.
          </p>
          <div class="description-img">
            <figure>
              <img
                src={img01}
                alt="설명 이미지"
                class="img img-responsive pc-only"
              />
              <img
                src={img01m}
                alt="설명 이미지"
                class="img img-responsive m-only"
              />
            </figure>
            <figcaption>
              리뉴얼 스타일 파일들이 모인 위치에 별도 레이어 추가
            </figcaption>
          </div>
        </li>
        <li>
          <h5>캐스케이드 우선순위 설계</h5>
          <p>
            해당 파일<code>(_maintenance.scss)</code>을 스타일 import 순서상
            가장 마지막에 배치해, 자연스럽게 우선순위를 확보하도록 구성했습니다.
          </p>
          <div class="description-img">
            <figure>
              <img
                src={img02}
                alt="설명 이미지"
                class="img img-responsive pc-only"
              />
              <img
                src={img02m}
                alt="설명 이미지"
                class="img img-responsive m-only"
              />
            </figure>
            <figcaption>해당 파일들은 sub.css로 컴파일 됨</figcaption>
          </div>
        </li>
        <li>
          <h5>수정 기준을 문서화</h5>
          <p>
            파일 상단에 기준을 명시해, 향후 작업자가 과거의 저처럼 맥락 없이
            헤매지 않도록 했습니다.
          </p>
          <div class="description-img">
            <figure>
              <img src={img03} alt="설명 이미지" class="img img-responsive" />
            </figure>
            <figcaption>파일 내 작성한 규칙들</figcaption>
          </div>
        </li>
        <li>
          <h5>변경 이력 기록 및 관리</h5>
          <p>
            항목 추가 시 날짜, 담당자, 요청자, 이슈 트래커(레드마인) 번호를 함께
            기록하도록 규칙화해, 신뢰하기 어려운 레거시 커밋 히스토리를 대신할
            로그를 만들었습니다.
          </p>
          <div class="description-img">
            <figure>
              <img src={img04} alt="설명 이미지" class="img img-responsive" />
            </figure>
            <figcaption>작성 예시</figcaption>
          </div>
        </li>
      </ul>
    </section>
  </div>
);

export default Project04;
