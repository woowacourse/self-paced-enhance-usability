# 접근성을 고려한 React 컴포넌트 만들기

### 최종 결과



https://github.com/user-attachments/assets/5e0aef2f-f0ae-48e4-a9ee-3e3b47793629



## 학습 목표

접근성 대응을 효율적으로 하기 위해서는 최소한의 코드 수정으로도 최대한의 접근성 향상을 이끌어낼 수 있는 능력이 필요합니다.  
앞으로 접근성 개선 작업을 진행하면서, 아래와 같은 원칙을 함께 연습해볼 예정입니다.

#### 최소한의 마크업으로 최대한의 접근성 확보하기

- 최소한의 마크업을 사용해 불필요한 요소를 줄이고, HTML의 기본 기능을 최대한 활용합니다.
- 시맨틱 태그를 사용해 웹 페이지의 구조를 명확히 하고, 의미를 직관적으로 전달합니다.
- ARIA 속성은 꼭 필요한 경우에만 사용하여 추가적인 정보를 제공합니다.
- 시각적 표현과 접근성을 모두 만족시키는 방법을 함께 고민합니다.

## Step 1: 언어 설정하기

시각 사용자는 UI에 있는 텍스트들만으로 이 문서가 한국어로 된 문서인지 바로 알 수 있지만 스크린 리더는 알 수 없습니다. 스크린 리더가 문서의 언어를 올바르게 인식할 수 있도록 `index.html`에 `lang` 속성을 설정합니다.

### 키워드

- `lang` 속성

### 결과

모바일 낭독기에서 "heading level 2" -> "머리말 레벨 2"로 읽어줌

## Step 2: 시맨틱 태그 사용하기

웹 접근성의 첫걸음은 의미 있는 HTML을 작성하는 것입니다. 웹 표준을 준수하며, 시맨틱 태그를 적극적으로 활용하여 UI의 의미를 명확하게 전달해 주세요.

### 키워드

- [시맨틱 태그](https://developer.mozilla.org/ko/docs/Learn/Accessibility/HTML)
- `App.tsx` 대상으로만 고민해 보세요

### 결과

[스크린 리더의 HTML5 섹션 요소 지원](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) 글을 참고함.

| Element | JAWS phrase               | NVDA phrase              | Narrator phrase                | TalkBack phrase (spoken only on Chrome) | VoiceOver phrase          |
| ------- | ------------------------- | ------------------------ | ------------------------------ | --------------------------------------- | ------------------------- |
| Header  | banner                    | "banner landmark"        | "header banner landmark"       | "banner"                                | "banner, landmark"        |
| Nav     | navigation region         | "navigation landmark"    | "navigation landmark"          | "navigation"                            | "navigation, landmark"    |
| Aside   | complementary information | "complementary landmark" | "aside complementary landmark" | "complementary"                         | "complementary, landmark" |
| Main    | main region               | "main landmark"          | "main landmark"                | "main"                                  | "main, landmark"          |

처음에는 section태그만 사용했는데 랜드마크가 적용되지 않음. 위 글을 보고 main 태그를 사용해야 "메인, 랜드마크"라고 음성 안내를 해줌을 알게됨.

## Step 3: 버튼 접근성 향상시키기

기본적으로 웹 표준을 준수하는 태그를 사용하는 것만으로도 네이티브 HTML이 지원해주는 접근성 기능을 활용할 수 있습니다. 예를 들어, 클릭할 수 있는 버튼 UI이라면 다른 태그를 사용하고 클릭 이벤트를 추가하는 것보다 `<button>` 태그를 사용하는 것이 명확합니다. 네이티브 HTML의 기본 동작만으로 접근성을 더 개선하기 어려울 때에만 WAI-ARIA 속성을 추가로 활용합니다.

승객 감소/추가 버튼에 의미 있는 레이블을 추가하여, 스크린 리더 사용자도 각 버튼의 기능을 명확히 이해할 수 있도록 레이블을 설정하세요

### 키워드

- [WAI-ARIA](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)
- `aria-label`

### 결과

aria-label을 사용하니 버튼에 있는 텍스트 대신 저 라벨 안에 있는 텍스트를 읽어줌

## Step 4: 변경 사항에 대한 실시간 알림 추가하기

시각 사용자는 버튼을 클릭했을 때 변경된 승객 수를 자연스럽게 눈으로 같이 ‘볼’ 수 있습니다. 스크린 리더 사용자도 버튼을 클릭할 때 승객 수 변경 사항을 모바일 낭독기를 통해 실시간으로 '들을' 수 있게 해주세요.

### 키워드

- `aria-live` 속성

### 결과

aria-live를 사용하니 변동 시 실시간으로 잘 읽어줌. 다만 긴급한 정보가 아니므로 polite 값을 넘겨줌

## Step 5: 최소/최대 값 도달 시 상태 메시지 알림 추가하기

최소/최대 값에 대한 알림도 추가해보겠습니다. 시각 사용자에게는 보이지 않지만, 스크린 리더에서만 필요한 메시지가 있다면 별도로 처리해줄 수 있습니다. 시각적 표현과 접근성을 모두 고려하여, 최소/최대 값 도달 시 시각 사용자와 스크린 리더 사용자 모두에게 적절한 상태 메시지를 전달할 수 있는 방법을 고민해보세요.

### 키워드

- css `.visually-hidden` 클래스
- `role` 속성

### 결과

시각 사용자에게는 보이지 않도록 visually-hidden을 css와 함께 추가해줌. 그리고 그 태그 안에는 출력할 메세지를 전달해줌. 오류 메세지이므로 aria-live값을 assertive를 넘겨줌.

그리고 그 후 다시 버튼을 클릭했을 때는 비활성화된 버튼임을 "흐리게 표시됨"이라고 읽어줄 수 있도록 aria-disabled 속성을 넘겨줌.

## 🎉 완료!

축하합니다! 접근성을 준수하는 첫 번째 React Component를 작성해보았습니다.

예제에서 다룬 내용 외에도 접근성 개선을 위해 시도해볼 수 있는 방법은 다양한데요. 예제에서는 가능한 최소한의 수정만 추가해서 접근성을 개선할 수 있는 요소들을 위주로 먼저 연습해보았습니다.
추가로 개선하고 싶은 부분이 있다면 자유롭게 더 시도해 보세요.

### 더 알아보기

- [React > Accessibility](https://legacy.reactjs.org/docs/accessibility.html)
