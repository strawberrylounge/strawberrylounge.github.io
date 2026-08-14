import img01 from "@/assets/images/project/01/01.png";
import img02 from "@/assets/images/project/01/02.png";
import img02m from "@/assets/images/project/01/02m.png";
import img03 from "@/assets/images/project/01/03.png";
import img04 from "@/assets/images/project/01/04.png";
import img05 from "@/assets/images/project/01/05.png";
import img05m from "@/assets/images/project/01/05m.png";
import img06 from "@/assets/images/project/01/06.png";
import img07 from "@/assets/images/project/01/07.png";

const Project01 = () => (
  <div className="project-details">
    <section>
      <h4>📌 작업 배경</h4>
      <p className="mb12">
        이 프로젝트는 분당서울대학교병원에서 제공하는{" "}
        <a
          href="https://www.snubh.org/dh/main/index.do?DP_CD=DCD27&MENU_ID=002005"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          기분기록지
        </a>
        를 웹으로 옮긴 개인 프로젝트입니다.
      </p>
      <p className="mb12">
        저는 뭐든지 기록으로 남기는 것을 좋아합니다. 초등학교 5학년 때부터
        지금까지 꾸준히 일기를 쓸 정도로요. 기분을 기록하는 어플들―아이폰의 기본
        기능, 혹은 앱스토어 순위 상위권에 있는―을 여러가지 사용해보기도
        했습니다. 그러다 우연히 지인이 기분기록지라는 것을 알려주었고, 일 년정도
        사용을 해보게 되었습니다. 매일 꾸준히 기록하면 한 달동안 내 기분이
        어떻게 변화하는지 추적하기 용이했습니다. 그리고 전문가 분들이 만든
        것이라 그런지 단순히 좋음, 나쁨 같은 기준이 아니라 기준에 맞춰서 평가할
        수 있다는 점이 가장 좋았습니다. 실제로 이걸 사용하면서 저는 제 적정
        수면시간을 알게 되기도 했어요.
      </p>
      <p className="mb12">
        다만 사용하면서 불편하거나 아쉬운 점들도 있었습니다. 가장 큰 건,
        아날로그 방식으로 기록해야 하는 점이었죠. 여행을 갈 때 챙겨가기에는
        애매해지는 등, 어디서나 편하게 기록이 가능한 건 아니니까요. 그리고 한 달
        간의 기분이 어떻게 변화하고 있는지는 한 눈에 보기 쉬웠지만 두 달 이상의
        데이터가 누적된 걸 볼 수는 없었고, 무엇이 기분에 영향을 미쳤는지 등도 한
        눈에 파악하기 힘들었습니다.
      </p>
      <p>
        그래서 이 프로젝트를 만들게 되었습니다. 개인적 경험에 기반하여 좋았던
        점들은 차용하고 불편하고 아쉬운 점들은 개선해가는 방식으로요. 아직
        개선할 것이 많이 남아 있어 추후 업데이트가 될 예정입니다.
      </p>
    </section>

    <section>
      <h4>⭐ 주요 특징</h4>
      <ul className="description-list">
        <li>
          <h5>캘린더 기반의 UI로 사용 방법을 직관적으로 표현</h5>
          <div class="description-img">
            <figure>
              <img src={img01} alt="설명 이미지" class="img img-responsive" />
            </figure>
            <figcaption>병원에서 제공하는 기분기록지</figcaption>
          </div>
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
            <figcaption>진입 시 노출되는 홈 화면</figcaption>
          </div>
          <p>
            작업 시작 전, 아날로그 방식으로 기록되는 걸 가정하고 만들어진
            기분기록지를 웹에 어떤식으로 표현할 지를 가장 먼저 고민했습니다.
            그래서 현재 사용 중이거나 혹은 이전에 사용해보았던 기록과 관련된
            서비스들(다이어리나 스케줄러 등)은 어떤 방식을 가장 많이 사용하는 지
            찾아보았고, 그 중 가장 무난하다고 생각한 것이 캘린더 형식의
            UI였습니다.
          </p>
          <p>
            기술 스택을 <code>Supabase</code>와 함께 쓰기 좋은{" "}
            <code>Next.js</code>로 선택을 했기 때문에 캘린더는 자연스럽게{" "}
            <code>react-calendar</code>를 선택하게 되었습니다. 가볍고 커스텀하기
            어렵지 않아서요. 거의 대부분 기본으로 제공하는 기능을 썼고, UI를
            제외하고 제가 커스텀한 부분은,
          </p>
          <p>
            1&#41; 미래 날짜에 기록하는 것을 방지하기 위해{" "}
            <code>react-calendar</code>의 <code>tileDisabled</code>에 날짜를
            검사하는 함수 &nbsp;<code>isFutureDate</code>를 적용했습니다. 추가로
            CSS에서는 라이브러리가 비활성화된 tile에 붙이는 disabled 속성
            셀렉터&nbsp;
            <code>.react-calendar__tile[disabled]</code>에{" "}
            <code>pointer-events: none</code>을 적용해 이중으로 방지했습니다.
          </p>
          <p>
            2&#41; 어떤 날짜에 기록이 있는지 달력에서 바로 확인할 수 있도록,{" "}
            <code>react-calendar</code>의 <code>tileContent</code>를 활용해
            기록이 존재하는 날짜의 tile에 점(dot)을 표시했습니다. 다만 현재는
            최근 3개월간의 기록 날짜만 조회해 판별하는 방식이라, 이보다 이전
            날짜의 기록은 표기되지 않습니다. 추후 조회 범위를 넓혀 개선할
            예정입니다.
          </p>
          <div class="description-img">
            <figure>
              <img src={img03} alt="설명 이미지" class="img img-responsive" />
            </figure>
            <figcaption>커스텀한 부분</figcaption>
          </div>
        </li>
        <li>
          <h5>3-Step 위저드 형태의 기록 작성 플로우</h5>
          <p>
            기분기록지 이미지를 보시면 알 수 있듯, 하루에 작성해야 할 항목이
            적지 않습니다. 그리고 각 항목들에 대한 점수(-4 ~ +4)를 매기는 기준도
            존재하고 있고요. 병원에서 제공하는 기록지에서는 같은 페이지 내에서
            기준에 대한 가이드를 볼 수는 없습니다. 그래서 기준이 기억이 안날
            때마다 다른 페이지로 이동해 가이드를 찾아야 한다는 것이
            불편했습니다. 그리고 이렇게 많은 양을 한 화면에서 보여주기에는
            무리가 있다고 판단했습니다.
          </p>
          <p>
            그래서 단계를 3단계로 구성했습니다. 기록지 표를 기준으로 1단계는
            기분, 2단계는 정서 반응/의욕/생각, 3단계는 선택사항으로 기록하는
            항목들로요. 그리고 각 항목의 필수항목들을 입력 했을 시에만 넘어갈 수
            있게 유효성 검사 로직을 같이 구현했습니다.
          </p>
          <div class="description-img">
            <figure>
              <img src={img04} alt="설명 이미지" class="img img-responsive" />
            </figure>
            <figcaption>구현된 UI</figcaption>
          </div>
          <div class="description-img">
            <figure>
              <img
                src={img05}
                alt="설명 이미지"
                class="img img-responsive pc-only"
              />
              <img
                src={img05m}
                alt="설명 이미지"
                class="img img-responsive m-only"
              />
            </figure>
            <figcaption>
              유효성 검사에 통과하지 못했을 경우(버튼 상태 변경 예정)
            </figcaption>
          </div>
        </li>
        <li>
          <h5>반응형 UI/UX: Viewport에 따라 다른 Form</h5>
          <p>
            초기에는 기록하는 Form을 Modal로 구현할 생각이었습니다. 다만 위에서
            기재한 것과 같이 3-Step으로 나눈다고 하더라도, 내용이 길어 PC에서는
            개인적으로 답답하다는 생각이 들었습니다. 그래서 보통 노션이나 구글
            캘린더에서도 많이 사용하듯, PC에서는 Side Panel로 그리고
            모바일에서는 Modal로, Viewport에 따라 다른 UI를 사용할 수 있게
            구현했습니다.
          </p>
          <p>
            분기는 Custom Hook인 <code>useMediaQuery</code>를 이용해
            처리했습니다. 이 프로젝트가 <i>CSR</i>만이 아닌 <i>SSR</i>도 혼합해
            사용하는 <code>Next.js</code>이기 때문에{" "}
            <i className="font-bold">Hydration Mismatch</i>를 방지하기 위해,
            초기 상태를 서버와 동일한 값으로 시작하고 Mount 후에만 업데이트하는
            패턴도 적용했습니다.
          </p>
          <div class="description-img">
            <figure>
              <img src={img06} alt="설명 이미지" class="img img-responsive" />
            </figure>
            <figcaption>useMediaQuery.ts 내 코드</figcaption>
          </div>
          <div class="description-img">
            <figure>
              <img src={img07} alt="설명 이미지" class="img img-responsive" />
            </figure>
            <figcaption>적용한 모습</figcaption>
          </div>
        </li>

        <li>
          조회/수정/작성 모드를 하나의 상태 머신(loading | view | edit |
          create)으로 관리
        </li>
        <li>
          월별 통계 페이지: Supabase에서 가져온 raw 데이터를 클라이언트에서 월
          단위로 집계, 전월 대비 증감 표시
        </li>
        <li>
          Recharts로 기분 Up/Down을 0 기준 대칭 막대그래프로 시각화 (custom
          tooltip, CSS 변수 기반 라이트/다크 테마 대응) ; 라인그래프로 바꿨음
        </li>
      </ul>
    </section>

    <section>
      <h4>❗ 작업 전 고려한 점</h4>
      <ul>
        <li>CSS 모듈과 전역 분리</li>
        <li>
          - 점수(-4~4)를 감정 색상 스펙트럼으로 매핑하는 컬러 시스템 설계
          (`score.ts`의 `getScoreColor`) — 부정/긍정 극단을 색으로 직관적으로
          인지하게 한 디자인 결정
        </li>

        <li>
          - SCSS 7-1 패턴 유사 구조(abstracts/base/components/pages)로 스타일
          유지보수성 확보
        </li>
        <li>
          Recharts에서 하나의 축(0 기준)에 상승/하강 막대를 대칭으로 그리기
          위한 ReferenceLine + domain/ticks 커스터마이징
        </li>
      </ul>
    </section>

    <section>
      <h4>문제 해결</h4>
      <ul>
        <li>
          stale 컴포넌트 마운트 버그: 기록 작성 완료 후 같은 RecordForm 컴포넌트
          인스턴스가 재사용되면서 이전 상태가 남아있는 문제 발생 → React가 같은
          위치의 같은 타입 엘리먼트는 재조정(reconciliation) 시 인스턴스를
          그대로 유지한다는 점이 원인이었고, panelKey를 도입해 key prop으로 강제
          리마운트시켜 해결. React의 key 기반 reconciliation을 실제로 체감하고
          고친 사례라 기술 설명하기 좋아요.
        </li>
        <li>에러 로그 페이지 연동</li>
      </ul>
    </section>

    <section>
      <h4>추후 업데이트 예정</h4>
      <ul>
        <li>
          stale 컴포넌트 마운트 버그: 기록 작성 완료 후 같은 RecordForm 컴포넌트
          인스턴스가 재사용되면서 이전 상태가 남아있는 문제 발생 → React가 같은
          위치의 같은 타입 엘리먼트는 재조정(reconciliation) 시 인스턴스를
          그대로 유지한다는 점이 원인이었고, panelKey를 도입해 key prop으로 강제
          리마운트시켜 해결. React의 key 기반 reconciliation을 실제로 체감하고
          고친 사례라 기술 설명하기 좋아요.
        </li>
      </ul>
    </section>
  </div>
);

export default Project01;
