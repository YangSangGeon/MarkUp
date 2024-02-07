"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "ToolTip",
      subTitle: "Pc에서는 마우스오버, Mobile에서는 클릭으로 작동됩니다.",
      cssFile: [],
      jsFile: [],
      img: "category/img_header_pc01.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <button class="s__btn s__btn-line" data-tooltip="마우스오버시<br>툴팁이 노출됩니다.">ToolTip</button>
      <button class="s__btn s__btn-line" data-tooltip="마우스오버시<br>툴팁이 노출됩니다.">ToolTip</button>
    </div>
  </div>
</section>
      `,
      css: `
.tooltip {
  position: fixed;
  padding: 10px 20px;
  border: 1px solid var(--border);
  border-radius: 4px;
  text-align: center;
  font: italic 14px/1.3 sans-serif;
  color: #333;
  background: #fff;
  margin: 2px;
}
      `,
      js: `
let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  // data-tooltip 속성이 있는 요소
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml || window.innerWidth <= 767) return;

  // 툴팁 요소를 만듭니다.
  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // 툴팁 요소를 data-tooltip 속성이 있는 요소 위, 가운데에 위치시킵니다.
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // 툴팁이 창 왼쪽 가장자리를 넘지 않도록 합니다.

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // 툴팁이 창 위로 넘치면 요소 아래에 보여줍니다.
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};
document.onmouseup = function (event) {
  let target = event.target;

  // data-tooltip 속성이 있는 요소
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml || 767 < window.innerWidth) return;

    // 툴팁 요소를 만듭니다.
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);
  
    // 툴팁 요소를 data-tooltip 속성이 있는 요소 위, 가운데에 위치시킵니다.
    let coords = target.getBoundingClientRect();
  
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // 툴팁이 창 왼쪽 가장자리를 넘지 않도록 합니다.
  
    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // 툴팁이 창 위로 넘치면 요소 아래에 보여줍니다.
      top = coords.top + target.offsetHeight + 5;
    }
  
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
}

document.onmousedown = function(e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};
document.onmouseout = function(e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};
// 참고한사이트 : https://ko.javascript.info/task/behavior-tooltip
      `,
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
