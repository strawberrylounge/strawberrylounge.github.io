/* =========================================================
   Voca Quiz Mockup
   - 실서비스는 문제마다 폼 submit으로 페이지가 새로 로드되는 구조.
     목업은 한 페이지에서 문제를 교체하지만, 연출 타이밍과
     "이전 단계 값과 비교해 단계 전환 연출" 같은 로직은 원래 방식대로 유지했다.
   - 흐름 : 학습 퀴즈(맞힐 때까지) → 학습 완료 → 리뷰 게임(10초 제한) → 점수 → 오답 확인
   ========================================================= */
(function () {
  "use strict";

  /* ---------- 문제 그림 (도형 SVG) ---------- */
  const SVG = {
    apple:
      '<svg viewBox="0 0 100 100"><path d="M50 30c-8-8-30-8-32 14-2 20 14 42 24 42 4 0 6-2 8-2s4 2 8 2c10 0 26-22 24-42-2-22-24-22-32-14z" fill="#ef4b4b"/><path d="M50 30c0-8 2-14 6-18" stroke="#7a4a21" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M56 20c8-8 18-6 20-4-4 8-14 10-20 4z" fill="#4cb86a"/><ellipse cx="34" cy="46" rx="5" ry="9" fill="#fff" opacity=".35"/></svg>',
    sun:
      '<svg viewBox="0 0 100 100"><g stroke="#ffb020" stroke-width="6" stroke-linecap="round"><line x1="50" y1="6" x2="50" y2="18"/><line x1="50" y1="82" x2="50" y2="94"/><line x1="6" y1="50" x2="18" y2="50"/><line x1="82" y1="50" x2="94" y2="50"/><line x1="19" y1="19" x2="27" y2="27"/><line x1="73" y1="73" x2="81" y2="81"/><line x1="19" y1="81" x2="27" y2="73"/><line x1="73" y1="27" x2="81" y2="19"/></g><circle cx="50" cy="50" r="24" fill="#ffd23f"/><circle cx="42" cy="47" r="3" fill="#6b4a10"/><circle cx="58" cy="47" r="3" fill="#6b4a10"/><path d="M42 57q8 7 16 0" stroke="#6b4a10" stroke-width="3" fill="none" stroke-linecap="round"/></svg>',
    fish:
      '<svg viewBox="0 0 100 100"><path d="M70 50 92 32v36z" fill="#ff8a3d"/><ellipse cx="44" cy="50" rx="32" ry="22" fill="#ffa24d"/><path d="M38 30q8 20 0 40" stroke="#ff8a3d" stroke-width="4" fill="none"/><circle cx="26" cy="45" r="5" fill="#fff"/><circle cx="25" cy="45" r="2.5" fill="#222"/></svg>',
    house:
      '<svg viewBox="0 0 100 100"><path d="M14 48 50 16l36 32z" fill="#e8574a"/><rect x="22" y="46" width="56" height="40" fill="#ffd9a8"/><rect x="42" y="60" width="16" height="26" rx="2" fill="#8a5a33"/><rect x="28" y="54" width="10" height="10" fill="#7cc6f2"/><rect x="62" y="54" width="10" height="10" fill="#7cc6f2"/></svg>',
    tree:
      '<svg viewBox="0 0 100 100"><rect x="44" y="58" width="12" height="30" rx="3" fill="#8a5a33"/><circle cx="50" cy="38" r="22" fill="#4cb86a"/><circle cx="32" cy="52" r="15" fill="#43a85f"/><circle cx="68" cy="52" r="15" fill="#43a85f"/><circle cx="44" cy="30" r="5" fill="#fff" opacity=".25"/></svg>',
  };

  /* ---------- 문제 데이터 ---------- */
  const LESSON = "LESSON 1. My Favorite Things";
  const STEP_NAME = { 1: "Warm-up", 2: "Challenge" };
  const QUIZ_TYPE = "그림 보고 단어 고르기";
  const QUESTIONS = [
    { step: 1, word: "apple", choices: ["apple", "ball", "cup", "star"] },
    { step: 1, word: "sun", choices: ["moon", "sun", "bird", "car"] },
    { step: 1, word: "fish", choices: ["fish", "frog", "fork", "foot"] },
    { step: 2, word: "house", choices: ["horse", "mouse", "house", "hose"] },
    { step: 2, word: "tree", choices: ["three", "tree", "free", "true"] },
  ];

  /* ---------- 연출 타이밍 (실서비스와 동일) ---------- */
  const TIMING = {
    beforeCorrect: 250, // 정답 선택 → 정답 연출 시작
    beforeWrong: 500,   // 오답 선택 → 오답 연출 시작
    correct: 1500,      // 정답 연출 길이
    wrong: 900,         // 오답 연출 길이
    idle: 10000,        // 무반응 안내까지 대기
    alert: 1000,        // 안내 노출 시간
  };
  const REVIEW = {
    limit: 10000,       // 문제당 제한 시간
    warning: 7000,      // 3초 남았을 때부터 경고
    afterAnswer: 700,   // 선택 후 효과음이 끝나고 다음 문제로
    afterTimeOver: 900, // 시간 초과 효과음이 끝나고 다음 문제로
  };
  const WRONG_PER_PAGE = 2;

  /* ---------- 요소 ---------- */
  const $ = (sel) => document.querySelector(sel);
  const app = $("#app");
  const els = {
    // 학습 퀴즈
    progress: $("#quizProgress"),
    labelStep: $("#labelStep"),
    stepName: $("#stepName"),
    image: $("#quizImage"),
    choices: $("#choices"),
    nextBtn: $("#nextBtn"),
    alertBg: $("#alertBg"),
    correctBg: $("#correctBg"),
    wrongBg: $("#wrongBg"),
    // 리뷰 게임
    liveScore: $("#liveScore"),
    reviewSteps: $("#reviewSteps"),
    reviewImage: $("#reviewImage"),
    reviewChoices: $("#reviewChoices"),
    reviewProgress: $("#reviewProgress"),
    progressValue: $("#progressValue"),
    progressCount: $("#progressCount"),
    // 결과
    scoreValue: $("#scoreValue"),
    scoreLabel: $("#scoreLabel"),
    wrongList: $("#wrongList"),
    pageInfo: $("#pageInfo"),
    prevPageBtn: $("#prevPageBtn"),
    nextPageBtn: $("#nextPageBtn"),
    soundBtn: $("#soundBtn"),
  };
  document.querySelector(".screen-quiz .lesson").textContent = LESSON;

  /* ---------- 상태 ---------- */
  const study = { order: [], index: 0, prevStep: null, solved: false, locked: false, clickDetected: false };
  const review = { order: [], index: 0, score: 0, answers: [], locked: false };
  const result = { wrongs: [], page: 0 };
  let timers = [];

  // 화면 전환 시 남은 타이머가 다른 화면에 영향을 주지 않도록 한 곳에서 관리
  function later(fn, ms) {
    const id = setTimeout(fn, ms);
    timers.push(id);
    return id;
  }
  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
    stopReviewTimer();
  }

  /* ---------- 효과음 (Web Audio로 생성) ---------- */
  let audioCtx = null;
  let soundOn = true;
  function tone(freqs, opt) {
    if (!soundOn) return;
    const o = Object.assign({ dur: 0.14, type: "sine", gap: 0.09, vol: 0.16 }, opt);
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();
      freqs.forEach((f, i) => {
        const t = audioCtx.currentTime + i * o.gap;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = o.type;
        osc.frequency.setValueAtTime(f, t);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(o.vol, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + o.dur);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + o.dur + 0.02);
      });
    } catch (e) {
      /* 오디오를 쓸 수 없는 환경이면 무음으로 진행 */
    }
  }
  const SFX = {
    check: () => tone([880], { dur: 0.06, type: "triangle", vol: 0.1 }),
    correct: () => tone([659, 784, 1047], { dur: 0.2, type: "triangle" }),
    wrong: () => tone([330, 247], { dur: 0.24, type: "square", gap: 0.16, vol: 0.06 }),
    alert: () => tone([523, 659], { dur: 0.12, gap: 0.1, vol: 0.1 }),
    tick: () => tone([1200], { dur: 0.03, type: "square", vol: 0.03 }),
    tickHurry: () => tone([1600], { dur: 0.04, type: "square", vol: 0.05 }),
    timeOver: () => tone([520, 390, 260], { dur: 0.2, type: "sawtooth", gap: 0.14, vol: 0.06 }),
  };

  /* ---------- 유틸 ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function shuffledQuestions(shuffleOrder) {
    const list = QUESTIONS.map((q) => Object.assign({}, q, { choices: shuffle(q.choices) }));
    return shuffleOrder ? shuffle(list) : list;
  }
  // 같은 클래스를 다시 붙여 애니메이션을 처음부터 재생
  function replayClass(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
  }
  // display 변경을 먼저 반영(리플로우)한 뒤 클래스를 붙여야 트랜지션이 실행된다
  function showOverlay(el) {
    el.hidden = false;
    el.classList.add("animating");
    void el.offsetWidth;
    el.classList.add("show-animation");
  }
  function hideOverlay(el) {
    el.classList.remove("show-animation", "animating");
    el.hidden = true;
  }
  function showScreen(name) {
    document.querySelectorAll(".screen").forEach((s) => {
      s.classList.toggle("is-active", s.dataset.screen === name);
    });
  }
  function isScreen(name) {
    return document.querySelector(`.screen[data-screen="${name}"]`).classList.contains("is-active");
  }
  function choiceButtons(words) {
    return words
      .map((c) => `<button type="button" class="answer answer-text font-gamtan" data-choice="${c}">${c}</button>`)
      .join("");
  }
  function resetAll() {
    clearTimers();
    [els.alertBg, els.correctBg, els.wrongBg].forEach(hideOverlay);
  }

  /* =========================================================
     학습 퀴즈 : 맞힐 때까지 다시 고른다
     ========================================================= */
  function startQuiz() {
    resetAll();
    study.order = shuffledQuestions(false);
    study.index = 0;
    study.prevStep = null;
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = study.order[study.index];
    study.solved = false;
    study.locked = false;
    study.clickDetected = false;

    els.progress.textContent = `${study.index + 1} / ${study.order.length}`;
    els.labelStep.textContent = q.step;
    els.stepName.textContent = STEP_NAME[q.step];

    // 이전 문제와 단계가 다를 때만 단계 라벨 흔들기
    if (study.prevStep !== null && study.prevStep !== q.step) {
      replayClass(els.labelStep, "moved-step");
    }
    study.prevStep = q.step;

    els.image.innerHTML = SVG[q.word];
    replayClass(els.image, "is-enter");
    els.choices.innerHTML = choiceButtons(q.choices);

    startIdleTimer();
  }

  // 일정 시간 아무 조작이 없으면 "정답을 맞춰볼까요?"를 잠깐 띄운다
  function startIdleTimer() {
    const index = study.index;
    later(() => {
      if (index === study.index && !study.clickDetected && !study.solved) flashAlert();
    }, TIMING.idle);
  }

  function flashAlert() {
    SFX.alert();
    showOverlay(els.alertBg);
    els.alertBg.classList.remove("animating"); // 클릭으로 바로 닫을 수 있게
    later(() => hideOverlay(els.alertBg), TIMING.alert);
  }

  function setChoicesDisabled(container, disabled) {
    container.querySelectorAll(".answer").forEach((b) => {
      // 이미 판정된 보기는 계속 잠가 둔다
      b.disabled = disabled || b.classList.contains("wrong") || b.classList.contains("correct");
    });
  }

  function onStudyChoice(btn) {
    if (study.solved || study.locked) return;
    study.locked = true;
    study.clickDetected = true;
    SFX.check();

    const isCorrect = btn.dataset.choice === study.order[study.index].word;
    btn.classList.add(isCorrect ? "correct" : "wrong");
    setChoicesDisabled(els.choices, true); // 연출 중 중복 입력 방지

    if (isCorrect) {
      study.solved = true;
      later(() => showResult(true), TIMING.beforeCorrect);
    } else {
      later(() => showResult(false), TIMING.beforeWrong);
    }
  }

  // 정답·오답 연출. 정답이면 연출이 끝난 뒤 다음 문제로, 오답이면 다시 고를 수 있게
  function showResult(isCorrect) {
    const bg = isCorrect ? els.correctBg : els.wrongBg;
    isCorrect ? SFX.correct() : SFX.wrong();
    showOverlay(bg);

    later(() => {
      hideOverlay(bg);
      if (isCorrect) {
        goNextQuestion();
      } else {
        study.locked = false;
        setChoicesDisabled(els.choices, false);
      }
    }, isCorrect ? TIMING.correct : TIMING.wrong);
  }

  function goNextQuestion() {
    study.index += 1;
    if (study.index < study.order.length) {
      renderQuestion();
    } else {
      clearTimers();
      showScreen("done");
    }
  }

  /* =========================================================
     리뷰 게임 : 문제당 10초, 한 번만 고른다
     ========================================================= */
  function openReviewStart() {
    resetAll();
    showScreen("reviewStart");
  }

  function startReview() {
    resetAll();
    review.order = shuffledQuestions(true);
    review.index = 0;
    review.score = 0;
    review.answers = [];
    setLiveScore(0, false);
    showScreen("review");
    renderReviewQuestion();
  }

  function renderReviewQuestion() {
    const q = review.order[review.index];
    review.locked = false;

    els.reviewSteps.innerHTML = review.order
      .map((_, i) => {
        if (i < review.index) return '<li class="step step-complete"><span class="sr-only">완료</span></li>';
        if (i === review.index) return `<li class="step step-current font-nanum" aria-current="step">${i + 1}</li>`;
        return '<li class="step step-incomplete"><span class="sr-only">다음 단계</span></li>';
      })
      .join("");

    els.reviewImage.innerHTML = SVG[q.word];
    replayClass(els.reviewImage, "is-enter");
    els.reviewChoices.innerHTML = choiceButtons(q.choices);

    startReviewTimer();
  }

  function setLiveScore(score, animate) {
    els.liveScore.textContent = score;
    els.liveScore.value = score;
    if (animate) replayClass(els.liveScore, "bump");
  }

  /* ---------- 타이머 ----------
     setInterval 횟수를 세지 않고 시작 시각과의 차이로 계산한다.
     탭이 비활성화되어 인터벌이 늦게 돌아도 경과 시간은 정확하다. */
  const timer = { id: null, startAt: 0, lastSec: -1 };

  function startReviewTimer() {
    stopReviewTimer();
    timer.startAt = Date.now();
    timer.lastSec = -1;
    timer.id = setInterval(updateReviewTimer, 50);
    updateReviewTimer();
  }

  function stopReviewTimer() {
    if (timer.id) clearInterval(timer.id);
    timer.id = null;
  }

  function resetGauge() {
    els.progressValue.style.setProperty("--p", 0);
    els.progressValue.classList.remove("warning");
    els.progressCount.textContent = "0";
    els.reviewProgress.setAttribute("aria-valuenow", "0");
  }

  function updateReviewTimer() {
    const elapsed = Math.min(Date.now() - timer.startAt, REVIEW.limit);

    // 진행률 : 아래에서 위로 차오른다
    els.progressValue.style.setProperty("--p", elapsed / REVIEW.limit);

    // 카운트 1 ~ 10
    const count = Math.max(1, Math.min(Math.floor(elapsed / 1000), 10));
    els.progressCount.textContent = count;
    els.reviewProgress.setAttribute("aria-valuenow", String(count));

    // 3초 남았을 때부터 경고
    els.progressValue.classList.toggle("warning", elapsed >= REVIEW.warning);

    // 1초마다 째깍 소리, 경고 구간에서는 더 높게
    const sec = Math.floor(elapsed / 1000);
    if (sec !== timer.lastSec && elapsed < REVIEW.limit) {
      timer.lastSec = sec;
      elapsed >= REVIEW.warning ? SFX.tickHurry() : SFX.tick();
    }

    if (elapsed >= REVIEW.limit) {
      stopReviewTimer();
      onTimeOver();
    }
  }

  function onReviewChoice(btn) {
    if (review.locked) return;
    review.locked = true;
    stopReviewTimer();

    const q = review.order[review.index];
    const isCorrect = btn.dataset.choice === q.word;

    btn.classList.add(isCorrect ? "correct" : "wrong");
    setChoicesDisabled(els.reviewChoices, true);
    review.answers.push({ word: q.word, picked: btn.dataset.choice, isCorrect });

    if (isCorrect) {
      SFX.correct();
      review.score += Math.round(100 / review.order.length);
      setLiveScore(review.score, true);
    } else {
      SFX.wrong();
    }
    later(goNextReview, REVIEW.afterAnswer);
  }

  function onTimeOver() {
    if (review.locked) return;
    review.locked = true;
    setChoicesDisabled(els.reviewChoices, true);
    SFX.timeOver();
    const q = review.order[review.index];
    review.answers.push({ word: q.word, picked: null, isCorrect: false });
    later(goNextReview, REVIEW.afterTimeOver);
  }

  function goNextReview() {
    review.index += 1;
    resetGauge();
    if (review.index < review.order.length) {
      renderReviewQuestion();
    } else {
      showScore();
    }
  }

  /* =========================================================
     결과
     ========================================================= */
  function showScore() {
    clearTimers();
    const correctCnt = review.answers.filter((a) => a.isCorrect).length;
    const score = Math.round((correctCnt / review.answers.length) * 100);

    if (score === 100) {
      showScreen("perfect");
      SFX.correct();
      return;
    }
    els.scoreValue.textContent = score;
    els.scoreLabel.textContent = score;
    els.scoreLabel.value = score;
    result.wrongs = review.answers
      .map((a, i) => Object.assign({ no: i + 1 }, a))
      .filter((a) => !a.isCorrect);
    result.page = 0;
    showScreen("score");
  }

  function renderWrongPage() {
    const total = Math.max(1, Math.ceil(result.wrongs.length / WRONG_PER_PAGE));
    const start = result.page * WRONG_PER_PAGE;
    const items = result.wrongs.slice(start, start + WRONG_PER_PAGE);

    els.wrongList.innerHTML = items
      .map((a) => {
        const myAnswer = a.picked
          ? `<div class="my-answer font-gamtan"><span>${a.picked}</span><em>내 답</em></div>`
          : '<div class="my-answer is-timeover font-gamtan"><span>Time Over</span><em>내 답</em></div>';
        return `
        <article class="review-game-result">
          <div class="result-top">
            <h3 class="result-type font-nanum">${a.no}. ${QUIZ_TYPE}</h3>
            <div class="result-image">${SVG[a.word]}</div>
          </div>
          <div class="result-answer">
            ${myAnswer}
            <div class="answer font-gamtan"><span>${a.word}</span><em>정답</em></div>
          </div>
        </article>`;
      })
      .join("");

    els.pageInfo.textContent = `${result.page + 1} / ${total}`;
    els.prevPageBtn.disabled = result.page === 0;
    els.nextPageBtn.disabled = result.page >= total - 1;
    els.prevPageBtn.parentElement.hidden = total === 1;
  }

  /* =========================================================
     이벤트
     ========================================================= */
  els.choices.addEventListener("click", (e) => {
    const btn = e.target.closest(".answer");
    if (btn && !btn.disabled) onStudyChoice(btn);
  });
  els.reviewChoices.addEventListener("click", (e) => {
    const btn = e.target.closest(".answer");
    if (btn && !btn.disabled) onReviewChoice(btn);
  });

  // 아직 맞히지 않았는데 다음을 누르면 안내만 보여준다
  els.nextBtn.addEventListener("click", () => {
    study.clickDetected = true;
    if (!study.solved) flashAlert();
  });
  els.alertBg.addEventListener("click", () => hideOverlay(els.alertBg));

  $("#goReviewBtn").addEventListener("click", openReviewStart);
  $("#startReviewBtn").addEventListener("click", startReview);

  $("#checkWrongBtn").addEventListener("click", () => {
    renderWrongPage();
    showScreen("wrong");
  });
  els.prevPageBtn.addEventListener("click", () => {
    result.page -= 1;
    renderWrongPage();
  });
  els.nextPageBtn.addEventListener("click", () => {
    result.page += 1;
    renderWrongPage();
  });
  $("#finishBtn").addEventListener("click", openReviewStart);
  $("#perfectBtn").addEventListener("click", openReviewStart);

  $("#closeBtn").addEventListener("click", () => {
    if (isScreen("quiz") || isScreen("review")) {
      if (!confirm("학습이 완료되지 않았습니다. 처음부터 다시 할까요?")) return;
      isScreen("quiz") ? startQuiz() : openReviewStart();
      return;
    }
    startQuiz();
  });

  /* ---------- 목업 패널 ---------- */
  document.querySelectorAll(".swatch").forEach((sw) => {
    sw.addEventListener("click", () => {
      app.className = app.className.replace(/theme-\d/, `theme-${sw.dataset.theme}`);
      document.querySelectorAll(".swatch").forEach((s) => s.classList.toggle("is-on", s === sw));
    });
  });
  els.soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    els.soundBtn.setAttribute("aria-pressed", String(soundOn));
    els.soundBtn.textContent = soundOn ? "효과음 ON" : "효과음 OFF";
  });
  $("#restartBtn").addEventListener("click", startQuiz);
  $("#jumpReviewBtn").addEventListener("click", openReviewStart);

  startQuiz();
})();
