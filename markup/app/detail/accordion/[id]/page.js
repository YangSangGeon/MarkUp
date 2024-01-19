"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Accordion01",
      cssFile: [],
      jsFile: [],
      img: "category/img_accordion01.svg",
      html: `
    <section>
      <div class="s__container">
        <div class="s__row">
            <ul class="s__accordion01-wrap">
                <li>
                    <ul class="s__accordion01" data-accordion="accordion01">
                        <li class="s__accordion01-title">
                            <button>
                                <span>Accordion Title</span>
                                <img src="/image/icon_down_arrow.svg" alt="열기" >
                            </button>
                        </li>
                        <li class="s__accordion01-contents">
                            <div>
                                <p>Welcome. This is the accordion area. Welcome. This is the accordion area.</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="s__accordion01" data-accordion="accordion01">
                        <li class="s__accordion01-title">
                            <button>
                                <span>Accordion Title</span>
                                <img src="/image/icon_down_arrow.svg" alt="열기" >
                            </button>
                        </li>
                        <li class="s__accordion01-contents">
                            <div>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="s__accordion01" data-accordion="accordion01">
                        <li class="s__accordion01-title">
                            <button>
                                <span>Accordion Title</span>
                                <img src="/image/icon_down_arrow.svg" alt="열기" >
                            </button>
                        </li>
                        <li class="s__accordion01-contents">
                            <div>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class="s__accordion01" data-accordion="accordion01">
                        <li class="s__accordion01-title">
                            <button>
                                <span>Accordion Title</span>
                                <img src="/image/icon_down_arrow.svg" alt="열기" >
                            </button>
                        </li>
                        <li class="s__accordion01-contents">
                            <div>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                                <p>Welcome. This is the accordion area.</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</section>
      `,
      css: `
      .s__accordion01-wrap{
        border-top: 1px solid var(--border);
        }
        .s__accordion01-title > button{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            border-bottom: 1px solid var(--border);
            width: 100%;
        }
        .s__accordion01-title > button > img {
            width: 24px;
            transition: all 0.3s;
        }
        .s__accordion01-contents{
            max-height: 0;
            height: auto;
            overflow: hidden;
            transition: max-height 0.3s;
        }
        .is-active .s__accordion01-contents{
            border-bottom: 1px solid var(--border);
            /* max-height는 가변적 */
            max-height: 200px;
        }
        .is-active .s__accordion01-title > button > img{
            transform: rotate(180deg);
        }
        .s__accordion01-contents > div {
            padding: 16px;
        }
      `,
      js:
        `// 아코디언
        const accordionAList = document.querySelectorAll(".s__accordion01 button");
        const accordionList = document.querySelectorAll(".s__accordion01");
        accordionAList.forEach((e) => {
          const thisAccordionName = e.parentNode.parentNode.dataset.accordion;
          e.addEventListener("click", () => {
            if (e.parentNode.parentNode.classList.contains("is-active")) {
              e.parentNode.parentNode.classList.remove("is-active");
            } else {
              accordionList.forEach((t) => {
                if (t.dataset.accordion === thisAccordionName) {
                  t.classList.remove("is-active");
                }
              });
              e.parentNode.parentNode.classList.add("is-active");
            }
          });
        });`
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
