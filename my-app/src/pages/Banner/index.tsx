/*
 * @Author: 李华杰 wb-lhj742350@alibaba-inc.com
 * @Date: 2023-03-07 11:43:31
 * @LastEditors: 李华杰 wb-lhj742350@alibaba-inc.com
 * @LastEditTime: 2023-03-31 11:35:05
 * @FilePath: /笔试/interview-assignments/front-end/lihuajie/src/pages/Banner/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, useEffect, useState, memo } from "react";
import styles from "./index.module.css";
import { useTranslation} from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const locale = {
  en: require('../../locale/en-US.json'),
  zh: require('../../locale/zh-CN.json')
}

const Banner: FC = () => {
 
  const { t } = useTranslation();

  useEffect(() => {
    i18next.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: locale.en
      },
      zh: {
        translation: locale.zh
      }
    }
  });
  }, [i18next]);
  useEffect(() => {
 
    //设定24小时倒计时
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date("2023-03-08 16:14:05");
      const time = end.getTime() - now.getTime();
      const h = Math.floor(time / 1000 / 60 / 60);
      const m = Math.floor((time / 1000 / 60 / 60 - h) * 60);
      const s = Math.floor(((time / 1000 / 60 / 60 - h) * 60 - m) * 60);
      const timeBox = document.getElementById("timeBox");
      if (timeBox) {
        timeBox.innerHTML = `Ends in <span>${h}</span> h <span>${m}</span> m <span>${s}</span>s`;
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.leftBox}>
          <div className={styles.user}></div>
          <div className={styles.titleBox}>
            <div className={styles.title}>
              {t("title")}
              {/* Enjoy now your
              favorite brands with */}
            </div>
            <div className={styles.num}>30% off</div>
          </div>
        </div>
   
        <div className={styles.rightBox}>
          <div className={styles.timeBox} id='timeBox'>
            {/* Ends in <span>23</span> h <span>14</span> m <span>45</span>s */}
          </div>
          <div className={styles.coupon}>
            <div className={styles.couponNum}>
              30% <span>OFF</span>{" "}
            </div>
            <div className={styles.couponTextBox}>
              <div className={styles.couponTitle}>Welcome Coupon</div>
              <div className={styles.couponPCText}>
                Apilicable to all items <br />
                Min. order 100$ . Vilid for 30 days from now
              </div>
              <div className={styles.couponAPPText}>
                Save up to 20$.ALL items included.<br />
                Min.spend: 10,00$.Valid for 30 day(s) 
              </div>
              <div className={styles.PCBut}>iLo quiero !</div>
              <div className={styles.APPBut}>I want it !</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
