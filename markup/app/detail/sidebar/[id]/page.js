"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Sidebar01",
      cssFile: [],
      jsFile: [],
      img: "category/img_sidebar01.svg",
      html: `
<section>
  <div class="s__sidebar-wrap">
    <div class="s__sidebar is-open">
        <button class="s__sidebar-open-btn"><img src="/image/icon_menu.svg" alt="사이드바 열기/닫기"></button>
        <ul class="s__sidebar-contents">
            <li>
                <a href="#!" class="side-menu__step1"><img src="/image/icon_home.svg" alt=""><span>메뉴1</span></a>
                <ul>
                    <li><a href="#!">메뉴2</a></li>
                    <li><a href="#!">메뉴2</a></li>
                    <li><a href="#!">메뉴2</a></li>
                    <li><a href="#!">메뉴2</a></li>
                    <li><a href="#!">메뉴2</a></li>
                </ul>
            </li>
            <li>
                <a href="#!" class="side-menu__step1"><img src="/image/icon_date.svg" alt=""><span>메뉴1</span></a>
                <ul>
                    <li><a href="#!">메뉴2</a></li>
                    <li><a href="#!">메뉴2</a></li>
                    <li><a href="#!">메뉴2</a></li>
                    <li><a href="#!">메뉴2</a></li>
                    <li><a href="#!">메뉴2</a></li>
                </ul>
            </li>
            <li>
                <a href="#!" class="side-menu__step1"><img src="/image/icon_top_arrow.svg" alt=""><span>메뉴1</span></a>
            </li>
            <li>
                <a href="#!" class="side-menu__step1"><img src="/image/icon_search.svg" alt=""><span>메뉴1</span></a>
            </li>
            <li>
                <a href="#!" class="side-menu__step1"><img src="/image/icon_share.svg" alt=""><span>메뉴1</span></a>
            </li>
        </ul>
    </div>
    <div class="s__sidebar-right">
        <div class="s__row">
            <a class="side-next" href="#!">오른쪽내용</a>
        </div>
    </div>
  </div>
</section>
      `,
      css: `
/* 넓이설정 */
:root {
  --maxWidth: 180px; /* 최대넓이 */
  --minWidth: 64px; /* 최소넓이 */
}
.s__sidebar-open-btn {
  margin: 16px;
  width: 32px;
}
.s__sidebar-wrap {
  display: flex;
  overflow: hidden;
}
.s__sidebar {
  background-color: #fff;
  border-right: 1px solid var(--border);
  height: 100vh;
}
.s__sidebar.is-open .s__sidebar-contents > li > a {
  width: var(--maxWidth);
}
.s__sidebar.is-open .s__sidebar-contents > li > a span {
  display: block;
}
.s__sidebar .s__sidebar-contents > li > a {
  width: var(--minWidth);
  transition: all 0.3s;
  overflow: hidden;
}
.s__sidebar .s__sidebar-contents > li > a span {
  display: none;
}
.s__sidebar-right {
  transition: all 0.3s;
  width: calc(100% - var(--minWidth));
  background-color: var(--border);
  padding: 16px 0;
}
.s__sidebar.is-open + .s__sidebar-right {
  width: calc(100% - var(--maxWidth));
}
.s__sidebar-contents > li {
  position: relative;
}
.s__sidebar-contents > li a {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 16px;
  height: 48px;
}
.s__sidebar-contents > li a img {
  min-width: 32px;
  min-height: 32px;
  width: 32px;
  height: 32px;
}
.s__sidebar-contents > li a span {
  margin-left: 8px;
}
.s__sidebar-contents > li:hover > a,
.s__sidebar-contents > li a:hover {
  background-color: #eeeeee3e;
  color: var(--main);
}
.s__sidebar-contents ul {
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #fff;
  border: 1px solid var(--border);
  display: none;
}
.s__sidebar-contents ul a {
  width: var(--maxWidth);
}
.s__sidebar-contents ul:hover,
.s__sidebar-contents > li a:hover + ul,
.s__sidebar-contents > li a.is-open + ul {
  display: block;
}
      `,
      js: `
// 사이드바
let sideOpenBtn = document.querySelector(".s__sidebar-open-btn");//사이드바 오픈 버튼
let sidebar = document.querySelector(".s__sidebar");

sideOpenBtn.addEventListener('click', () => {
    sidebar.classList.toggle('is-open')
})

let sideMenu = document.querySelectorAll(".side-menu__step1");
  
for (let i = 0; i < sideMenu.length; i++) {
  const p = sideMenu[i];
  p.addEventListener("focusin", () => {
    sideMenu.forEach((e) => {
      e.classList.remove("is-open");
    });
    p.classList.add("is-open");
  });
  p.addEventListener("mouseover", () => {
    sideMenu.forEach((e) => {
      e.classList.remove("is-open");
    });
  });
}
let preMenu = document.querySelector(".s__sidebar-open-btn"); //사이드바 이전요소
let nextMenu = document.querySelector(".side-next"); //사이드바 다음요소
preMenu &&
  preMenu.addEventListener("focusin", () => {
    sideMenu.forEach((e) => {
      e.classList.remove("is-open");
    });
  });
nextMenu &&
  nextMenu.addEventListener("focusin", () => {
    sideMenu.forEach((e) => {
      e.classList.remove("is-open");
    });
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
