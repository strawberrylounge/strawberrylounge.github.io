const Project03 = () => (
  <div className="project-details">
    <section>
      <h3>📌 작업 배경</h3>
      <p className="word-keep-all">
        기존에 외부 협력업체에서 관리하던 사이트를 내부에서 운영하고자 개발.
      </p>
    </section>

    <section>
      <h3>🛠️ 담당한 작업</h3>
      <ul>
        <li>마크업(jsp) 및 스타일(SCSS) 관련 디렉토리 구조 설계</li>
        <li>정적 리소스 관리 방식 및 관련 컨벤션 설정</li>
        <li>마크업 및 스타일링 전반 담당</li>
        <li>UI 관련 스크립트 작성(jQuery)</li>
      </ul>
    </section>

    <section>
      <h3>설명?</h3>
      <ul>
        <li>뭘 신경썼고</li>
        <li>어떻게 했으며</li>
      </ul>
    </section>

    <section>
      <h3>🌱 새롭게 익힌 것 or 적응한? 것?</h3>
      <ul>
        <li>
          <h4>microsite 내 스타일/파일 분리</h4>
          <p>
            기존에 개발 되어있는 사이트 내에 개발 예정이었던 마이크로사이트라
            가장 신경 쓴 점은 기존 사이트의 css 영향이 가지 않게 분리하는
            부분이었음. 왜냐하면 기존 레거시가 오래되어서? (10년이상) 그래서
            사용한 건 tiles와 layout파일을 따로 만들어서 어쩌구저쩌구 (이미지
            첨부) scss 구조는 평소에 사용하던 대로 - (scss 구조 이미지 첨부) /
            page or 메뉴 특성별로 파일 나누기 정말 딱 한 jsp에서만 사용하는 것은
            style 태그를 이용해서 사용하는 식으로 override
          </p>
        </li>
        <li>
          <h4>css mask</h4>
          <p>
            (이미지 첨부) 처음 써 봄 코드만 봤을 때는 개념이 잘 이해가 가지
            않았으나 포토샵 및 디자인툴의 layer mask를 생각하니 이해가 되었음
          </p>
        </li>
        <li>
          <h4>svg icon component: jsp param and include</h4>
          <p>
            기존에 svg 코드를 그대로 jsp 내에 쓰는 방식이 많았고 코드 가독성을
            위해 사용함 (예시 이미지 첨부)
          </p>
        </li>
        <li>커스텀 마크업 aria-role</li>
        <li>헷갈리는 마크업 정립</li>
      </ul>
    </section>

    <section>
      <h3>🪨 이슈 & 해결</h3>
      <ul>
        <li>
          <h4>
            scss 컴파일 문제 / dart sass와 node sass의 차이에 따른 기존 문법
            사용 방식 문제
          </h4>
          <p>
            interpolation 등등 . . . 이게 이슈 해결이 맞나? 암튼 최신형인
            dartjs로 옮기고 deprecated되는 문법제거후 sass 모듈/보간법/함수 분리
          </p>
        </li>
        <li>
          <h4>그래프 svg + transform</h4>
          <p>
            도넛이 반 잘린 형태의 progress 그래프라 svg 구현이 가장 낫다고 판단
            (왜그렇게생각했더라) 그런데 jsp 환경이라 어쩌구저쩌구 그래서 svg의
            lineargradient 속성을 이용해서 gradient 표현 후 jsp param을 이용해서
            분리하고 css 변수 값 받아서 path에 css transform으로 rotate
            하는방식으로 구현 했다고 어쩌고저쩌고 아 집 에 가 고 싶 다
          </p>
        </li>
      </ul>
    </section>

    <section>링크... 본문 말고 data에 but 발급 받아야 가능</section>
  </div>
);

export default Project03;
