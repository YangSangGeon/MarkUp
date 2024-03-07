"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Select Default",
      cssFile: [],
      jsFile: [],
      img: "category/img_select01.svg",
      html: `
<select name="" id="" class="s__select">
  <option value="1" disabled>disabled</option>
  <option value="2" label="label">data</option>
  <option value="3" selected>selected</option>
  <option value="4">data</option>
</select>
      `,
      css: `
/* 이 밑으로는 공통코드에도 적용되어 있어요. 이미 공통코드 적용하신 분은 무시해주세요. */
/* select */
.s__select {
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  background: url("/image/icon_down_arrow.svg") no-repeat 95% 50%/18px auto;
  background-color: #fff;
  padding: 12px 54px 12px 18px;
  border-radius: 5px;
  border: 1px solid var(--border);
  font-size: 16px;
  min-height: 50px;
  margin: 2px;

}
.s__select::-ms-expand {
  display: none; /*for IE10,11*/
}
      `,
      js: '',
    },
    {
      title: "Up Select",
      subTitle: "위로 드랍다운되는 Select",
      cssFile: [],
      jsFile: [],
      img: "category/img_select02.svg",
      html: `
<div class="s__select-up">
    <button>관련 사이트 바로가기</button>
    <div class="dropdown-content">
        <a href="https://www.naver.com/">네이버</a>
        <a href="https://www.google.co.kr/">구글</a>
        <a href="https://www.daum.net/">다음카카오</a>
    </div>
</div>
      `,
      css: `

.s__select-up{
  position: relative;
  display: block;
  width: 200px;
}
.s__select-up button {
  width: 100%;
  padding: 12px 18px;
  border-radius: 5px;
  border: 1px solid var(--border);
  font-size: 16px;
  min-height: 50px;
  background: url("/image/icon_down_arrow.svg") no-repeat 97% 50%/18px auto;
  background-color: #fff;
  cursor: pointer;
  text-align: left;
}
.dropdown-content {
  display: none;
  position: absolute;
  left: 0;
  top: auto;
  bottom: 100%;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: auto;
}
.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: black;
  background-color: #fff;
  border-bottom: 1px solid var(--border);
}
.dropdown-content a:hover{
  background-color: var(--background);
}
.s__select-up.is-open button {
  background-color: var(--background);
}
.s__select-up.is-open .dropdown-content {
  display: block;
}
      `,
      js: `
// 셀렉트(위)
const selectUp = document.querySelectorAll('.s__select-up')
for (let i = 0; i < selectUp.length; i++) {
  const e = selectUp[i];
  e.addEventListener('click', () => {
    e.classList.toggle('is-open')
  })
}
      `,
    },
    {
      title: "Phone Number",
      cssFile: [],
      jsFile: [],
      img: "category/img_select03.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="phone-wrap">
        <select name="" id="" class="s__select">
            <option value="">010</option>
            <option value="">011</option>
        </select>
        <input type="number" class="s__input s__input_phone" maxlength="4">
        <input type="number" class="s__input s__input_phone" maxlength="4">
      </div>
    </div>
  </div>
</section>
      `,
      css: `
.phone-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}

/* 이 밑으로는 공통코드에도 적용되어 있어요. 이미 공통코드 적용하신 분은 무시해주세요. */
/* select */
.s__select {
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  background: url("/image/icon_down_arrow.svg") no-repeat 95% 50%/18px auto;
  background-color: #fff;
  padding: 12px 54px 12px 18px;
  border-radius: 5px;
  border: 1px solid var(--border);
  font-size: 16px;
  min-height: 50px;
  margin: 2px;

}
.s__select::-ms-expand {
  display: none; /*for IE10,11*/
}
      `,
      js: `
//input 숫자 최대 개수
const phoneNum = document.querySelectorAll(".s__input_phone");
for (let i = 0; i < phoneNum.length; i++) {
  const p = phoneNum[i];
  p.addEventListener("input", function (e) {
    const object = e.target;
    if (object.value.length > object.maxLength) {
      object.value = object.value.slice(0, object.maxLength);
    }
  });
}
      `,
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
