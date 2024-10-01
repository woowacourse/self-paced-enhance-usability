import "./Toast.css";

const Toast = ({ children }: React.PropsWithChildren) => {
  return (
    <span className="toast" aria-live="polite">
      {children}
    </span>
  );
};

export default Toast;
