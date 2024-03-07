"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "File Default",
      cssFile: [],
      jsFile: [],
      img: "category/img_file01.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
    <div class="s__file-wrap s__singlefile-wrap">
      <div class="s__file-btn">
          <input type="file" class="s__file" id="btnFile">
          <label for="btnFile" class="s__btn s__btn-line">업로드</label>
      </div>
      <div class="s__singlefile-list"></div>
    </div>
    </div>
  </div>
</section>
      `,
      css: `
/* 싱글파일 */
.s__singlefile-wrap {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.s__singlefile-list {
  width: calc(100% - 88px);
}
.s__singlefile-wrap .file-get-list-name {
  background-color: var(--background);
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-left: 8px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--border);
}
.s__file-wrap input[type="file"]:focus-visible ~ .s__btn{
  outline: 2px solid var(--black);
}
.s__file-wrap input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}
      `,
      js: `
//싱글 파일첨부
const fileUploads = document.querySelectorAll(
  '.s__singlefile-wrap input[type="file"]'
);
if (fileUploads) {
  fileUploads.forEach((fileInput) => {
    fileInput.addEventListener("change", () => {
      let file = fileInput.files;
      const fileName = file[0].name;
      const fileSize = (file[0].size / (1024 * 1024)).toFixed(1);

      // p 태그 생성
      const fileGetListName = document.createElement("p");
      fileGetListName.className = "file-get-list-name";
      fileGetListName.textContent = fileName + '(' + fileSize + 'MB)';
      fileInput.parentNode.parentNode.querySelector(
        ".s__singlefile-list"
      ).innerHTML = ""; //초기화
      fileInput.parentNode.parentNode
        .querySelector(".s__singlefile-list")
        .appendChild(fileGetListName);
    });
  });
}
      `,
    },
    {
      title: "Multi File Default",
      cssFile: [],
      jsFile: [],
      img: "category/img_file02.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="s__file-wrap s__multi-file-wrap">
          <div class="s__file-btn">
              <input type="file" class="s__multi-file" multiple id="multi01_file">
              <label for="multi01_file" class="s__btn s__btn-line">업로드</label>
          </div>
          <div class="s__file-list-wrap">
              <ul class="s__file-list" id="multi01List"></ul>
          </div>
      </div>
    </div>
  </div>
</section>
      `,
      css: `
/* 파일 버튼 */
.s__file-wrap input[type="file"]:focus-visible ~ .s__btn{
  outline: 2px solid var(--black);
}
.s__file-wrap input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}
/* 멀티파일 */
.s__file-list {
  display: flex;
  flex-wrap: wrap;
}
.s__file-list > li {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  position: relative;
  height: 48px;
  margin: 6px 5px;
  padding: 0 24px;
  border-radius: 24px;
}
.file-get-list-name {
  font-size: 14px;
  font-weight: 400;
  color: #222;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
  margin-right: 12px;
  letter-spacing: -0.56px;
}
.remove_button span {
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
}
.remove_button::before,
.remove_button::after {
  width: 14px;
  height: 2px;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ccc;
  border-radius: 2px;
}
.remove_button::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.remove_button::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.remove_button {
  width: 20px;
  height: 20px;
  position: relative;
}
      `,
      js: `
//멀티 파일첨부
const fileMultiUploads = document.querySelectorAll(
  '.s__multi-file-wrap input[type="file"][multiple]'
);

if (fileMultiUploads) {
  fileMultiUploads.forEach((fileInput) => {
    const dataTransfer = new DataTransfer();
    fileInput.addEventListener("change", () => {
      let fileArr = fileInput.files;

      if (fileArr != null && fileArr.length > 0) {
        // =====DataTransfer 파일 관리========
        for (let i = 0; i < fileArr.length; i++) {
          
          const currentFile = fileArr[i];

          let isDuplicate = false;
          for (let j = 0; j < dataTransfer.items.length; j++) {
            if (
              dataTransfer.items[j].kind == "file" &&
              dataTransfer.items[j].getAsFile().name === currentFile.name) {
              isDuplicate = true;
              break;
            }
          }

          if (!isDuplicate) {
            dataTransfer.items.add(currentFile);
          }
        }
        fileInput.files = dataTransfer.files;
        const underscoreIndex = fileInput.id.indexOf("_");
        const prefix =
          underscoreIndex !== -1
            ? fileInput.id.slice(0, underscoreIndex)
            : fileInput.id;
        const modifiedId = prefix + "List";

        //for문으로 리스트 만들어 줌
        let fileList = "";
        let fileDiv = document.createElement("div");

        for (let i = 0; i < fileInput.files.length; i++) {
          const currentFile = fileInput.files[i];
          const fileSize = (currentFile.size / (1024 * 1024)).toFixed(
            1
          );

          // 새로운 li 요소 생성
          const listItem = document.createElement("li");
          listItem.id = 'data'+currentFile.lastModified;

          // p 태그 생성
          const fileGetListName = document.createElement("p");
          fileGetListName.className = "file-get-list-name";
          fileGetListName.textContent = currentFile.name +'(' + fileSize + 'MB)';

          // button 태그 생성
          const removeButton = document.createElement("button");
          removeButton.className = "btns remove_button";
          removeButton.setAttribute(
            "data-index",
            'data'+currentFile.lastModified
          );
          removeButton.setAttribute("data-target-input", fileInput.id);

          // span 태그 생성
          const span = document.createElement("span");
          span.textContent = currentFile.name + ' 삭제';

          // button에 span 추가
          removeButton.appendChild(span);

          // li에 p와 button 추가
          listItem.appendChild(fileGetListName);
          listItem.appendChild(removeButton);

          // 대상 요소에 li 추가
          fileDiv.appendChild(listItem);

          fileList += fileDiv.innerHTML;
          fileDiv.innerHTML = "";
        }

        document.querySelector("#" + modifiedId).innerHTML = fileList;

        // ==========================================

        // 삭제
        const fileBottomList =
          document.querySelectorAll(".s__file-list");
        fileBottomList.forEach((e) => {
          e.addEventListener("click", function (event) {
            if (
              e.id == modifiedId &&
              event.target.className == "btns remove_button"
            ) {
              targetFile = event.target.dataset.index;
              // ============DataTransfer================
              for (let i = 0; i < dataTransfer.files.length; i++) {
                if (
                  "data" + dataTransfer.files[i].lastModified ==
                  targetFile
                ) {
                  dataTransfer.items.remove(i);
                  break;
                }
              }

              document.getElementById(
                event.target.dataset.targetInput
              ).files = dataTransfer.files;
              if (e.querySelector("#" + targetFile)) {
                e.querySelector("#" + targetFile).remove();
                console.log(
                  "input FIles 삭제후=>",
                  document.getElementById(event.target.dataset.targetInput).files
                );
              }

            }
          });
        });
      }
    });
  });
}
      `,
    },
    {
      title: "Multi File Drag",
      cssFile: [],
      jsFile: [],
      img: "category/img_file03.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <label for="multiDrag01_file" class="s__file-wrap s__drag-multi-file-wrap">
          <div class="s__drag-multi-file-info">
              <img src="/image/icon_add_photo.svg" alt="이미지업로드">
              <p>파일을 업로드해주세요.</p>
          </div>
          <input type="file" class="s__drag-multi-file" multiple id="multiDrag01_file"> 
          <div class="s__file-list-wrap">
              <ul class="s__drag-file-list" id="multiDrag01List"></ul>
          </div>
      </label>
    </div>
  </div>
</section>
      `,
      css: `
/* 파일 버튼 */
.s__file-wrap input[type="file"]:focus-visible ~ .s__btn{
  outline: 2px solid var(--black);
}
.s__file-wrap input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}
/* 드래그앤드롭 텍스트 */
.s__drag-multi-file-wrap{
  border: 2px dotted var(--border);
  padding: 16px;
  min-height: 150px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}
