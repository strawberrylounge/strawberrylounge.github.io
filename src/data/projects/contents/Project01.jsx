import img01 from "@/assets/images/project/01/01.png";
import img02 from "@/assets/images/project/01/02.png";
import img02m from "@/assets/images/project/01/02m.png";
import img03 from "@/assets/images/project/01/03.png";
import img04 from "@/assets/images/project/01/04.png";
import img05 from "@/assets/images/project/01/05.png";
import img05m from "@/assets/images/project/01/05m.png";
import img06 from "@/assets/images/project/01/06.png";
import img07 from "@/assets/images/project/01/07.png";
import img08 from "@/assets/images/project/01/08.png";
import img09 from "@/assets/images/project/01/09.png";
import img10 from "@/assets/images/project/01/10.png";
import img10m from "@/assets/images/project/01/10m.png";
import img11 from "@/assets/images/project/01/11.png";
import img11m from "@/assets/images/project/01/11m.png";
import img12 from "@/assets/images/project/01/12.png";
import img13 from "@/assets/images/project/01/13.png";
import img13m from "@/assets/images/project/01/13m.png";
import img14 from "@/assets/images/project/01/14.png";
import img14m from "@/assets/images/project/01/14m.png";
import img15 from "@/assets/images/project/01/15.png";
import img16 from "@/assets/images/project/01/16.png";
import img17 from "@/assets/images/project/01/17.png";
import img18 from "@/assets/images/project/01/18.png";
import img19 from "@/assets/images/project/01/19.png";

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
          className="link"
        >
          기분기록지
        </a>
        를 웹으로 옮긴 개인 프로젝트입니다.
      </p>
      <p className="mb12">
        저는 뭐든지 기록으로 남기는 것을 좋아합니다. 초등학교 5학년 때부터
        지금까지 꾸준히 일기를 쓸 정도로요. 기분을 기록하는 어플들―아이폰의 기본
        기능, 혹은 앱스토어 순위 상위권에 있는―을 여러가지 사용해보기도
        했습니다. 그러다 우연히 지인이 기분기록지라는 것을 알려주었고, 일 년
        정도 사용을 해보게 되었습니다. 매일 꾸준히 기록하면 한 달동안 내 기분이
        어떻게 변화하는지 추적하기 용이했습니다. 그리고 전문가 분들이 만든
        것이라 그런지 단순히 좋음, 나쁨 같은 기준이 아니라 기준에 맞춰서 평가할
        수 있다는 점이 가장 좋았습니다. 실제로 이걸 사용하면서 저는 제 적정
        수면시간을 정확히 알게 되기도 했어요.
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
          <div className="description-img">
            <figure>
              <img
                src={img01}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>병원에서 제공하는 기분기록지</figcaption>
          </div>
          <div className="description-img">
            <figure>
              <img
                src={img02}
                alt="설명 이미지"
                className="img img-responsive pc-only"
              />
              <img
                src={img02m}
                alt="설명 이미지"
                className="img img-responsive m-only"
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
            검사하는 함수 <code>isFutureDate</code>를 적용했습니다. 추가로
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
          <div className="description-img">
            <figure>
              <img
                src={img03}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>커스텀한 부분</figcaption>
          </div>
        </li>
        <li>
          <h5>3-Step 위저드 형태의 기록 작성 플로우</h5>
          <p>
            기분기록지 이미지를 보시면 알 수 있듯, 하루에 작성해야 할 항목이
            적지 않습니다. 그리고 각 항목들에 대한 점수<i>(-4 ~ +4)</i>를 매기는
            기준도 존재하고 있고요. 하지만 기분기록지에서는 같은 페이지 내에서
            기준을 확인할 수 없습니다. 그래서 내용이 기억이 안날 때마다 다른
            페이지로 이동해 찾아야 한다는 것이 불편했습니다. 그리고 이렇게 많은
            양을 한 화면에서 보여주기에는 무리가 있다고 판단했습니다.
          </p>
          <p>
            그래서 단계를 3단계로 구성했습니다. 기록지 표를 기준으로 1단계는
            기분, 2단계는 정서 반응/의욕/생각, 3단계는 선택사항으로 기록하는
            항목들로요. 그리고 각 항목의 필수항목들을 입력 했을 시에만 넘어갈 수
            있게 유효성 검사 로직을 같이 구현했습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img04}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>구현된 UI</figcaption>
          </div>
          <div className="description-img">
            <figure>
              <img
                src={img05}
                alt="설명 이미지"
                className="img img-responsive pc-only"
              />
              <img
                src={img05m}
                alt="설명 이미지"
                className="img img-responsive m-only"
              />
            </figure>
            <figcaption>유효성 검사에 통과하지 못했을 경우</figcaption>
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
            <i className="font-bold">Hydration Mismatch</i>를 미연에 방지하기
            위해, 초기 상태를 서버와 동일한 값으로 시작하고 Mount 후에만
            업데이트하는 패턴도 적용했습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img06}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>useMediaQuery.ts 내 코드</figcaption>
          </div>
          <div className="description-img">
            <figure>
              <img
                src={img07}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>적용한 모습</figcaption>
          </div>
        </li>
        <li>
          <h5>조회/수정/작성을 하나의 상태 머신으로 관리</h5>
          <p>
            캘린더에서 날짜를 클릭했을 때, 그 날짜에 기록이 있는지 없는지는
            클릭한 시점에 알 수 없습니다. <code>Supabase</code>에 요청해야 알 수
            있으니까요. 그래서 하나의 Form 컴포넌트가{" "}
            <i>데이터를 불러오는 중</i>, <i>기존 기록을 보여주는 중</i>,{" "}
            <i>그 기록을 수정하는 중</i>, <i>새로 작성하는 중</i>이라는 네 가지
            상황을 모두 감당해야 했습니다.
          </p>
          <p>
            처음에는 <code>isLoading</code>, <code>isEditing</code>,{" "}
            <code>hasRecord</code>처럼 상태를 boolean으로 각각 두는 방법을
            떠올렸습니다. 하지만 이렇게 하면 조합이 8가지로 늘어나고, 그 중에는
            &lsquo;불러오는 중인데 동시에 수정 중&rsquo;처럼{" "}
            <b className="font-bold">실제로는 존재할 수 없는 상태</b>가 섞이게
            됩니다. 그만큼 조건문도 복잡해지고요. 그래서 화면의 상태를{" "}
            <i>loading, view, edit, create</i> 중 반드시 하나만 가질 수 있는
            단일 값<i>(mode)</i>으로 묶었습니다. 언제나 정확히 하나의 상태만
            참이 되기 때문에, 불가능한 조합 자체가 만들어지지 않게요.
          </p>
          <p>
            상태 전이는 이렇게 정리했습니다; 패널이 열리거나 날짜가 바뀌면
            무조건 <code>loading</code>에서 시작하고, 조회 결과에 데이터가
            있으면 <code>view</code>, 없으면 <code>create</code>로 갑니다.{" "}
            <code>view</code>에서 &lsquo;수정하기&rsquo; 버튼을 누르면{" "}
            <code>edit</code>이 되고, 저장하거나 취소하면 다시 <code>view</code>
            로 돌아옵니다. 새로 작성해서 저장했거나 기록을 삭제한 경우에는
            패널을 닫습니다. 입력값을 담는 Form 상태는 <i>mode</i>와 분리해서
            두고, 불러온 기록을 Form 형태로 변환해 <code>view</code>와{" "}
            <code>edit</code>이 같은 데이터를 공유하게 했습니다. 덕분에 수정
            모드로 진입할 때 값을 다시 채워 넣는 별도의 로직이 필요하지
            않았습니다. 렌더링 역시 <code>mode</code>에 따라 <i>Early Return</i>
            으로 나눴기 때문에, 각 화면을 그리는 코드 안에서는 다른 상태를 신경
            쓰지 않아도 됩니다.
          </p>
          <p>
            한 가지 더 고려한 부분은 <i>Race Condition</i>
            입니다. 사용자가 날짜를 빠르게 연달아 클릭하면, 먼저 보낸 요청의
            응답이 뒤늦게 도착해 지금 보고 있는 날짜의 내용을 덮어쓸 수
            있습니다. 그래서 <code>useEffect</code>의 Cleanup에서 플래그를 세워,
            이미 지나간 요청의 응답은 상태에 반영하지 않도록 처리했습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img08}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>케이스를 type으로 분리(중간 코드 생략)</figcaption>
          </div>
          <div className="description-img">
            <figure>
              <img
                src={img09}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>useEffect 내 코드</figcaption>
          </div>
        </li>
        <li>
          <h5>월말 평가</h5>
          <p>
            기분기록지에 있던 월말 평가 문항을 웹으로 옮기면서, 아날로그 기록
            방식에는 없던 플로우를 새로 생각해야 했습니다. 1&#41; 언제 평가할 수
            있는지 2&#41; 이미 평가한 달이면 어떻게 보여줄지 같은 상태들을
            다루는 방식을 주로 신경 썼습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img10}
                alt="설명 이미지"
                className="img img-responsive pc-only"
              />
              <img
                src={img10m}
                alt="설명 이미지"
                className="img img-responsive m-only"
              />
            </figure>
            <figcaption>월말 평가 화면</figcaption>
          </div>
          <p>
            우선, <i>Server</i>와 <i>Client</i>의 관심사를 분리했습니다.{" "}
            <code>/assessment</code> 페이지는 URL의 month 쿼리 파라미터로 어떤
            달을 평가할지 결정합니다. 이 파라미터를 읽는 방법은 두 가지인데,{" "}
            <code>useSearchParams()</code>을 <code>Suspense</code>로 감싸는
            방식보다는 파일을 두 개―<code>page.tsx</code>와{" "}
            <code>AssessmentForm.tsx</code>―로 나누어 파라미터를 읽는 부분과
            인터랙션을 담당하는 부분의 책임을 분리하는 방식을 사용했습니다.
            테스트를 하거나 재사용하기 쉽게 자식 컴포넌트가 더 단순한 방식으로
            쓰여지는 것이 낫다고 판단했기 때문입니다. 이 방식을 사용하면
            fallback UI를 따로 설계할 필요가 없기도 하고요.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img11}
                alt="설명 이미지"
                className="img img-responsive pc-only"
              />
              <img
                src={img11m}
                alt="설명 이미지"
                className="img img-responsive m-only"
              />
            </figure>
            <figcaption>Directory 구조</figcaption>
          </div>
          <p>
            두 번째로, 월말 평가는 말 그대로 한 달을 다 보내고 나서 돌아보는
            기능이라 아직 끝나지 않은 달은 평가할 수 없도록 막아야 했습니다.{" "}
            <code>isAssessableMonth</code>로 URL에 담긴 달이 이미 끝난 달인지
            검사하고, 형식 자체가 잘못된 경우는 <code>isValidMonthKey</code>로
            걸러냈습니다. 둘 중 하나라도 걸리면 폼 대신 &lsquo;아직 평가할 수
            없어요&rsquo; 안내 화면을 보여줍니다.
          </p>
          <p>
            그리고 하루를 기록하는 Form과 같은 패턴으로 평가 Form이 작성과
            수정을 겸하게 만들었습니다. 평가하려는 달에 이미 저장된 평가가
            있는지는 진입 시점엔 알 수 없기 때문에 <code>monthKey</code>가
            정해지면 먼저 기존 평가를 조회하고 → 있으면 <code>answers</code>와{" "}
            <code>existingId</code>를 채워 넣어 그대로 이어서 수정할 수 있게
            하고, 없으면 빈 폼으로 시작합니다. <code>existingId</code>의 유무에
            따라 버튼 라벨(<i>제출하기</i>/<i>수정하기</i>)과 저장 로직이
            자연스럽게 갈리도록 만든 것입니다.
          </p>
          <p>
            마지막으로, <code>isAssessableMonth</code>는 &lsquo;오늘
            날짜&rsquo;를 기준으로 판단하는 로직인데, 서버에서 렌더링한 시점의
            오늘과 클라이언트에서 다시 계산한 오늘이 정확히 같다는 보장이 없어{" "}
            <i className="font-bold">Hydration Mismatch</i>가 날 가능성이
            있었습니다. 그래서 이 판별을 <code>useEffect</code> 안, 즉 마운트된
            이후에만 실행하도록 했습니다. 캘린더 조회 로직에서 쓴{" "}
            <code>useMediaQuery</code> 패턴과 같은 이유입니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img12}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>작성된 코드</figcaption>
          </div>
          <div className="description-img">
            <figure>
              <img
                src={img13}
                alt="설명 이미지"
                className="img img-responsive pc-only"
              />
              <img
                src={img13m}
                alt="설명 이미지"
                className="img img-responsive m-only"
              />
            </figure>
            <figcaption>평가할 수 없을 때</figcaption>
          </div>
        </li>

        <li>
          <h5>통계 페이지: 누적 데이터를 볼 수 없었던 한계 보완</h5>
          <p>
            기분기록지는 한 달 동안의 변화는 한눈에 보기 쉬웠지만, 두 달 이상
            데이터가 쌓였을 때 이를 비교해서 볼 방법은 없었습니다. 그래서 raw
            기록을 <code>Supabase</code>에서 받아와 월 단위로 집계하고, 항목별로
            전월 대비 증감까지 보여주도록 만들었습니다. 통계 페이지를 구현하면서
            가장 신경 썼던 점들 몇 가지를 설명하겠습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img14}
                alt="설명 이미지"
                className="img img-responsive pc-only"
              />
              <img
                src={img14m}
                alt="설명 이미지"
                className="img img-responsive m-only"
              />
            </figure>
            <figcaption>통계(stats/page.tsx) 페이지</figcaption>
          </div>
          <p>
            1&#41; <code>Supabase</code>에는 하루 단위의 raw 기록만 저장되어
            있어서, 월별로 보여주려면 어딘가에서 집계가 필요했습니다. 그리고
            매번 서버에 월별로 요청하는 대신, 최근 1년치 기록을 한 번에 받아온
            뒤 클라이언트에서 <code>record_date</code>(DB Column)를 기준으로
            월별로 묶어 평균과 카운트를 계산하는 방식을 선택했습니다. 기간
            탭(1개월/3개월/6개월/1년)을 눌렀을 때 매번 재조회하지 않고, 이미
            받아둔 데이터를 원하는 기간만큼 잘라서 보여주기 위해서입니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img15}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>
              일 년치 데이터를 받아 클라이언트 사이드에서 집계하는 코드
            </figcaption>
          </div>
          <p>
            2&#41; 일별 기록과 월말 자가평가 점수는 서로 다른 테이블에 저장돼
            있어서, <code>Promise.all</code>로 두 요청을 병렬로 보낸 뒤 결과를
            합쳐 하나의 월별 통계로 만들었습니다. 요청 도중 컴포넌트가
            언마운트되거나 새 요청이 들어간 경우에는, 늦게 도착한 이전 응답이
            상태를 덮어쓰지 않도록 플래그로 막았습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img16}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>데이터 조회 요청하는 코드</figcaption>
          </div>
          <p>
            3&#41; 월말평가는 이미 평가를 마쳤거나 그 달이 끝난 경우에만
            노출되도록 분기해서, 아직 평가할 수 없는 진행 중인 달에는 불필요한
            UI가 뜨지 않게 했습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img17}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>해당 조건에서만 UI 노출하는 코드</figcaption>
          </div>
          <p>
            4&#41; 가장 위쪽에는 일별 기분 변화를 선으로 보여주는 그래프를
            구현했습니다.
          </p>
          <p>
            그래프를 구현하면서 <i>혼재 상태</i>를 표현하는 방식에 대해 가장ㅇ
            고민했습니다. 기분기록지에서는 하루에 최고 기분과 최저 기분을 둘 다
            적을 수 있는데, 라인 그래프는 한 날짜에 값을 하나만 그릴 수
            있습니다. 그래서 혼재일은 최고~최저의 중앙값을 선이 지나는 값으로
            쓰고, 그 위아래로 실제 범위를 <code>Recharts</code>의{" "}
            <code>ErrorBar</code>로 그려 넣었습니다. 점 모양도 일반일은 원,
            혼재일은 마름모로 달리해서 그래프만 봐도 어떤 날이 혼재 상태였는지
            구분되게 했습니다. 툴팁도 같은 기준으로 분기해서, 일반일은 그날의
            기분 점수를, 혼재일 은 최고/최저 값과 함께 &lsquo;혼재
            상태&rsquo;라는 표시를 보여지게 했습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img18}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>혼재일을 별도로 표기한 그래프</figcaption>
          </div>
          <p>
            그리고 기록이 없는 날은 x축 간격이 실제 날짜와 어긋나지 않도록 빈
            값으로 채워두었는데, 그러면 기록과 기록 사이 구간에서 선이 끊겨
            보이는 문제가 있었습니다. 그래서 기록이 있는 두 날짜 사이가 하루
            이상 비어 있으면 그 구간만 선형으로 보간해 옅은 점선으로 이어주고,
            실제 기록 구간은 실선으로 그려 두 구간이 시각적으로는 이어지면서도
            구분되게 처리했습니다.
          </p>
          <div className="description-img">
            <figure>
              <img
                src={img19}
                alt="설명 이미지"
                className="img img-responsive"
              />
            </figure>
            <figcaption>변경 전과 변경 후</figcaption>
          </div>
        </li>
      </ul>
    </section>

    <section style={{ display: "none" }}>
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
      </ul>
    </section>

    <section>
      <h4>🛠️ 문제 해결</h4>
      <p>
        <a
          href="https://app.notion.com/p/strawberrylounge/b605f6b76e7b40eb89931d7c042c2954"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          에러 로그 바로 가기
        </a>
      </p>
    </section>

    <section>
      <h4>🗓️ 업데이트 예정</h4>
      <ul>
        <li>모바일에서의 그래프 UI 개선</li>
        <li>UX 개선(유효성 검사 통과 못했을 경우 다음 버튼 비활성화 등...)</li>
        <li>과거(3개월 전~) 기록 조회 기능 추가</li>
        <li>특이사항(생리, 수면 시간)이 기분에 미치는 영향을 시각화</li>
        <li>정서반응/의욕/생각 데이터의 시각화</li>
      </ul>
    </section>
  </div>
);

export default Project01;
