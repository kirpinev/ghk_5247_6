import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
  const submit = () => {
    window.gtag("event", "5247_get_real_sub", {
      variant_name: "5247_6",
    });
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Только тссс
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Вы поучаствовали в очень важном исследовании, которое поможет создать
          лучший тариф. Вы – наш герой!
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Оформить существующую подписку Альфа-Смарт вы можете на следующем
          экране.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="https://alfa.me/ght"
          onClick={submit}
        >
          Оформить подписку
        </ButtonMobile>
      </div>
    </>
  );
};
