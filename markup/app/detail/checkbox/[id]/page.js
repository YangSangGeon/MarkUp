"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Checkbox01",
      cssFile: [],
      jsFile: [],
      img: "category/img_checkbox01.svg",
      html: `
<div class="s__checkbox-wrap">
  <div class="s__checkbox">
    <input type="checkbox" class="s__checkbox-ck" id="ch01_01" checked>
    <label for="ch01_01">checkbox</label>
  </div>
</div>
      `,
      css: `
.s__checkbox-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.s__checkbox {
  display: flex;
  align-items: center;
}
.s__checkbox + .s__checkbox {
  margin-left: 16px;
}
.s__checkbox input{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}
.s__checkbox input:focus ~ label{
  border: 2px solid var(--black);
  height: 28px;
}
.s__checkbox input + label {
  height: 24px;
  display: block;
  background: url(/image/icon_checkbox_off.svg) no-repeat;
  background-size: contain;
  cursor: pointer;
  font-size: 16px;
  padding-left: 32px;
  border-radius: 4px;
}
.s__checkbox input:disabled + label {
  background: url(/image/icon_checkbox_off_disabled.svg) no-repeat;
  background-size: contain;
}
.s__checkbox input:checked + label {
  background: url(/image/icon_checkbox_on.svg) no-repeat;
  background-size: contain;
}
.s__checkbox input:checked:disabled + label {
  background: url(/image/icon_checkbox_on_disabled.svg) no-repeat;
  background-size: contain;
}
      `,
      js: '',
    },
    {
      title: "Checkbox02",
      cssFile: [],
      jsFile: [],
      img: "category/img_checkbox02.svg",
      html: `
<div class="s__checkbox-wrap">
  <div class="s__checkbox">
      <input type="checkbox" class="s__checkbox-total" id="ch01_all">
      <label for="ch01_all">checkboxAll</label>
  </div>
  <div class="s__checkbox">
      <input type="checkbox" class="s__checkbox-ck" id="ch01_01" checked>
      <label for="ch01_01">checkbox</label>
  </div>
  <div class="s__checkbox">
      <input type="checkbox" class="s__checkbox-ck" id="ch01_02">
      <label for="ch01_02">checkbox</label>
  </div>
</div>
      `,
      css: `
.s__checkbox-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.s__checkbox {
  display: flex;
  align-items: center;
}
.s__checkbox + .s__checkbox{
  margin-left: 16px;
}
.s__checkbox input{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}
.s__checkbox input:focus ~ label{
  border: 2px solid var(--black);
  height: 28px;
}
.s__checkbox input + label {
  height: 24px;
  display: block;
  background: url(/image/icon_checkbox_off.svg) no-repeat;
  background-size: contain;
  cursor: pointer;
  font-size: 16px;
  padding-left: 32px;
  border-radius: 4px;
}
.s__checkbox input:disabled + label {
  background: url(/image/icon_checkbox_off_disabled.svg) no-repeat;
  background-size: contain;
}
.s__checkbox input:checked + label {
  background: url(/image/icon_checkbox_on.svg) no-repeat;
  background-size: contain;
}
.s__checkbox input:checked:disabled + label {
  background: url(/image/icon_checkbox_on_disabled.svg) no-repeat;
  background-size: contain;
}
      `,
      js: `
        // 체크박스
        const checkTotalBtns = document.querySelectorAll(".s__checkbox-total");
        const checkBtns = document.querySelectorAll(".s__checkbox-ck");

        function handlerAgrTotal() {
          const totalArea = this.closest(".s__checkbox-wrap");
          const checkboxList = totalArea.querySelectorAll(".s__checkbox-ck");

          checkboxList.forEach((ckbox) => {
            if (this.checked) {
              ckbox.checked = true;
              ckbox.value = "Y";
            } else {
              ckbox.checked = false;
              ckbox.value = "N";
            }
          });
        }

        function handlerAgrCheck() {
          const totalArea = this.closest(".s__checkbox-wrap");
          const total = totalArea.querySelector(".s__checkbox-total");
          const checkboxes = totalArea.querySelectorAll(".s__checkbox-ck");
          const checkboxSelect = totalArea.querySelectorAll(
            ".s__checkbox-ck:checked"
          );

          if (checkboxes.length === checkboxSelect.length) {
            total.checked = true;
            total.value = "Y";
          } else {
            total.checked = false;
            total.value = "N";
          }
        }

        checkTotalBtns.forEach((total) => {
          total.addEventListener("click", handlerAgrTotal);
        });

        checkBtns.forEach((ck) => {
          ck.addEventListener("click", handlerAgrCheck);
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