.s__drag-multi-file-info{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  width: 100%;
}
.s__drag-multi-file-wrap.is-active .s__drag-multi-file-info{
  display: none;
}
.s__drag-multi-file-info img{
  width: 40px;
  height: 40px;
  opacity: 0.5;
}
.s__drag-multi-file-info p {
  color: #bababa;
}
.s__drag-file-list li{
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  position: relative;
  height: 48px;
  margin: 6px 5px 6px 0;
  padding: 0 24px;
  border-radius: 24px;
  max-width: 100%;
  background-color: #fff;
}
.s__drag-multi-file-wrap .s__file-list-wrap{
  width: 100%;
}
.s__drag-file-list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.remove_button {
  width: 20px;
  height: 20px;
  position: relative;
}
.remove_button::before, .remove_button::after {
  width: 14px;
  height: 2px;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ccc;
  border-radius: 2px;
}
.remove_button::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.remove_button::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.remove_button span {
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
}
      `,
      js: `

// 파일 드래그 앤 드롭(텍스트)
const fileDragMultiUploadsBox = document.querySelectorAll(
  ".s__drag-multi-file-wrap"
);
function isMultiValid(data) {
  //파일인지 유효성 검사
  if (data.types.indexOf("Files") < 0) return false;

  for (let i = 0; i < data.files.length; i++) {
    const f = data.files[i];

    //파일의 사이즈는 5MB 미만
    if (f.size >= 1024 * 1024 * 5) {
      alert("5MB 이상인 파일은 업로드할 수 없습니다.");
      return false;
    }
  }
  return true;
}
if (fileDragMultiUploadsBox) {
  fileDragMultiUploadsBox.forEach((box) => {
    box.addEventListener("dragover", function (e) {
      e.preventDefault();
      this.style.borderColor = "var(--main)";
      this.style.backgroundColor = "var(--background)";
    });
    box.addEventListener("dragleave", function (e) {
      e.preventDefault();
      this.style.borderColor = "var(--border)";
      this.style.backgroundColor = "var(--white)";
    });
    box.addEventListener("drop", function (e) {
      e.preventDefault();
      this.style.borderColor = "var(--border)";
      this.style.backgroundColor = "var(--white)";

      //유효성 Check
      const data = e.dataTransfer;
      if (!isMultiValid(data)) {
        return;
      }
      const inputElement = this.querySelector(".s__drag-multi-file");

      // 드래그 앤 드롭으로 가져온 파일들을 input file에 추가
      inputElement.files = e.dataTransfer.files;

      // 파일이 추가되었으므로, 사용자 정의 change 이벤트를 트리거
      const changeEvent = new Event("change", { bubbles: true });
      inputElement.dispatchEvent(changeEvent);
    });
  });
}

