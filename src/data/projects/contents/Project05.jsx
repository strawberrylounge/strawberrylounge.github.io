const Project05 = () => (
  <div className="project-details">
    <section>
      <h4>📌 작업 배경</h4>
      <p className="mb12 word-keep-all">
        푸르넷 서비스 중 초등학생을 대상으로 하는 영어 단어 학습 서비스입니다.
        교재와 동영상 강의로 단어(발음, 헷갈리는 철자 등)를 익히고, 퀴즈와 리뷰
        게임으로 복습하는 구조입니다.
      </p>
      <p className="mb12 word-keep-all">
        이미 교재와 부교재, 그리고 동영상 강의로 학습까지 한 아이들에게 다양한
        활동을 통해 자기주도적인 학습을 하기 위해 기획된 컨텐츠입니다. 따라서
        '문제를 푼다'라는 느낌 보다는 '게임을 한다'가 중요했습니다. 그래서
        맞혔을 때 보상감, 틀렸을 때 부담 없는 반응, 멈춰 있을 때 다시 참여하게
        만드는 장치를 인터랙션으로 풀어내는 데 집중했습니다.
      </p>
      <p className="word-keep-all">
        실제 서비스의 이미지·음원·문제 대신 도형과 직접 고른 단어로 다시 만든
        목업을 첨부했습니다. 연출 타이밍과 반응형 기준은 실서비스와 같게
        맞췄으니, 직접 눌러보며 확인하실 수 있습니다.
      </p>
    </section>

    <section>
      <h4>👩‍💻 담당한 작업</h4>
      <ul>
        <li>마크업 및 스타일링 전반 담당</li>
        <li>
          정답·오답 피드백, 단계 전환, 무반응 안내, 리뷰 게임 타이머·진행 바
          등의 인터랙션 개발(jQuery)
        </li>
        <li></li>
        {/* <li>코스 6종별 테마 및 태블릿·모바일 가로/세로 반응형 대응</li> */}
      </ul>
    </section>

    <section>
      <h4>❗ 작업 전 고려한 점</h4>
      <ul className="description-list">
        <li>
          <h5>문제마다 페이지가 새로 로드되는 레거시 구조</h5>
          <p>
            기존 서비스는 JSP 서버 렌더링 방식이라, 문제를 하나 풀 때마다 폼을
            제출하기 때문에 매번 페이지 전체를 다시 불러옵니다. 따라서 화면 간에
            애니메이션 상태를 이어갈 수 없었고, 연출 도중에 페이지가 넘어가
            버리면 끊겨 보였습니다. 하지만 구조를 바꿀 수는 없었기 때문에, 모든
            연출을 한 페이지 안에서 완결시키고 페이지 이동 시점을 연출에 맞추는
            방향으로 설계했습니다.
          </p>
        </li>
        <li>
          <h5>가장 많은 점유율을 차지하는 태블릿</h5>
          <p>
            시안은 PC 화면 기준이었습니다만, 실제로는 태블릿을 가로·세로로
            돌려가며 쓰는 경우가 많았습니다. 너비만이 아니라 화면 방향과
            높이까지 기준으로 삼아 레이아웃을 나눴습니다.
          </p>
        </li>
      </ul>
    </section>

    <section>
      <h4>⭐ 주요 구현</h4>
      <ul className="description-list">
        <li>
          <h5>정답과 오답의 감정 곡선을 다르게</h5>
          <p>
            정답은 작게 시작해 살짝 커졌다가 제자리로 돌아오는 back easing으로
            &quot;팡&quot; 터지는 보상감을 주고, 오답은 좌우로 짧게 흔들리는
            연출로 가볍게 넘어가도록 했습니다. 연출 시간도 정답 1.5초, 오답
            0.9초로 다르게 두어, 틀렸을 때는 빨리 다시 도전할 수 있게 했습니다.
          </p>
          <pre className="description-code">
            <code>{`.correct-bg img {
  transform: scale(0.3);
  opacity: 0;
  // 끝에서 살짝 튀어나왔다 돌아오는 back easing
  transition:
    transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    opacity 0.3s ease-out;
}
.correct-bg.show-animation img {
  transform: scale(1);
  opacity: 1;
}

// 오답: 짧고 가볍게 흔들기
@keyframes wrong {
  0%, 100%                { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
  20%, 40%, 60%, 80%      { transform: translateX(8px); }
}`}</code>
          </pre>
        </li>

        <li>
          <h5>연출이 끝난 뒤에 페이지가 넘어가도록</h5>
          <p>
            다음 문제로 가려면 페이지를 다시 불러와야 하므로, 효과음과 연출이
            모두 끝난 시점에 이동하도록 타이밍을 묶었습니다. 연출 중에는 보기를
            비활성화해 중복 입력도 막았습니다.
          </p>
          <pre className="description-code">
            <code>{`// 핵심만 간추린 코드
function showResultAndProceed(resultType) {
  const isCorrect = resultType === "correct";
  const $bg = isCorrect ? $(".correct-bg") : $(".wrong-bg");
  const duration = isCorrect ? 1500 : 900;

  playSound(resultType);   // 효과음과 연출을 동시에 시작
  $bg.show();
  // display 변경이 반영된 다음 프레임에 클래스를 붙여야 트랜지션이 실행됨
  setTimeout(() => $bg.addClass("show-animation"), 50);

  setTimeout(() => {
    if (isCorrect) goNextQuiz();             // 연출이 끝난 뒤 페이지 이동
    $(".answer").prop("disabled", false);    // 연출 중 막아둔 입력 해제
  }, duration);
}`}</code>
          </pre>
        </li>

        <li>
          <h5>페이지가 바뀌어도 &quot;다음 단계&quot;가 느껴지게</h5>
          <p>
            페이지가 매번 새로 로드되니 &quot;단계가 바뀌었다&quot;는 걸
            이어지는 애니메이션으로 보여줄 수 없었습니다. 대신 이전 문제의 단계
            값을 함께 넘겨받아, 단계가 바뀐 첫 화면에서만 단계 라벨이 흔들리도록
            했습니다.
          </p>
          <pre className="description-code">
            <code>{`// 이전 문제와 단계가 다를 때만 연출
if ($("#prevStepCd").val() !== $("#stepCd").val()) {
  $(".label-step").addClass("moved-step");
}`}</code>
          </pre>
        </li>

        <li>
          <h5>멈춰 있는 아이를 다시 게임으로</h5>
          <p>
            일정 시간 아무 조작이 없으면 &quot;정답을 맞춰볼까요?&quot; 안내를
            잠깐 띄웁니다. 계속 떠 있으면 방해가 되므로 1초만 보여주고, 이미
            보기를 눌렀거나 정답을 맞힌 경우에는 띄우지 않습니다.
          </p>
          <pre className="description-code">
            <code>{`let clickDetected = false;
$(".answer").on("click", () => { clickDetected = true; });

setTimeout(() => {
  if (!clickDetected && $("#quizCompt").val() !== "Y") {
    $(".alert-bg2").show();
    setTimeout(() => $(".alert-bg2").hide(), 1000);
  }
}, 10000);`}</code>
          </pre>
        </li>

        <li>
          <h5>시간 제한을 &quot;째깍&quot;으로 표현</h5>
          <p>
            리뷰 게임의 타이머 아이콘이 계속 돌기만 하면 긴장감이 없어서, 멈춰
            있다가 한 바퀴 돌기를 반복하게 했습니다. 시계 초침이 넘어가는 느낌을
            키프레임 구간만으로 만들었습니다.
          </p>
          <pre className="description-code">
            <code>{`.timer::before {
  animation: rotate360 2s ease-in infinite;
}
// 2초 중 가운데 1/3 구간에서만 회전 → 멈췄다 도는 리듬
@keyframes rotate360 {
  0%, 33.33%   { transform: translateX(-50%) rotate(0deg); }
  66.66%, 100% { transform: translateX(-50%) rotate(360deg); }
}`}</code>
          </pre>
        </li>

        <li>
          <h5>남은 시간이 눈에 보이는 진행 바</h5>
          <p>
            리뷰 게임은 문제당 10초 제한이 있어서, 숫자만 보여주는 대신 게이지가
            차오르게 했습니다. 3초가 남으면 게이지가 빨갛게 깜빡이며 서두르라는
            신호를 주고, 시간이 다 되면 Time Over로 기록하고 다음 문제로
            넘어갑니다. 경과 시간은 인터벌 횟수를 세지 않고 시작 시각과의 차이로
            계산해서, 탭이 비활성화되어 인터벌이 늦게 돌아도 시간이 어긋나지
            않게 했습니다.
          </p>
          <pre className="description-code">
            <code>{`// 핵심만 간추린 코드
const LIMIT = 10000;
const startAt = Date.now();

const timerId = setInterval(() => {
  const elapsed = Math.min(Date.now() - startAt, LIMIT);

  // 진행률만큼 게이지가 아래에서 위로 차오름
  $(".progress-value").css("height", (elapsed / LIMIT) * 100 + "%");
  $(".progress-count").text(Math.max(1, Math.floor(elapsed / 1000)));

  // 3초 남았을 때부터 경고 깜빡임
  $(".progress-value").toggleClass("warning", elapsed >= 7000);

  if (elapsed >= LIMIT) {
    clearInterval(timerId);
    timeOver();   // 시간 초과 효과음 → 다음 문제
  }
}, 50);`}</code>
          </pre>
        </li>

        <li>
          <h5>끝난 뒤에는 틀린 단어만 모아서</h5>
          <p>
            문제를 다 풀면 점수를 먼저 보여주고, 버튼을 누르면 틀린 문제만
            카드로 모아 보여줍니다. 카드마다 문제 그림, 내가 고른 답, 정답을
            나란히 두어 무엇을 헷갈렸는지 한눈에 비교할 수 있게 했고, 한 화면에
            두 장씩 넘겨 보도록 했습니다. 100점이면 오답 화면 없이 축하 화면으로
            바로 넘어갑니다.
          </p>
        </li>

        <li>
          <h5>코스별 테마와 기기 방향 대응</h5>
          <p>
            코스 6종마다 배경과 로고를 다르게 보여주고, 태블릿 가로 모드
            중에서도 높이가 낮은 기기는 따로 맞췄습니다.
          </p>
          <pre className="description-code">
            <code>{`// 같은 태블릿 가로 모드라도 높이에 따라 한 번 더 분기
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
  @media (max-height: 450px) { /* 낮은 기기 */ }
  @media (min-height: 451px) { /* 일반 태블릿 */ }
}`}</code>
          </pre>
        </li>
      </ul>
    </section>

    <section>
      <h4>🌱 배운 점</h4>
      <ul className="description-list">
        <li>
          <h5>게임 느낌은 큰 효과보다 타이밍에서 나온다</h5>
          <p>
            같은 연출이라도 길이, easing, 효과음과 맞추는 시점에 따라 체감이
            크게 달라졌습니다. 화려한 효과를 더하기보다 피드백의 리듬을 다듬는
            것이 더 효과적이었습니다.
          </p>
        </li>
        <li>
          <h5>다시 한다면</h5>
          <p>
            코스 테마 6종을 클래스마다 반복해서 작성했는데, 지금이라면 SCSS
            map과 <code>@each</code>로 묶어 테마 추가를 한 줄로 끝낼 수 있게
            하겠습니다.
          </p>
        </li>
      </ul>
    </section>
  </div>
);

export default Project05;
