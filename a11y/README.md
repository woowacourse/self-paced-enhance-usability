# 모두를 위한 접근성

## 학습 목표
최소한의 마크업으로 최대한의 접근성 확보하기

- 최소한의 마크업을 사용합니다.
- 네이티브 HTML 요소의 기본 동작을 최대한 활용합니다.
- 복잡한 ARIA 속성 사용을 최소화합니다.
- 시각적 표현과 접근성을 모두 고려합니다.

## Step 1: 언어 설정하기

시각 사용자는 UI에 있는 텍스트들만으로 이 문서가 한국어로 된 문서인지 바로 알 수 있지만 스크린 리더는 알 수 없습니다. 우선, 스크린 리더가 문서의 언어를 올바르게 인식할 수 있게 해주어야 합니다. `index.html` 의 `lang` 속성값을 변경해 주세요. 

```html
<!doctype html>
<html lang="ko">
  <!-- 나머지 코드는 동일 -->
</html>
```

## Step 2: 시맨틱 태그 사용하기

웹 접근성은 의미있는 HTML을 만드는 것에서 출발합니다. 웹 표준을 준수하는 마크업을 사용하고, 시맨틱 태그를 활용할 수 있는 곳들은 최대한 시맨틱 태그를 사용해 UI를 구현해 주세요. 

```jsx
// App.tsx
function App() {
  return (
    <div className="app">
      <main className="app-main">
        <section className="flight-booking-container">
          <FlightBooking />
        </section>
      </main>
    </div>
  );
}
```

## Step 3: 버튼 접근성 향상시키기

기본적으로 웹 표준을 준수하는 태그를 사용하는 것만으로도 네이티브 HTML이 지원해주는 접근성 기능을 활용할 수 있습니다. 네이티브 HTML의 기본 동작만으로 접근성을 더 개선하기 어렵다면, WAI-ARIA 속성을 추가로 활용합니다. 

승객 감소/추가 버튼에 의미 있는 레이블을 추가해서 스크린 리더 사용자도 각 버튼이 어떤 것을 위한 버튼인지 의미를 명확히 파악할 수 있게 해주세요. 

키워드

- WAI-ARIA
- `arai-label`

```jsx
<button onClick={decrementCount} aria-label="성인 승객 감소">-</button>
<span>{adultCount}</span>
<button onClick={incrementCount} aria-label="성인 승객 증가">+</button>
```

## Step 4: 변경 사항에 대한 실시간 알림 추가하기

시각 사용자는 버튼을 클릭했을 때 변경된 승객 수를 자연스럽게 눈으로 같이 ‘볼’ 수 있습니다. 스크린 리더 사용자도 동일하게 버튼을 클릭했을 때 변경된 승객 수를 모바일 낭독기를 통해 ‘들을’ 수 있게 해주세요.

키워드

- `aria-live` 속성

```jsx
<div className="passenger-count">
  <label htmlFor="adult-count" className="body-text">성인</label>
  <div className="counter">
    <button onClick={decrementCount}>-</button>
    <span aria-live="polite">{adultCount}</span>
    <button onClick={incrementCount}>+</button>
  </div>
</div>
```

## Step 5: 최소/최대 값 도달 시 상태 메시지 알림 추가하기

최소/최대 값에 대한 알림도 추가해보겠습니다. 시각 사용자에게는 보이지 않지만, 스크린 리더에서만 필요한 메시지가 있다면 별도로 처리해줄 수 있습니다. 시각적 표현과 접근성을 모두 고려해서 시각 사용자를 위한 최소/최대 값 안내 방법을 함께 고민해보아도 좋습니다 :)

키워드

- css `.visually-hidden` 클래스
- `role` 속성

```jsx
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// FlightBooking.tsx
const [statusMessage, setStatusMessage] = useState("");

const incrementCount = () => {
  if (adultCount === MAX_PASSENGERS) {
    setStatusMessage("최대 승객 수에 도달했습니다");
    return;
  }

  setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
};

const decrementCount = () => {
  if (adultCount === 1) {
    setStatusMessage("최소 1명의 승객이 필요합니다");
    return;
  }

  setAdultCount((prev) => Math.max(1, prev - 1));
};
  
// JSX 내부
{statusMessage && (
  <div className="visually-hidden" role="alert">
    {statusMessage}
  </div>
)}
```

## 🎉 완료!

축하합니다! 접근성을 준수하는 첫 번째 React Component를 작성해보았습니다. 

예제에서 다룬 내용 외에도 접근성 개선을 위해 시도해볼 수 있는 방법은 다양합니다. 예제에서는 가능한 최소한의 수정만 추가해서 접근성을 개선할 수 있는 요소들을 위주로 먼저 연습해보았습니다. 
추가로 개선하고 싶은 부분이 있다면 자유롭게 더 시도해 보세요.
