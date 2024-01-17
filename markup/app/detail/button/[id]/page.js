"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Button01",
      cssFile: [],
      jsFile: [],
      img: "category/img_button01.svg",
      html: `
      <div class="s__container">
      <div class="s__row">
          <div class="s__btn-center-wrap s__btn-wrap">
              <button class="s__btn s__btn-main"><img class="s__btn-img-left" src="/image/icon_home_w.svg" alt="">앞아이콘</button>
              <button class="s__btn s__btn-main">뒤아이콘<img class="s__btn-img-right" src="/image/icon_blog_w.svg" alt=""></button>
              <a href="#" class="s__btn s__btn-main">a태그</a>
          </div>
          <p>사이즈</p>
          <div class="s__btn-center-wrap s__btn-wrap">
              <button class="s__btn s__btn-sm s__btn-main">SMALL</button>
              <button class="s__btn s__btn-main">NOMAL</button>
              <button class="s__btn s__btn-lg s__btn-main">LARGE</button>
          </div>
          <p>정렬</p>
          <div class="s__btn-left-wrap s__btn-wrap">
              <button class="s__btn s__btn-main">MAIN</button>
              <button class="s__btn s__btn-red">RED</button>
              <button class="s__btn s__btn-line">LINE</button>
              <button class="s__btn s__btn-main" disabled>DISABLED</button>
          </div>
          <div class="s__btn-center-wrap s__btn-wrap">
              <button class="s__btn s__btn-main">MAIN</button>
              <button class="s__btn s__btn-red">RED</button>
              <button class="s__btn s__btn-line">LINE</button>
              <button class="s__btn s__btn-main" disabled>DISABLED</button>
          </div>
          <div class="s__btn-right-wrap s__btn-wrap">
              <button class="s__btn s__btn-main">MAIN</button>
              <button class="s__btn s__btn-red">RED</button>
              <button class="s__btn s__btn-line">LINE</button>
              <button class="s__btn s__btn-main" disabled>DISABLED</button>
          </div>
          <div class="s__btn-between-wrap s__btn-wrap">
              <div>
                  <button class="s__btn s__btn-main">MAIN</button>
                  <button class="s__btn s__btn-red">RED</button>
              </div>
              <div>
                  <button class="s__btn s__btn-line">LINE</button>
                  <button class="s__btn s__btn-main" disabled>DISABLED</button>
              </div>
          </div>
          <div class="s__btn-row-wrap s__btn-wrap">
              <button class="s__btn s__btn-main">MAIN</button>
              <button class="s__btn s__btn-red">RED</button>
              <button class="s__btn s__btn-line">LINE</button>
              <button class="s__btn s__btn-main" disabled>DISABLED</button>
          </div>
      </div>
  </div>
      `,
      css: `
/* 이 밑으로는 공통코드에도 적용되어 있어요. 이미 공통코드 적용하신 분은 무시해주세요. */
/* button */
.s__btn {
  margin: 2px;
  font-size: 16px;
  padding: 6px 20px 4px;
  border-radius: 4px;
  transition: filter 0.3s;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.s__btn img {
    width: 24px;
    margin-bottom: 2px;
}
.s__btn-img-left{
    margin-right: 4px;
}
.s__btn-img-right{
    margin-left: 4px;
}
.s__btn-sm {
  font-size: 14px;
  padding: 4px 12px;
  height: 30px;
}
.s__btn-lg {
  font-size: 18px;
  padding: 10px 20px;
  height: 48px;
}
.s__btn-main {
  color: #fff;
  background-color: var(--main);
}
.s__btn-red {
  color: #fff;
  background-color: #dc3545;
}
.s__btn-line {
  border: 1px solid var(--border);
}
.s__btn:disabled {
  opacity: 0.2;
  pointer-events: none;
}
.s__btn-line:hover{
  background-color: #fefefe;
}
.s__btn:hover {
  filter: brightness(0.9);
}
.s__btn:active {
  filter: brightness(0.8);
}
.s__btn-wrap{
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
.s__btn-left-wrap {
  justify-content: flex-start;
}
.s__btn-center-wrap {
  justify-content: center;
}
.s__btn-right-wrap {
  justify-content: flex-end;
}
.s__btn-between-wrap{
  justify-content: space-between;
}
.s__btn-between-wrap > div{
  display: flex;
  align-items: center;
  gap: 4px;
}
.s__btn-row-wrap {
  flex-direction: column;
  align-items: stretch;
}
/* PC (해상도 1024px)*/
@media all and (min-width: 1024px) {
}
/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (max-width: 1023px) {
}
/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width: 767px) {
  .s__btn-wrap {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
  }
  .s__btn-between-wrap > div{
    flex-direction: column;
    align-items: stretch;
  }
}
      
          `,
      js: "",
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
