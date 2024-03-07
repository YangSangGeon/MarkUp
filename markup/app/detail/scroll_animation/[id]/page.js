"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Scroll Animation",
      img: "category/img_scroll_animation01.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div style="height: 300px;"></div>
      <p style="text-align: center; font-size: 24px;">Please scroll down 🖱️</p>
      <!-- s__animation 클래스와 함께 원하는 옵션을 클래스에 넣으면 스크롤에 따라 이벤트가 진행됩니다. ex)<div class="s__animation fade-in"></div> -->
      <div style="height: 300px;"></div>
      <div class="s__animation fade-in">
          <p style="text-align: center; font-size: 24px;">fade-in 💨</p>
      </div>
      <div style="height: 200px;"></div>
      <div class="s__animation view-left">
          <p style="text-align: center; font-size: 24px;">view-left ➡️</p>
      </div>
      <div style="height: 200px;"></div>
      <div class="s__animation view-right">
          <p style="text-align: center; font-size: 24px;">view-right ⬅️</p>
      </div>
      <div style="height: 200px;"></div>
      <div class="s__animation view-bottom">
          <p style="text-align: center; font-size: 24px;">view-bottom ⬆️</p>
      </div>
      <div style="height: 200px;"></div>
      <div class="s__animation view-top">
          <p style="text-align: center; font-size: 24px;">view-top ⬇️</p>
      </div>
      <div style="height: 200px;"></div>
      <div class="s__animation zoom-in">
          <p style="text-align: center; font-size: 24px;">zoom-in 🔍</p>
      </div>
      <div style="height: 200px;"></div>
      <div class="s__animation bounce-in">
          <p style="text-align: center; font-size: 24px;">bounce-in 🏀</p>
      </div>
      <div style="height: 200px;"></div>
    </div>
  </div>
</section>
      `,
      css: `

.s__row {
  overflow: hidden;
}
.s__animation {
  animation-duration: 0.7s;
  animation-delay: 0s;
  visibility: visible;
  transition: all 0.7s;
}
/* 그자리에서 숨겼다가 노출 */
.fade-in {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
  opacity: 0;
}
.fade-in.is-active {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  opacity: 1;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* 왼쪽에서 노출 */
.view-left {
  -webkit-animation-name: viewLeft;
  animation-name: viewLeft;
  opacity: 0;
}
.view-left.is-active {
  -webkit-animation-name: viewLeftOn;
  animation-name: viewLeftOn;
  opacity: 1;
}
@keyframes viewLeft {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(-50px);
  }
}
@keyframes viewLeftOn {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
  }
}
/* 오른쪽에서 노출 */
.view-right {
  -webkit-animation-name: viewRight;
  animation-name: viewRight;
  opacity: 0;
}
.view-right.is-active {
  -webkit-animation-name: viewRightOn;
  animation-name: viewRightOn;
  opacity: 1;
}
@keyframes viewRight {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(50px);
  }
}
@keyframes viewRightOn {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
  }
}
/* 아래쪽에서 노출 */
.view-bottom {
  -webkit-animation-name: viewBottom;
  animation-name: viewBottom;
  opacity: 0;
}
.view-bottom.is-active {
  -webkit-animation-name: viewBottomOn;
  animation-name: viewBottomOn;
  opacity: 1;
}
@keyframes viewBottom {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}
@keyframes viewBottomOn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
  }
}
/* 위쪽에서 노출 */
.view-top {
  -webkit-animation-name: viewTop;
  animation-name: viewTop;
  opacity: 0;
}
.view-top.is-active {
  -webkit-animation-name: viewTopOn;
  animation-name: viewTopOn;
  opacity: 1;
}
@keyframes viewTop {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
}
@keyframes viewTopOn {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
  }
}
/* 줌인 */
.zoom-in {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
  opacity: 0;
}
.zoom-in.is-active {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  opacity: 1;
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }
  100% {
    opacity: 1;
  }
}
/* 줌인 */
.zoom-in {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut;
    opacity: 0;
  }
  .zoom-in.is-active {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
    opacity: 1;
  }
  @keyframes zoomOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale3d(0.8, 0.8, 0.8);
    }
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale3d(0.8, 0.8, 0.8);
    }
    100% {
      opacity: 1;
    }
  }
  /* 줌인되며 강조 */
.bounce-in {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut;
    opacity: 0;
  }
  .bounce-in.is-active {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    opacity: 1;
  }
@keyframes bounceIn {
  0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
  }20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
  }40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
  }60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
  }80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
  }100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
  }
}
      `,
      js: `
