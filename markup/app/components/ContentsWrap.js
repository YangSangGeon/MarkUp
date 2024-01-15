"use client";

import Link from "next/link";
import styled from "styled-components";
import Contents from "@/app/components/Contents";
import { useEffect, useState } from "react";

export default function ContentsWrap(props) {
  // 이미지 로드 확인
  const [isImageLoaded, setIsImageLoaded] = useState(Array(props.data.length).fill(false));
  
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
      const img = new Image();
      img.src = "/" + props.data[index].img;
      img.onload = () => handleImageLoad(index);
    });
  }, [props.data]);


  // 처음켜지면 id의 값이 thisPage의 값으로 지정
  const thisPage = props.props.params.id;
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
  `;
  const TabImgWrap = styled.ul`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    height: 62px;
  `;
  const NoneImg = styled.span`
    display: block;
    width: 60px;
    height: 60px;
    background-color: #fff;
  `
  return (
    <Body>
      <TabImgWrap>
        {props.data.map((num, index) => (
          <li
            key={index}
            style={{
              border:
                thisPage == index
                  ? "1px solid var(--black)"
                  : "1px solid var(--boarder)",
            }}
          >
           <Link href={String(index)}>
              {isImageLoaded[index] ? (
                <img src={"/" + num.img} alt={num.title} />
              ) : (
                <NoneImg />
              )}
            </Link>
          </li>
        ))}
      </TabImgWrap>
      <Title>{props.data[thisPage].title}</Title>
      {props.data[thisPage].subTitle && (
        <SubTitle>{props.data[thisPage].subTitle}</SubTitle>
      )}
      <Contents
        contentsCssFile={props.data[thisPage].cssFile}
        contentsJsFile={props.data[thisPage].jsFile}
        contentsHtml={props.data[thisPage].html}
        contentsCss={props.data[thisPage].css}
        contentsJs={props.data[thisPage].js}
        contentsDownload={props.data[thisPage].download}
      ></Contents>
    </Body>
  );
}
