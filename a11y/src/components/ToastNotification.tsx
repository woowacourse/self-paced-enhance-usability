import "./ToastNotification.css";

interface ToastNotificationProps {
  message: string;
}

const ToastNotification = ({ message }: ToastNotificationProps) => {
  return (
    <div className="toast-notification" role="alert">
      <span>{message}</span>
    </div>
  );
};

export default ToastNotification;
