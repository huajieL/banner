/*
 * @Author: 李华杰 wb-lhj742350@alibaba-inc.com
 * @Date: 2023-03-30 14:49:38
 * @LastEditors: 李华杰 wb-lhj742350@alibaba-inc.com
 * @LastEditTime: 2023-03-31 11:31:32
 * @FilePath: /笔试/my-app/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import logo from './logo.svg';
import { IntlProvider } from 'react-intl';
import CouponBanner from './pages/Banner';
import './App.css';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const locale = {
  en: require('../src/locale/en-US.json'),
  zh: require('../src/locale/zh-CN.json')
}
function App() {
  
  return (

    <div className="App">
      <CouponBanner />
    </div>


  );
}

export default App;