const ani = document.querySelectorAll(".s__animation");
const bottomNum = 200 //바닥에서 얼마나 떨어져서 이벤트가 실행될 것인가
if (ani) {
  window.addEventListener("scroll", function () {
    var clientHeight = document.documentElement.clientHeight;
    var scrollY = window.scrollY;
    var bottomDistance = scrollY + clientHeight; // 현재 페이지 높이

    for (let i = 0; i < ani.length; i++) {
      const a = ani[i];
      if ((a.offsetTop + bottomNum) <= bottomDistance) {
          a.classList.add("is-active");
      } else {
        a.classList.remove("is-active");
      }
    }
  });
}      
  `,
    },
    {
      title: "Scroll Number Animation",
      img: "category/img_scroll_animation02.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div style="height: 300px"></div>
      <p style="text-align: center; font-size: 24px">Please scroll down 🖱️</p>
      <!-- s__animation 클래스와 함께 원하는 옵션을 클래스에 넣으면 스크롤에 따라 이벤트가 진행됩니다. ex)<div class="s__animation fade-in"></div> -->
      <div style="height: 300px"></div>
      <div class="s__animation fade-in">
        <p style="text-align: center; font-size: 24px">
          <!-- num-count 클래스를 넣고 data-count 안에 원하는 숫자를 넣습니다. -->
          <span class="num-count" data-count="240" style="width:48px; display:inline-block">0</span>
          <span>개의 마크업 컴포넌트, 개발속도 향상 </span>
          <span class="num-count" data-count="54000" style="width:80px; display:inline-block">0</span>
          <span>%</span>
        </p>
      </div>
      <div style="height: 300px"></div>
      <div class="s__animation fade-in">
        <p style="text-align: center; font-size: 24px">
          <!-- num-count 클래스를 넣고 data-count 안에 원하는 숫자를 넣습니다. -->
          <span>월 이용자</span>
          <span class="num-count" data-count="9999999" style="width:120px; display:inline-block">0</span>
          <span>명 달성(했으면 좋겠다💫)</span>
        </p>
      </div>
      <div style="height: 300px"></div>
    </div>
  </div>
</section>
      `,
      css: `
      @charset "utf-8";
.s__row {
  overflow: hidden;
}
.s__animation {
  animation-duration: 0.7s;
  animation-delay: 0s;
  visibility: visible;
  transition: all 0.7s;
}
/* 그자리에서 숨겼다가 노출 */
.fade-in {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
  opacity: 0;
}
.fade-in.is-active {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  opacity: 1;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* 왼쪽에서 노출 */
.view-left {
  -webkit-animation-name: viewLeft;
  animation-name: viewLeft;
  opacity: 0;
}
.view-left.is-active {
  -webkit-animation-name: viewLeftOn;
  animation-name: viewLeftOn;
  opacity: 1;
}
@keyframes viewLeft {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(-50px);
  }
}
@keyframes viewLeftOn {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
  }
}
/* 오른쪽에서 노출 */
.view-right {
  -webkit-animation-name: viewRight;
  animation-name: viewRight;
  opacity: 0;
}
.view-right.is-active {
  -webkit-animation-name: viewRightOn;
  animation-name: viewRightOn;
  opacity: 1;
}
@keyframes viewRight {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(50px);
  }
}
@keyframes viewRightOn {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
  }
}
/* 아래쪽에서 노출 */
.view-bottom {
  -webkit-animation-name: viewBottom;
  animation-name: viewBottom;
  opacity: 0;
}
.view-bottom.is-active {
  -webkit-animation-name: viewBottomOn;
  animation-name: viewBottomOn;
  opacity: 1;
}
@keyframes viewBottom {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}
@keyframes viewBottomOn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
  }
}
/* 위쪽에서 노출 */
.view-top {
  -webkit-animation-name: viewTop;
  animation-name: viewTop;
  opacity: 0;
}
.view-top.is-active {
  -webkit-animation-name: viewTopOn;
  animation-name: viewTopOn;
  opacity: 1;
}
@keyframes viewTop {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
}
@keyframes viewTopOn {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
  }
}
/* 줌인 */
.zoom-in {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
  opacity: 0;
}
.zoom-in.is-active {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  opacity: 1;
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }
  100% {
    opacity: 1;
  }
}
/* 줌인 */
.zoom-in {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
  opacity: 0;
}
.zoom-in.is-active {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  opacity: 1;
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }
  100% {
    opacity: 1;
  }
}
/* 줌인되며 강조 */
.bounce-in {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
  opacity: 0;
}
.bounce-in.is-active {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
  opacity: 1;
}
@keyframes bounceIn {
  0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
  }20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
  }40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
  }60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
  }80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
  }100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
  }
}

      `,
      js: `
const ani = document.querySelectorAll(".s__animation");

const bottomNum = 200; //바닥에서 얼마나 떨어져서 이벤트가 실행될 것인가

function numCounter(num, max) {
  //숫자 증가하는 이벤트
  let thisNum = max;
  const handler = setInterval(() => {
    num.innerHTML = Math.ceil(max - thisNum).toLocaleString();
    if (thisNum < 1) {
      clearInterval(handler);
    }
    const step = thisNum / 4; // 숫자 늘리면 더 느리게 올라갑니다
    thisNum -= step;
  }, 30);
}

if (ani) {
  window.addEventListener("scroll", function () {
    var clientHeight = document.documentElement.clientHeight;
    var scrollY = window.scrollY;
    var bottomDistance = scrollY + clientHeight; // 현재 페이지 높이

    for (let i = 0; i < ani.length; i++) {
      const a = ani[i];
      if (a.offsetTop + bottomNum <= bottomDistance) {
        a.classList.add("is-active");
        const numCount = a.querySelectorAll(".num-count");
        numCount.forEach((e) => {
          if (!e.classList.contains("num-is-active")) {
            e.classList.add("num-is-active");
            numCounter(e, e.dataset.count);
          }
        });
      } else {
        a.classList.remove("is-active");
        const numCount = a.querySelectorAll(".num-count");
        numCount.forEach((e) => {
          e.classList.remove("num-is-active");
        });
      }
    }
  });
}
      
      `,
      download: [{ name: "file01", link: "link01" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
