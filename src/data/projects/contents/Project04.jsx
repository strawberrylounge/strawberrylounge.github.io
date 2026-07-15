// 추후 이미지 순서 정리

// import img01 from "@/assets/images/project/03/01.png";

const Project03 = () => (
  <div className="project-details">
    <section>
      <h4>📌 작업 내용</h4>
      <p className="word-keep-all">
        유아 및 초등학생 대상의 학습 사이트입니다. 사내에서 가장 유저 수가
        많으며 회사의 업력이 오래된 만큼 레거시 코드의 양이 많았습니다. 이
        페이지에서는 해당 프로젝트 유지보수를 하며 겪었던 난항과 제가 대응한
        방식에 대해 설명하려 합니다.
        <br />
        <br />
        엄청납니다...? 주로 유지보수를 했습니다. 주 작업이 유지보수였고, 문제 1.
        레거시 코드가 너무 많음. ie6 대응까지 있는데 그게 정리가 안됨. 스타일
        오버라이딩이 자연스럽게 많고 무거움. 문제 2. 2023년에 리뉴얼을 했으나
        scss 파일 네임이 이니셜로 되어있고 그걸 sub.css 로 한 번에 밀어붙여서
        과거 레거시 코드와 더 얽혀져있음. 문제 3. 작업자가 급할 때 인라인
        스타일을 여기저기 박아둠. 관리가 X.
      </p>
    </section>

    <section>
      <h4>👩‍💻 담당한 작업</h4>
      <ul>
        <li>마크업 및 스타일링 전반 담당</li>
        <li>UI 관련 스크립트 개발(jQuery)</li>
        <li>정적 리소스 관리</li>
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
        </li>
      </ul>
    </section>
  </div>
);

export default Project03;
