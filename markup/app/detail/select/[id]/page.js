"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Select01",
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
  background: url("/image/image/icon_down_arrow.svg") no-repeat 95% 50%/18px auto;
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
      title: "Select02",
      cssFile: [],
      jsFile: [],
      img: "category/img_select02.svg",
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
  background: url("/image/image/icon_down_arrow.svg") no-repeat 95% 50%/18px auto;
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
