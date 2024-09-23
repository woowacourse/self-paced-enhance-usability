# self-paced-enhance-usability

## Requirements

- [x] 스크린 리더로 성인 승객 수를 늘리거나 줄일 수 있어야 한다.
  - [x] 인원 수는 최소 1명, 최대 3명까지만 가능하게 구현한다.
- [x] 승객 수를 늘리는 경우 실제 스크린 리더는 아래와 같이 읽을 수 있어야 한다.

```
항공권 예매
성인
성인 승객 감소, 버튼
1
성인 승객 증가, 버튼
(선택)
성인 승객 증가
2
(선택)
성인 승객 증가
3
(선택)
최대 승객 수에 도달했습니다.
```

<br/>

---

## 학습

### 스크린리더가 앱을 읽는 방법

- 움직이는 단위: HTML Element
- 순차 탐색: 손가락을 좌우로 스와이프하면 앞뒤로 이동
- 스크린 터치: 터치한 영역에 있는 요소 선택
- 로터를 이용한 탐색: 머릿말, 단어, 글자 단위로도 이동

### Accesible Name

```html
<div>접근성은 중요합니다</div>
```

> 🔊 접근성은 중요합니다

```html
<div aria-label="A11Y는 중요합니다">접근성은 중요합니다</div>
```

> 🔊 A11Y는 중요합니다

스크린 리더는 요소를 포커스했을 때 아래의 우선순위에 따라 읽을 값을 정한다.

1. author(aria-label, aria-labelledby, alt(\<img\>)
2. contents

### Role

스크린리더가 요소를 어떤 방식으로 다룰지 결정하는 속성. role마다 기대되는 스크린리더 동작이 있음.

ex) role=”button”이라면 Accessible Name을 읽을 때 “버튼”을 붙여서 읽는다.

### Semantic tag와 Role

**Semantic tag**는 **암시적으로** Role을 갖고 있다.

button(button), a(link), input type=”checkbox”(checkbox)

### Children Presentational

특정 role은 자식 요소의 Accessible Name을 모아서 요소의 contents로 사용한다.

```html
<div role="button">
  <span>span 1</span>
  <span>span 2</span>
  <span>span 3</span>
</div>
```

> 🔊 span 1 span 2 span 3 버튼

<br/>

---

### 미션 케이스

1. 인원 추가/제거 버튼의 용도가 드러나지 않음 -> `aria-label` 설정
2. 최대/최소 인원 도달 시 음성 피드백이 없음 -> `role="alert"`와 `aria-live="assertive"`로 alert가 갱신됐을 때 적절한 메세지를 음성으로 제공, sr-only 클래스를 생성해 눈에 보이지 않도록 처리
3. 영어와 혼재된 언어 -> lang="ko"로 변경해 한국어 음성이 안정적으로 나오도록 변경

h2의 role="presentation"과 App.tsx의 시멘틱 태그를 적용하지 않은 것은 요구사항과 음성 대사를 맞추기 위함.
