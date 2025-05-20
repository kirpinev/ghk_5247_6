import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import smart from "./assets/smart.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import family from "./assets/family.png";
import check from "./assets/check.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { ThxLayout } from "./thx/ThxLayout.tsx";
import { sendDataToGA } from "./utils/events.ts";

interface Product {
  title: string;
  text: string;
  image: string;
}

const familyProducts: Product[] = [
  {
    title: "Все преимущества доступны близким",
    text: "Делитесь бесплатно до конца года",
    image: family,
  },
];

const products: Product[] = [
  {
    title: "+1 топовая категория с кэшбэком 5%",
    text: "Дополнительная категория каждый месяц",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "Эксклюзивный кэшбэк от партнёров",
    text: "Доступ к особой подборке",
    image: gift,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: cashback,
  },
  {
    title: "+3% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: percent,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "По России без ограничений по сумме",
    image: transfer,
  },
  {
    title: "Бесплатное снятие наличных",
    text: "В банкоматах любых банков России",
    image: cash,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

export const App = () => {
  const [thxShow, setThxShow] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [isNextStep, setIsNextStep] = useState(false);
  const [loading, setLoading] = useState(false);

  const connect = () => {
    window.gtag("event", "5247_get_sub", {
      variant_name: "5247_6",
    });
  };

  const submit1 = () => {
    setLoading(true);

    sendDataToGA({
      type: "Личная",
      price: "399",
    }).then(() => {
      setLoading(false);
      setThxShow(true);
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  const submit2 = () => {
    setLoading(true);

    sendDataToGA({
      type: "Семейная + 2 участника",
      price: "699",
    }).then(() => {
      setLoading(false);
      setThxShow(true);
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  if (isNextStep) {
    return (
      <>
        <div className={appSt.container}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Подписка Альфа-Смарт
          </Typography.TitleResponsive>

          <Gap size={32} />

          <div
            style={{
              padding: "1rem",
              backgroundColor: "#F8F8F8",
              borderRadius: "24px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <img src={check} alt="" width={24} height={24} />
              <Typography.Text view="primary-medium" weight="bold">
                Личная подключена
              </Typography.Text>
            </div>
            <Gap size={8} />
            <Typography.Text view="primary-medium">
              0 ₽ в первый месяц, далее — 399 ₽ в месяц
            </Typography.Text>
          </div>
          <Gap size={32} />
          <Typography.Text view="primary-large" weight="bold">
            Хотите поделиться привилегиями с друзьями и близкими?
          </Typography.Text>
          <Gap size={16} />
          <div
            style={{
              border: "1px solid #dff8e5",
              borderRadius: "1.5rem",
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography.Text view="primary-medium" weight="bold">
                  Семейная
                </Typography.Text>

                <div
                  style={{
                    marginLeft: "8px",
                    padding: "4px 8px",
                    backgroundColor: "#dff8e5",
                    borderRadius: "0.7rem",
                  }}
                >
                  <Typography.Text view="primary-small">
                    +2 участника
                  </Typography.Text>
                </div>
              </div>
              <Gap size={8} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography.Text view="primary-medium">
                    +300 ₽ в месяц
                  </Typography.Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Gap size={72} />

        <div className={appSt.bottomBtn}>
          <ButtonMobile
            block
            view="primary"
            loading={loading}
            onClick={submit2}
          >
            Подключить семейную
          </ButtonMobile>
          <Gap size={16} />
          <ButtonMobile
            block
            view="secondary"
            loading={loading}
            onClick={submit1}
          >
            Оставить только личную
          </ButtonMobile>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Первый месяц бесплатно, <br /> далее — 399 ₽ в месяц
          </Typography.Text>
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            В вашей подписке
          </Typography.TitleResponsive>

          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleMobile
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                >
                  {product.title}
                </Typography.TitleMobile>
                <Gap size={8} />
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  color="secondary"
                  defaultMargins={false}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Семейный доступ
          </Typography.TitleResponsive>

          {familyProducts.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                >
                  {product.title}
                </Typography.TitleResponsive>
                <Gap size={8} />
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  color="secondary"
                  defaultMargins={false}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          onClick={() => {
            setIsNextStep(true);
            connect();
          }}
        >
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
