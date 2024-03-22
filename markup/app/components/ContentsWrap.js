"use client";

import styled from "styled-components";
import Contents from "@/app/components/Contents";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Title = styled.h2`
  color: var(--black, #181818);
  font-family: GmarketSansBold;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;
const SubTitle = styled.p`
  color: var(--gray);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 16px;
`;
const Body = styled.div`
  margin-top: 40px;
  width: calc(100% - 216px);
  display: flex;
  justify-content: space-between;
  & > div {
    width: calc(100% - 92px);
  }
`;
const TabImgWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  height: 60px;
  width: 62px;
  position: sticky;
  top: 32px;
  & li {
    height: 62px;
  }
`;
const CategoryList = styled.li`
  & img {
    opacity: 0.1;
  }
  &.is-open img {
    opacity: 1;
  }
`;
const NoneImg = styled.span`
  display: block;
  width: 60px;
  height: 60px;
  background-color: #fff;
`;

export default function ContentsWrap(props) {
  // 이미지 로드 확인
  const [isImageLoaded, setIsImageLoaded] = useState(
    Array(props.data.length).fill(false)
  );
  useEffect(() => {
    document.querySelector(".device-btn-wrap").style.display = "flex";
    // 디바이스 지정.. 이런식으로 하기 싫은데... ㅜㅜ
    if (props.data[pageIndex].device) {
      if (props.data[pageIndex].device === "mobile") {
        document.querySelector("header").classList.remove("device-pc");
        document.querySelector("header").classList.remove("device-tablet");
        document.querySelector("header").classList.add("device-mobile");
      } else if (props.data[pageIndex].device === "tablet") {
        document.querySelector("header").classList.remove("device-pc");
        document.querySelector("header").classList.add("device-tablet");
        document.querySelector("header").classList.remove("device-mobile");
      } else if (props.data[pageIndex].device === "pc") {
        document.querySelector("header").classList.add("device-pc");
        document.querySelector("header").classList.remove("device-tablet");
        document.querySelector("header").classList.remove("device-mobile");
      }
    }
  }, []);

  // useEffect를 사용하여 이미지 로드 이벤트를 한 번만 등록
  useEffect(() => {
    const handleImageLoad = (index) => {
      setIsImageLoaded((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    };

    // 이미지 로드 이벤트 핸들러 등록
    props.data.forEach((_, index) => {
      // const img = new Image();
      // img.src = "/" + props.data[index].img;
      // img.onload = () => handleImageLoad(index);
      handleImageLoad(index);
    });
  }, [props.data]);

  const [pageIndex, setPageIndex] = useState(0);
  // 처음켜지면 id의 값이 thisPage의 값으로 지정
  const thisPage = props.props.params.id;

  const [iframeKey, setIframeKey] = useState(0);
  const handleTabClick = () => {
    // 탭이 클릭될 때마다 key 값을 변경하여 아이프레임 리랜더링
    setIframeKey((prevKey) => prevKey + 1);
  };

  return (
    <Body>
      {/* 페이지 이동 트래픽 이슈 thisPage => pageIndex */}
      {/* 트래픽 이슈 해결되어 다시 아래 thiPage로 모두 변경 */}
      <div>
        <Title>{props.data[thisPage].title}</Title>
        {props.data[thisPage].subTitle && (
          <SubTitle>{props.data[thisPage].subTitle}</SubTitle>
        )}
        <Contents
          iframeKey={iframeKey}
          contentsIndex={thisPage}
          contentsCssFile={props.data[thisPage].cssFile}
          contentsJsFile={props.data[thisPage].jsFile}
          contentsHtml={props.data[thisPage].html}
          contentsCss={props.data[thisPage].css}
          contentsJs={props.data[thisPage].js}
          contentsDownload={props.data[thisPage].download}
        ></Contents>
      </div>
      <TabImgWrap>
        {props.data.map((num, index) => (
          <CategoryList
            key={index}
            className={thisPage == index ? "is-open" : ""}
            style={{
              border:
                thisPage == index
                  ? "1px solid var(--black)"
                  : "1px solid var(--boarder)",
            }}
          >
            <Link href={String(index)}>
              {/* 페이지 이동 트래픽 이슈로 변경 => 해결되어 다시 Link로 변경 */}
              {/* <button
              onClick={() => {
                setPageIndex(index);
                handleTabClick();
              }}
            > */}
              {isImageLoaded[index] ? (
                <Image
                  priority={true}
                  width={60}
                  height={60}
                  src={"/" + num.img}
                  alt={num.title}
                />
              ) : (
                <NoneImg />
              )}
            </Link>
            {/* </button> */}
          </CategoryList>
        ))}
      </TabImgWrap>
    </Body>
  );
}
