"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Input",
      cssFile: [],
      jsFile: [],
      img: "category/img_input01.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <input type="text" class="s__input s__input-small s__text" placeholder="small">
      <input type="text" class="s__input s__text" placeholder="text">
      <input type="number" class="s__input s__number" placeholder="number">
    </div>
  </div>
</section>
      `,
      css: `
/* 이 밑으로는 공통코드에도 적용되어 있어요. 이미 공통코드 적용하신 분은 무시해주세요. */
/* input */
.s__input {
  padding: 11px 18px;
  border-radius: 5px;
  border: 1px solid var(--border);
  font-size: 16px;
  min-height: 48px;
  margin: 2px;
}
.s__input-small{
    padding: 8px 14px;
    font-size: 14px;
    min-height: 40px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.s__input::placeholder{
  color: var(--gray);
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
