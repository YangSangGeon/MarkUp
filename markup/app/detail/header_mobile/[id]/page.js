"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Header_Mobile01 (Mobile Only)",
      subTitle:"PC, 태블릿에서는 숨겨집니다",
      img: "category/img_header_mobile01.svg",
      html: `
<header class="s__header">
  <!-- PC 헤더 위치 -->
  <div class="s__container mobile-menu">
      <div class="s__row">
          <a href="#" class="s__logo"><img src="/image/icon_logo.svg" alt="logo" title="홈으로 이동"></a>
          <a href="#" class="menu"><img class="icon-is-open" src="/image/icon_menu.svg" alt="메뉴열기"><img class="icon-menu-off" src="/image/icon_close.svg" alt="메뉴닫기"></a>
      </div>
      <ul class="mobile-menu__list">
          <li>
              <a href="#" class="mobile-menu__step1">step01</a>
              <ul>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
              </ul>
          </li>
          <li>
              <a href="#" class="mobile-menu__step1">step01</a>
              <ul>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
              </ul>
          </li>
          <li>
              <a href="#" class="mobile-menu__step1">step01</a>
              <ul>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
              </ul>
          </li>
      </ul>
  </div>
</header>
      `,
      css: `
/* header */
header.s__header{
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background-color: #fff;
  top: 0;
}
header .s__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  height: 100%;
}
/* header-mobile */
.mobile-menu {
  display: none;
  height: 60px;
}
.mobile-menu .s__row {
  align-items: center;
  width: 100%;
}
.mobile-menu .s__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.mobile-menu ul ul {
  display: none;
}
.mobile-menu ul ul.is-open {
  display: block;
}
.mobile-menu__list {
  display: none;
}
.mobile-menu__list.is-open {
  display: block;
  height: 100vh;
  background-color: #fff;

}
.mobile-menu__step1 {
  display: block;
  text-align: center;
  padding: 16px;
  /* border-bottom: 1px solid var(--border); */
}
.mobile-menu__step1.is-open + ul {
  display: block;
  text-align: center;
}
.mobile-menu__step2{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
}
.mobile-menu__step1.is-open + ul {
  /* border-bottom: 1px solid var(--border); */
  background-color: #f7f7f7;
}

.icon-menu-off{
  display: none;
}
.menu.is-open .icon-is-open{
  display: none;
}
.menu.is-open .icon-menu-off{
  display: block;
}

@media (max-width: 1600px) {
}
@media (max-width: 1366px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .pc-menu {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
      
      `,
      js: `
        //mobile 메뉴
        let menuBtn = document.querySelectorAll(".mobile-menu__step1");
        let mobileMenuBtn = document.querySelector(".menu");
        let mobileMenuList = document.querySelector(".mobile-menu__list");

        for (let i = 0; i < menuBtn.length; i++) {
          const m = menuBtn[i];
          m.addEventListener("click", () => {
            menuBtn.forEach((e) => {
              if (e == m) {
                e.classList.toggle("is-open");
              } else {
                e.classList.remove("is-open");
              }
            });
          });
        }
        mobileMenuBtn.addEventListener("click", () => {
          if (mobileMenuList.classList.contains("is-open")) {
            menuBtn.forEach((e) => {
              e.classList.remove("is-open");
            });
          }
          mobileMenuList.classList.toggle("is-open");
          mobileMenuBtn.classList.toggle("is-open");
        });
      `,
    },
    {
      title: "Header_Mobile02 (Mobile Only)",
      subTitle:"PC, 태블릿에서는 숨겨집니다",
      img: "category/img_header_mobile02.svg",
      html: `
<header class="s__header">
  <!-- PC 헤더 위치 -->
  <div class="s__container mobile-menu">
      <div class="s__row">
          <a href="#" class="s__logo"><img src="/image/icon_logo.svg" alt="logo" title="홈으로 이동"></a>
          <a href="#" class="menu"><img class="icon-is-open" src="/image/icon_menu.svg" alt="메뉴열기"><img class="icon-menu-off" src="/image/icon_close.svg" alt="메뉴닫기"></a>
      </div>
      <ul class="mobile-menu__list">
          <li>
              <a href="#" class="mobile-menu__step1"><span>step01</span><img src="/image/icon_down_arrow.svg" alt="열기"></a>
              <ul>
                  <li><a href="#" class="mobile-menu__step2"><span>step02</span><img src="/image/icon_down_arrow.svg" alt="열기"></a>
                      <ul>
                          <li><a href="#" class="mobile-menu__step3">step03</a></li>
                          <li><a href="#" class="mobile-menu__step3">step03</a></li>
                          <li><a href="#" class="mobile-menu__step3">step03</a></li>
                      </ul></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
              </ul>
          </li>
          <li>
              <a href="#" class="mobile-menu__step1"><span>step01</span><img src="/image/icon_down_arrow.svg" alt="열기"></a>
              <ul>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
              </ul>
          </li>
          <li>
              <a href="#" class="mobile-menu__step1"><span>step01</span><img src="/image/icon_down_arrow.svg" alt="열기"></a>
              <ul>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
                  <li><a href="#" class="mobile-menu__step2">step02</a></li>
              </ul>
          </li>
      </ul>
  </div>
</header>
      `,
      css: `
      /* header */
header.s__header{
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background-color: #fff;
  top: 0;
}
header .s__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  height: 100%;
}
/* header-mobile */
.mobile-menu {
  display: none;
  height: 60px;
}
.mobile-menu .s__row {
  align-items: center;
  width: 100%;
}
.mobile-menu .s__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.mobile-menu ul ul {
  display: none;
}
.mobile-menu ul ul.is-open {
  display: block;
}
.mobile-menu__list {
  display: none;
}
.mobile-menu__list.is-open {
  display: block;
  height: 100vh;
  background-color: #fff;
}
.mobile-menu__step1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
}
.mobile-menu__step1 img {
  width: 24px;
  transition: all 0.3s;
}
.mobile-menu__step1.is-open > img {
  transform: rotate(180deg);
}
.mobile-menu__step1.is-open + ul {
  display: block;
  text-align: center;
}
.mobile-menu__step2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
}
.mobile-menu__step2 img {
  width: 24px;
  transition: all 0.3s;
}
.mobile-menu__step1.is-open + ul {
  border-bottom: 1px solid var(--border);
  background-color: #f7f7f7;
}
.mobile-menu__step2.is-open > img {
  transform: rotate(180deg);
}
.icon-menu-off {
  display: none;
}
.menu.is-open .icon-is-open {
  display: none;
}
.menu.is-open .icon-menu-off {
  display: block;
}
.mobile-menu__step3{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
}
.mobile-menu__step2 + ul {
  background-color: #fff;
}
.mobile-menu__step2.is-open + ul {
  display: block;
}
@media (max-width: 1600px) {
}
@media (max-width: 1366px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .mobile-menu {
    display: block;
  }
}

      `,
      js: `
        //mobile 메뉴
        let menuBtn = document.querySelectorAll(".mobile-menu__step1");
        let menuBtnStep2 = document.querySelectorAll(".mobile-menu__step2");
        let mobileMenuBtn = document.querySelector(".menu");
        let mobileMenuList = document.querySelector(".mobile-menu__list");

        for (let i = 0; i < menuBtn.length; i++) {
          const m = menuBtn[i];
          m.addEventListener("click", () => {
            menuBtn.forEach((e) => {
              if (e == m) {
                e.classList.toggle("is-open");
              } else {
                e.classList.remove("is-open");
              }
            });
          });
        }
        for (let i = 0; i < menuBtnStep2.length; i++) {
          const m = menuBtnStep2[i];
          m.addEventListener("click", () => {
            menuBtnStep2.forEach((e) => {
              if (e == m) {
                e.classList.toggle("is-open");
              } else {
                e.classList.remove("is-open");
              }
            });
          });
        }

        mobileMenuBtn.addEventListener("click", () => {
          if (mobileMenuList.classList.contains("is-open")) {
            menuBtn.forEach((e) => {
              e.classList.remove("is-open");
            });
          }
          mobileMenuList.classList.toggle("is-open");
          mobileMenuBtn.classList.toggle("is-open");
        });
      `,
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
