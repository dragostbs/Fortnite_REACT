import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

const Alert = () => {
  const { alertName: name = "", closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast light-blue darken-4">
        {name} was added into basket !
      </div>
    </div>
  );
};

export default Alert;
