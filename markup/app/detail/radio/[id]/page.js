"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Radio01",
      subTitle: "웹접근성: Tab으로 접근시 좌우키보드로 이동됩니다.",
      cssFile: [],
      jsFile: [],
      img: "category/img_radio01.svg",
      html: `
<div class="s__radio-wrap">
  <div class="s__radio">
    <input type="radio" name="ra01" id="ra01_01" checked>
    <label for="ra01_01">radio</label>
  </div>
  <div class="s__radio">
    <input type="radio" name="ra01" id="ra01_02">
    <label for="ra01_02">radio</label>
  </div>
</div>
      `,
      css: `
.s__radio-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.s__radio {
  display: flex;
  align-items: center;
}
.s__radio + .s__radio {
  margin-left: 16px;
}

.s__radio input{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}
.s__radio input:focus-visible ~ label{
  outline: 2px solid var(--black);
}
.s__radio input + label {
  height: 24px;
  display: block;
  background: url(/image/icon_radio_off.svg) no-repeat;
  background-size: contain;
  cursor: pointer;
  font-size: 16px;
  padding-left: 32px;
  border-radius: 4px;
}
.s__radio input:disabled + label {
  background: url(/image/icon_radio_off_disabled.svg) no-repeat;
  background-size: contain;
}
.s__radio input:checked + label {
  background: url(/image/icon_radio_on.svg) no-repeat;
  background-size: contain;
}
.s__radio input:checked:disabled + label {
  background: url(/image/icon_radio_on_disabled.svg) no-repeat;
  background-size: contain;
}
      `,
      js: '',
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
