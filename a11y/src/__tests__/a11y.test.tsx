import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import App from "../App";
import FlightBooking from "../components/FlightBooking";

describe("App", () => {
  it("사용자는 의미 있는 문서 구조를 가진 페이지를 볼 수 있어야 한다.", () => {
    // given
    // when
    render(<App />);

    // then
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});

describe("FlightBooking", () => {
  test("버튼에는 의미있는 레이블이 있어야 한다", () => {
    // given
    // when
    render(<FlightBooking />);

    // then
    expect(screen.getByRole("button", { name: /성인 승객 감소/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /성인 승객 증가/i })).toBeInTheDocument();
  });

  it("승객 수 변경이 스크린 리더에 의해 인식될 수 있도록 ARIA 속성이 적절히 설정되어 있어야 한다", async () => {
    // given
    render(<FlightBooking />);

    const passengerCount = screen.getByRole("status");
    const initialCount = Number(passengerCount.textContent);
    const increaseButton = screen.getByRole("button", { name: /성인 승객 증가/i });

    // when
    await fireEvent.click(increaseButton);

    // then
    await waitFor(() => {
      expect(passengerCount).toHaveAttribute("aria-live", "polite");
      expect(passengerCount).toHaveTextContent(`${initialCount + 1}`);
    });
  });

  it("최소 승객 수보다 승객을 더 줄이려 하면 적절한 메시지가 표시되어야 한다", async () => {
    // given
    render(<FlightBooking />);

    const decreaseButton = screen.getByRole("button", { name: /성인 승객 감소/i });

    // when
    await fireEvent.click(decreaseButton);

    // then
    await waitFor(() => {
      const alertMessage = screen.getByRole("alert");
      expect(alertMessage).toHaveTextContent("최소 1명의 승객이 필요합니다");
      expect(alertMessage).toHaveClass("visually-hidden");
    });
  });

  it("최대 승객 수보다 승객을 더 증가시키려 하면 적절한 메시지가 표시되어야 한다", async () => {
    // given
    render(<FlightBooking />);

    const increaseButton = screen.getByRole("button", { name: /성인 승객 증가/i });
    await fireEvent.click(increaseButton);
    await fireEvent.click(increaseButton);

    // when
    await fireEvent.click(increaseButton);

    // then
    await waitFor(() => {
      const alertMessage = screen.getByRole("alert");
      expect(alertMessage).toHaveTextContent("최대 승객 수에 도달했습니다");
      expect(alertMessage).toHaveClass("visually-hidden");
    });
  });

  it("승객 수가 유효한 범위 내에 있을 때는 상태 메시지가 표시되지 않아야 한다", async () => {
    // given
    render(<FlightBooking />);
    const increaseButton = screen.getByRole("button", { name: /성인 승객 증가/i });

    // when
    await fireEvent.click(increaseButton);

    // then
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