const fileDragMultiUploads = document.querySelectorAll(
  '.s__drag-multi-file-wrap input[type="file"][multiple]'
);

if (fileDragMultiUploads) {
  fileDragMultiUploads.forEach((fileInput) => {
    const dataTransfer = new DataTransfer();
    fileInput.addEventListener("change", () => {
      fileInput.closest(".s__drag-multi-file-wrap").classList.add("is-active");
      let fileArr = fileInput.files;
      if (fileArr != null && fileArr.length > 0) {
        // =====DataTransfer 파일 관리========
        for (let i = 0; i < fileArr.length; i++) {
          const currentFile = fileArr[i];

          let isDuplicate = false;
          for (let j = 0; j < dataTransfer.items.length; j++) {
            if (
              dataTransfer.items[j].kind == "file" &&
              dataTransfer.items[j].getAsFile().name === currentFile.name
            ) {
              isDuplicate = true;
              break;
            }
          }

          if (!isDuplicate) {
            dataTransfer.items.add(currentFile);
          }
        }
        fileInput.files = dataTransfer.files;

        const underscoreIndex = fileInput.id.indexOf("_");
        const prefix =
          underscoreIndex !== -1
            ? fileInput.id.slice(0, underscoreIndex)
            : fileInput.id;
        const modifiedId = prefix + "List";

      
        //for문으로 리스트 만들어 줌
        let fileList = "";
        let fileDiv = document.createElement("div");

        for (let i = 0; i < fileInput.files.length; i++) {
          const currentFile = fileInput.files[i];
          const fileSize = (currentFile.size / (1024 * 1024)).toFixed(
            1
          );

          // 새로운 li 요소 생성
          const listItem = document.createElement("li");
          listItem.id = 'data'+currentFile.lastModified;

          // p 태그 생성
          const fileGetListName = document.createElement("p");
          fileGetListName.className = "file-get-list-name";
          fileGetListName.textContent = currentFile.name +'(' + fileSize + 'MB)';

          // button 태그 생성
          const removeButton = document.createElement("button");
          removeButton.className = "btns remove_button";
          removeButton.setAttribute(
            "data-index",
            'data'+currentFile.lastModified
          );
          removeButton.setAttribute("data-target-input", fileInput.id);

          // span 태그 생성
          const span = document.createElement("span");
          span.textContent = currentFile.name + ' 삭제';

          // button에 span 추가
          removeButton.appendChild(span);

          // li에 p와 button 추가
          listItem.appendChild(fileGetListName);
          listItem.appendChild(removeButton);

          // 대상 요소에 li 추가
          fileDiv.appendChild(listItem);

          fileList += fileDiv.innerHTML;
          fileDiv.innerHTML = "";
        }

        document.querySelector("#" + modifiedId).innerHTML = fileList;

        // ==========================================

        // 삭제
        const fileBottomList = document.querySelectorAll(".s__drag-file-list");
        fileBottomList.forEach((e) => {
          e.addEventListener("click", function (event) {
            if (
              e.id == modifiedId &&
              event.target.className == "btns remove_button"
            ) {
              event.preventDefault();
              targetFile = event.target.dataset.index;
              // ============DataTransfer================
              for (let i = 0; i < dataTransfer.files.length; i++) {
                if ("data" + dataTransfer.files[i].lastModified == targetFile) {
                  dataTransfer.items.remove(i);
                  break;
                }
              }

              document.getElementById(event.target.dataset.targetInput).files =
                dataTransfer.files;
              if (e.querySelector("#" + targetFile)) {
                e.querySelector("#" + targetFile).remove();
                console.log(
                  "input FIles 삭제후=>",
                  document.getElementById(event.target.dataset.targetInput)
                    .files
                );
              }
              if (
                document.getElementById(event.target.dataset.targetInput).files
                  .length === 0
              ) {
                //파일 비었을때
                fileInput
                  .closest(".s__drag-multi-file-wrap")
                  .classList.remove("is-active");
              }
            }
          });
        });
      }
    });
  });
}
      `,
    },
    {
      title: "Multi File Image",
      cssFile: [],
      jsFile: [],
      img: "category/img_file04.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <div class="s__file-wrap s__img-multi-file-wrap">
          <div class="s__file-btn">
              <input type="file" class="s__img-multi-file" multiple id="multiImg01_file" accept="image/*">
              <label for="multiImg01_file" class="s__btn s__btn-line">업로드</label>
          </div>
          <div class="s__file-list-wrap">
              <ul class="s__img-file-list" id="multiImg01List"></ul>
          </div>
      </div>
    </div>
  </div>
</section>
      `,
      css: `
/* 파일 버튼 */
.s__file-wrap input[type="file"]:focus-visible ~ .s__btn{
  outline: 2px solid var(--black);
}
.s__file-wrap input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}
/* 멀티파일 */
.s__file-list {
  display: flex;
  flex-wrap: wrap;
}
.s__file-list > li {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  position: relative;
  height: 48px;
  margin: 6px 5px;
  padding: 0 24px;
  border-radius: 24px;
}
.file-get-list-name {
  font-size: 14px;
  font-weight: 400;
  color: #222;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
  margin-right: 12px;
  letter-spacing: -0.56px;
}
.remove_button span {
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
}
.remove_button::before,
.remove_button::after {
  width: 14px;
  height: 2px;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ccc;
  border-radius: 2px;
}
.remove_button::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.remove_button::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.remove_button {
  width: 20px;
  height: 20px;
  position: relative;
}
/* 멀티이미지파일 미리보기 */
.s__img-file-list{
  display: flex;
}
.s__img-file-list li{
  border: 1px solid var(--border);
  margin: 6px 5px 6px 0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
.file-get-list-img{
  width: 80px;
  height: 80px;
  object-fit: cover;
}
.s__img-file-list li button{
  position: absolute;
  right: 4px;
  top: 4px;
  background-color: var(--black);
  border-radius: 10px;
}
.s__img-file-list .remove_button::before, .s__img-file-list .remove_button::after{
  background-color: #fff;
  width: 12px;
}
      `,
      js: `

// 멀티파일 이미지 미리보기
const fileImgMultiUploads = document.querySelectorAll(
  '.s__img-multi-file-wrap input[type="file"][multiple]'
);

if (fileImgMultiUploads) {
  fileImgMultiUploads.forEach((fileInput) => {
    const dataTransfer = new DataTransfer();

    fileInput.addEventListener("change", () => {
      let fileArr = fileInput.files;
      if (fileArr != null && fileArr.length > 0) {
        // =====DataTransfer 파일 관리========
        for (let i = 0; i < fileArr.length; i++) {
          const currentFile = fileArr[i];

          let isDuplicate = false;
          for (let j = 0; j < dataTransfer.items.length; j++) {
            if (
              dataTransfer.items[j].kind == "file" &&
              dataTransfer.items[j].getAsFile().name === currentFile.name
            ) {
              isDuplicate = true;
              break;
            }
          }

          if (!isDuplicate) {
            dataTransfer.items.add(currentFile);
          }
        }
        fileInput.files = dataTransfer.files;

        const underscoreIndex = fileInput.id.indexOf("_");
        const prefix =
          underscoreIndex !== -1
            ? fileInput.id.slice(0, underscoreIndex)
            : fileInput.id;
        const modifiedId = prefix + "List";

        //for문으로 리스트 만들어 줌
        let fileList = "";
        let fileDiv = document.createElement("div");

        for (let i = 0; i < fileInput.files.length; i++) {
          const currentFile = fileInput.files[i];
          const fileSize = (currentFile.size / (1024 * 1024)).toFixed(1);
          // 새로운 li 요소 생성
          const listItem = document.createElement("li");
          listItem.id = 'data'+currentFile.lastModified;

          // p 태그 생성
          const fileGetListName = document.createElement("img");
          fileGetListName.className = "file-get-list-img";
          fileGetListName.src = URL.createObjectURL(currentFile)
          fileGetListName.alt = currentFile.name 
          // button 태그 생성
          const removeButton = document.createElement("button");
          removeButton.className = "btns remove_button";
          removeButton.setAttribute(
            "data-index",
            'data'+currentFile.lastModified
          );
          removeButton.setAttribute("data-target-input", fileInput.id);

          // span 태그 생성
          const span = document.createElement("span");
          span.textContent = currentFile.name + ' 삭제';

          // button에 span 추가
          removeButton.appendChild(span);

          // li에 p와 button 추가
          listItem.appendChild(fileGetListName);
          listItem.appendChild(removeButton);

          // 대상 요소에 li 추가
          fileDiv.appendChild(listItem);

          fileList += fileDiv.innerHTML;
          fileDiv.innerHTML = "";
        }

        document.querySelector("#" + modifiedId).innerHTML = fileList;

        // ==========================================

        // 삭제
        const fileBottomList = document.querySelectorAll(".s__img-file-list");
        fileBottomList.forEach((e) => {
          e.addEventListener("click", function (event) {
            if (
              e.id == modifiedId &&
              event.target.className == "btns remove_button"
            ) {
              targetFile = event.target.dataset.index;
              // ============DataTransfer================
              for (let i = 0; i < dataTransfer.files.length; i++) {
                if ("data" + dataTransfer.files[i].lastModified == targetFile) {
                  dataTransfer.items.remove(i);
                  break;
                }
              }

              document.getElementById(event.target.dataset.targetInput).files =
                dataTransfer.files;
              if (e.querySelector("#" + targetFile)) {
                e.querySelector("#" + targetFile).remove();
                console.log(
                  "input FIles 삭제후=>",
                  document.getElementById(event.target.dataset.targetInput)
                    .files
                );
              }
            }
          });
        });
      }
    });
  });
}
      `,
    },
    {
      title: "Multi File Image Drag",
      cssFile: [],
      jsFile: [],
      img: "category/img_file05.svg",
      html: `
<section>
  <div class="s__container">
    <div class="s__row">
      <label for="multiImgDrag01_file" class="s__file-wrap s__drag-multi-img-file-wrap">
          <div class="s__drag-multi-file-info">
              <img src="/image/icon_add_photo.svg" alt="이미지업로드">
              <p>이미지 파일을 업로드해주세요.</p>
          </div>
          <input type="file" class="s__drag-multi-img-file" multiple id="multiImgDrag01_file"  accept="image/*"> 
          <div class="s__file-list-wrap">
              <ul class="s__drag-img-file-list" id="multiImgDrag01List"></ul>
          </div>
      </label>
    </div>
  </div>
</section>
      `,
      css: `
/* 파일 버튼 */
.s__file-wrap input[type="file"]:focus-visible ~ .s__btn{
  outline: 2px solid var(--black);
}
.s__file-wrap input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}

/* 드래그앤드롭 이미지 */
.s__drag-multi-img-file-wrap {
  border: 2px dotted var(--border);
  padding: 16px;
  min-height: 150px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}
.s__drag-multi-file-info{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  width: 100%;
}
.s__drag-multi-img-file-wrap.is-active .s__drag-multi-file-info{
  display: none;
}
.file-get-list-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
.s__drag-multi-file-info img{
  width: 40px;
  height: 40px;
  opacity: 0.5;
}
.s__drag-multi-file-info p {
  color: #bababa;
}
.s__drag-img-file-list{
  display: flex;
  flex-wrap: wrap;
}
.s__drag-img-file-list li{
  border: 1px solid var(--border);
  margin: 6px 5px 6px 0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
.remove_button {
  width: 20px;
  height: 20px;
  position: relative;
}
.s__drag-img-file-list li button {
  position: absolute;
  right: 4px;
  top: 4px;
  background-color: var(--black);
  border-radius: 10px;
}
.remove_button::before, .remove_button::after {
  width: 14px;
  height: 2px;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ccc;
  border-radius: 2px;
}
.remove_button::before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.remove_button::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.remove_button span {
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
}
      `,
      js: `
      // 파일 드래그 앤 드롭(이미지)
      const fileDragMultiImgUploadsBox = document.querySelectorAll(
        ".s__drag-multi-img-file-wrap"
      );
      function isImgMultiValid(data) {
        //파일인지 유효성 검사
        if (data.types.indexOf("Files") < 0) return false;
      
        for (let i = 0; i < data.files.length; i++) {
          const f = data.files[i];
          //이미지인지 유효성 검사
          if (f.type.indexOf("image") < 0) {
            alert("이미지 파일만 업로드 가능합니다.");
            return false;
          }
      
          //파일의 사이즈는 5MB 미만
          if (f.size >= 1024 * 1024 * 5) {
            alert("5MB 이상인 파일은 업로드할 수 없습니다.");
            return false;
          }
        }
        return true;
      }
      if (fileDragMultiImgUploadsBox) {
        fileDragMultiImgUploadsBox.forEach((box) => {
          box.addEventListener("dragover", function (e) {
            e.preventDefault();
            this.style.borderColor = "var(--main)";
            this.style.backgroundColor = "var(--background)";
          });
          box.addEventListener("dragleave", function (e) {
            e.preventDefault();
            this.style.borderColor = "var(--border)";
            this.style.backgroundColor = "var(--white)";
          });
          box.addEventListener("drop", function (e) {
            e.preventDefault();
            this.style.borderColor = "var(--border)";
            this.style.backgroundColor = "var(--white)";
      
            //유효성 Check
            const data = e.dataTransfer;
            if (!isImgMultiValid(data)) {
              return;
            }
      
            const inputElement = this.querySelector(".s__drag-multi-img-file");
      
            // 드래그 앤 드롭으로 가져온 파일들을 input file에 추가
            inputElement.files = e.dataTransfer.files;
      
            // 파일이 추가되었으므로, 사용자 정의 change 이벤트를 트리거
            const changeEvent = new Event("change", { bubbles: true });
            inputElement.dispatchEvent(changeEvent);
          });
        });
      }
      
      const fileDragMultiImgUploads = document.querySelectorAll(
        '.s__drag-multi-img-file-wrap input[type="file"][multiple]'
      );
      
      if (fileDragMultiImgUploads) {
        fileDragMultiImgUploads.forEach((fileInput) => {
          const dataTransfer = new DataTransfer();
          fileInput.addEventListener("change", () => {
            fileInput
              .closest(".s__drag-multi-img-file-wrap")
              .classList.add("is-active");
            let fileArr = fileInput.files;
            if (fileArr != null && fileArr.length > 0) {
              // =====DataTransfer 파일 관리========
              for (let i = 0; i < fileArr.length; i++) {
                const currentFile = fileArr[i];
      
                let isDuplicate = false;
                for (let j = 0; j < dataTransfer.items.length; j++) {
                  if (
                    dataTransfer.items[j].kind == "file" &&
                    dataTransfer.items[j].getAsFile().name === currentFile.name
                  ) {
                    isDuplicate = true;
                    break;
                  }
                }
      
                if (!isDuplicate) {
                  dataTransfer.items.add(currentFile);
                }
              }
              fileInput.files = dataTransfer.files;
      
              const underscoreIndex = fileInput.id.indexOf("_");
              const prefix =
                underscoreIndex !== -1
                  ? fileInput.id.slice(0, underscoreIndex)
                  : fileInput.id;
              const modifiedId = prefix + "List";
      
                    
              //for문으로 리스트 만들어 줌
              let fileList = "";
              let fileDiv = document.createElement("div");

              for (let i = 0; i < fileInput.files.length; i++) {
                const currentFile = fileInput.files[i];
                const fileSize = (currentFile.size / (1024 * 1024)).toFixed(1);
                // 새로운 li 요소 생성
                const listItem = document.createElement("li");
                listItem.id = 'data'+currentFile.lastModified;

                // p 태그 생성
                const fileGetListName = document.createElement("img");
                fileGetListName.className = "file-get-list-img";
                fileGetListName.src = URL.createObjectURL(currentFile)
                fileGetListName.alt = currentFile.name 
                // button 태그 생성
                const removeButton = document.createElement("button");
                removeButton.className = "btns remove_button";
                removeButton.setAttribute(
                  "data-index",
                  'data'+currentFile.lastModified
                );
                removeButton.setAttribute("data-target-input", fileInput.id);

                // span 태그 생성
                const span = document.createElement("span");
                span.textContent = currentFile.name + ' 삭제';

                // button에 span 추가
                removeButton.appendChild(span);

                // li에 p와 button 추가
                listItem.appendChild(fileGetListName);
                listItem.appendChild(removeButton);

                // 대상 요소에 li 추가
                fileDiv.appendChild(listItem);

                fileList += fileDiv.innerHTML;
                fileDiv.innerHTML = "";
              }
      
              document.querySelector("#" + modifiedId).innerHTML = fileList;
      
              // ==========================================
      
              // 삭제
              const fileBottomList = document.querySelectorAll(
                ".s__drag-img-file-list"
              );
              fileBottomList.forEach((e) => {
                e.addEventListener("click", function (event) {
                  if (
                    e.id == modifiedId &&
                    event.target.className == "btns remove_button"
                  ) {
                    event.preventDefault();
                    targetFile = event.target.dataset.index;
                    // ============DataTransfer================
                    for (let i = 0; i < dataTransfer.files.length; i++) {
                      if ("data" + dataTransfer.files[i].lastModified == targetFile) {
                        dataTransfer.items.remove(i);
                        break;
                      }
                    }
      
                    document.getElementById(event.target.dataset.targetInput).files =
                      dataTransfer.files;
                    if (e.querySelector("#" + targetFile)) {
                      e.querySelector("#" + targetFile).remove();
                      console.log(
                        "input FIles 삭제후=>",
                        document.getElementById(event.target.dataset.targetInput)
                          .files
                      );
                    }
                    if (
                      document.getElementById(event.target.dataset.targetInput).files
                        .length === 0
                    ) {
                      //파일 비었을때
                      fileInput
                        .closest(".s__drag-multi-img-file-wrap")
                        .classList.remove("is-active");
                    }
                  }
                });
              });
            }
          });
        });
      }
      `,
    },
    {
      title: "Profile",
      cssFile: [],
      jsFile: [],
      img: "category/img_file06.svg",
      html: `
<div class="s__file-wrap s__imgfile-wrap">
  <div class="s__img-file-btn">
      <img src="/image/img_profile.svg" class="img-preview" alt="이미지"/>
      <input type="file" class="s__img-file" id="imgBtnFile">
      <label for="imgBtnFile">이미지업로드</label>
  </div>
</div>
      `,
      css: `
/* 이미지파일 미리보기 */
.s__file-wrap input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0 none;
}
.s__img-file-btn{
  border: 1px solid var(--border);
  border-radius: 100px;
  width: 120px;
  height: 120px;
  position: relative;
  background-color: var(--white);
}
.s__img-file-btn label{
  display: block;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background: url('/image/icon_add_photo.svg') no-repeat 50% 50%;
  z-index: 1;
  bottom: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid var(--border);
  cursor: pointer;
  text-indent: -9999px;
  overflow: hidden;
}
.s__img-file-btn input:focus-visible + label {
  outline: 2px solid var(--black);
}
.s__img-file-btn img{
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  object-fit: cover;
}
.s__imgfile-wrap .s__imgfile-list img{
  width: 100px;
  height: 100px;
  margin-top: 16px;
  border-radius: 8px;
}
      `,
      js: `
// 파일 이미지 미리보기
const fileImgUploads = document.querySelectorAll(".s__imgfile-wrap");
for (let i = 0; i < fileImgUploads.length; i++) {
  const e = fileImgUploads[i];
  const btn = e.querySelector('.s__img-file')
  const img = e.querySelector('.img-preview')
  btn.addEventListener('change', (input) => {
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        img.src = e.target.result;
      };
      reader.readAsDataURL(input.target.files[0]);
    } else {
      img.src = "/image/img_profile.svg"; //빈 이미지
    }
  })
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
