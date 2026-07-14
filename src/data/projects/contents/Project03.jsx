import img01 from "@/assets/images/project/03/01.png";
import img02 from "@/assets/images/project/03/02.png";

import img08 from "@/assets/images/project/03/08.png";
import img09 from "@/assets/images/project/03/09.png";
import img10 from "@/assets/images/project/03/10.png";
import img11 from "@/assets/images/project/03/11.png";
import img12 from "@/assets/images/project/03/12.png";

const Project03 = () => (
  <div className="project-details">
    <section>
      <h4>📌 작업 배경</h4>
      <p className="word-keep-all">
        기존에 외부 협력업체에서 관리하던 사이트를 내부에서 운영하고자 개발.
      </p>
    </section>

    <section>
      <h4>👩‍💻 담당한 작업</h4>
      <ul>
        <li>마크업(jsp) 및 스타일(SCSS) 관련 디렉토리 구조 설계</li>
        <li>정적 리소스 관리 방식 및 관련 컨벤션 설정</li>
        <li>마크업 및 스타일링 전반 담당</li>
        <li>UI 관련 스크립트 개발(jQuery)</li>
      </ul>
    </section>

    <section>
      <h4>❗ 작업 전 고려한 점</h4>
      <ul className="description-list">
        <li>
          <h5>Microsite 내 스타일/파일 분리</h5>
          <p>
            이 프로젝트는 여러 학습 서비스 모듈이 하나의 애플리케이션 안에서
            공존하는 레거시 구조였기 때문에, 신규 UI 작업이 기존 화면의 CSS/JS에
            영향을 주지 않도록 설계 단계에서부터 격리 전략을 수립했습니다. JSTL
            Tiles를 활용해 온라인 강의 모듈만을 위한 별도의 Tiles 정의와
            레이아웃 템플릿을 분리하고, 리소스 경로 또한 전용 네임스페이스로
            구성해 전역 스타일·스크립트와의 충돌 가능성을 원천 차단했습니다.
            또한 Tiles의 와일드카드 매핑을 이용해 페이지별로 필요한 JS만
            동적으로 로드되도록 구성하여, 불필요한 스크립트 로드를 줄이고
            유지보수 시 영향 범위를 페이지 단위로 한정할 수 있도록 했습니다.
          </p>
          <p>
            <img src={img01} alt="" class="img img-responsive" />
            <sub>온라인 강의 모듈을 위한 Tiles 정의</sub>
          </p>
          <p>
            <img src={img02} alt="" class="img img-responsive" />
            <sub>페이지별로 필요한 리소스만 동적 로드</sub>
          </p>
        </li>
      </ul>
    </section>

    <section>
      <h4>🌱 배운 점</h4>
      <ul className="description-list">
        <li>
          <h5>생소했던 CSS 스펙을 습득</h5>
          <p>
            디자인 시안에 있던 그라데이션 테두리를 구현하면서, 일반적인{" "}
            <code>border</code>와 <code>border-radius</code>
            조합으로는 그라데이션이 모서리에서 각지게 잘리는 한계에
            부딪혔습니다. 이를 해결하기 위해 <code>::before</code> 의사요소에
            그라데이션 배경을 채우고, <code>content-box</code> 기준 마스크와
            전체 박스 기준 마스크 두 개를 겹친 뒤{" "}
            <code>mask-composite: exclude</code>로 두 마스크가 겹치지 않는 영역,
            즉 테두리 두께만큼의 링(ring) 영역만 남기는 방식을 사용했습니다.
            처음에는 이 마스크 합성 개념이 낯설게 느껴졌지만, 평소 다뤄본
            포토샵의 레이어 마스크—흰색/검은색으로 노출 영역을 정의하고, 여러
            마스크를 합치기·빼기·교차 등의 Boolean 연산으로 조합해 원하는 영역만
            드러내는 방식—과 원리가 동일하다는 것을 깨닫고 나서야 명확히 이해할
            수 있었습니다. 이 경험을 통해 낯선 기술 스펙을 마주쳤을 때, 이미
            알고 있는 다른 도구의 멘탈 모델과 연결 지어 학습하는 것이 효과적인
            접근법이라는 것을 배웠습니다.
          </p>
          <p>
            <img src={img10} alt="" class="img img-responsive" />
            <sub>CSS를 적용한 모습</sub>
          </p>
        </li>

        {/* <li>커스텀 마크업 aria-role</li>
        <li>헷갈리는 마크업 정립</li> */}
      </ul>
    </section>

    <section>
      <h4>🛠️ 문제 해결</h4>
      <ul className="description-list">
        <li>
          <h5>SVG의 컴포넌트화</h5>
          <p>
            기존 코드는 화면마다 SVG 마크업 전체가 JSP 파일 안에 그대로 반복
            삽입되어 있어 가독성이 떨어지고 아이콘 하나를 수정하려 해도 여러
            파일을 찾아다녀야 하는 구조였습니다. 이를 개선하기 위해 SVG
            아이콘들을 <code>icons.jsp</code>라는 한 파일로 모으고, 사용하는
            쪽에서는{" "}
            <code>
              &lt;jsp:include page="./svg/icons.jsp"&gt;&lt;jsp:param
              name="iconName" value="download" /&gt;&lt;/jsp:include&gt;
            </code>{" "}
            형태로 아이콘 이름을 파라미터로 전달해 <code>&lt;c:choose&gt;</code>{" "}
            분기로 필요한 SVG만 렌더링하도록 구성했습니다. React나 Vue의 아이콘
            컴포넌트처럼, JSP의 include·param 메커니즘을 활용해 재사용 가능한 뷰
            프래그먼트로 만든 것입니다.
            <br />
            <br />
            하지만 이 파일을 정적 리소스 폴더(assets)에 두려고 했을 때는 정상
            동작하지 않았는데, 원인을 추적해보니 <code>/online/**</code> 경로가
            Spring의 ResourceHandlerRegistry에 정적 리소스 핸들러로 등록되어
            있어 해당 경로의 요청은 JSP 엔진을 거치지 않고 파일을 그대로
            스트리밍하기 때문이었습니다. <code>jsp:include</code>는 서블릿
            컨테이너가 대상 파일을 JSP로 컴파일·실행해야 동작하므로, 정적 리소스
            경로가 아닌 뷰 리졸버가 처리하는 <code>WEB-INF/view</code> 하위에
            두어야만 파라미터 기반 분기 렌더링이 정상적으로 동작한다는 것을
            확인하고 구조를 맞췄습니다.
          </p>
          <p>
            <img src={img08} alt="" class="img img-responsive" />
            <sub>icons.jsp 내에 SVG 코드들을 정리</sub>
          </p>
          <p>
            <img src={img09} alt="" class="img img-responsive" />
            <sub>실제 사용하고자 하는 페이지에서 불러오기</sub>
          </p>
        </li>
        <li>
          <h5>JSP 환경에서 커스텀 그래프 만들기</h5>
          <p>
            수강 진도율은 반 잘린 도넛(semicircle) 형태로 표현해야 했는데,
            진행률에 따라 그라데이션 색상까지 달라져야 했기 때문에{" "}
            <code>conic-gradient</code> 같은 순수 CSS 기법보다는 SVG의{" "}
            <code>path</code>와 <code>linearGradient</code> 조합이 정확도와
            브라우저 호환성 면에서 더 낫다고 판단했습니다.
            <br />
            <br />
            다만 이 프로젝트는 클라이언트 프레임워크 없이 JSP로 서버에서
            마크업을 직접 렌더링하는 구조라, 진행률 값이 바뀔 때마다 그래프
            자체를 다시 그려주는 컴포넌트를 만들 수 없었습니다. 그래서 앞서
            아이콘을 재사용 가능한 프래그먼트로 분리했던 <code>icons.jsp</code>
            와 같은 방식으로, <code>progress.jsp</code>도{" "}
            <code>&lt;jsp:include&gt;</code>와 <code>&lt;jsp:param&gt;</code>
            으로 진행률 값(progress)과 인스턴스 식별자(id)를 파라미터로 주입받는
            구조로 만들었습니다. id를 별도로 받게 한 이유는, 한 화면에 PC용과
            모바일용 진행률 그래프가 동시에 렌더링되는데
            <code>&lt;linearGradient id="..."&gt;</code>가 중복되면{" "}
            <code>url(#progress-gradient-...)</code>
            참조가 서로 충돌해 엉뚱한 색이 적용될 수 있기 때문이었습니다.
            <br />
            <br />
            색상 표현은 진행 상태(진행 중/수강 완료)에 따라{" "}
            <code>&lt;c:when&gt;</code>으로 서로 다른{" "}
            <code>linearGradient</code>를 조건부 정의하고, path의 fill을{" "}
            <code>url(#progress-gradient-&#123;id&#125;)</code>로 참조하는
            방식으로 처리했습니다. 그리고 실제 진행률 반영은 서버에서 계산된
            값을 인라인 style의 CSS 커스텀 프로퍼티(--progress)로 주입한 뒤,
            진행률용 path를 배경 반원과 완전히 겹쳐 그려놓고{" "}
            <code>
              transform: rotate(calc(-180deg + var(--progress) * 1.8deg))
            </code>{" "}
            을 쓰는 방식으로 회전시켜 진행률만큼만 드러나 보이도록 구현했습니다.
            반원 전체가 180도이므로 진행률(%) 값에 1.8을 곱해 회전각으로 환산한
            것이고, 여기에 CSS transition을 더해 값이 바뀔 때 도넛이 자연스럽게
            차오르는 애니메이션 얻을 수 있었습니다.
          </p>
          <p>
            <img src={img11} alt="" class="img img-responsive" />
            <sub>progress.jsp 내 SVG 코드</sub>
          </p>
          <p>
            <img src={img12} alt="" class="img img-responsive" />
            <sub>그래프를 불러와 적용</sub>
          </p>
        </li>
      </ul>
    </section>
  </div>
);

export default Project03;
