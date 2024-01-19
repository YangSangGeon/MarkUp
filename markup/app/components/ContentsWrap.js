"use client";

import styled from "styled-components";
import Contents from "@/app/components/Contents";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      // const img = new Image();
      // img.src = "/" + props.data[index].img;
      // img.onload = () => handleImageLoad(index);
      handleImageLoad(index);
    });
  }, [props.data]);

  const [pageIndex, setPageIndex] = useState(0)
  // 처음켜지면 id의 값이 thisPage의 값으로 지정
  const thisPage = props.props.params.id;


  const [iframeKey, setIframeKey] = useState(0);
  const handleTabClick = () => {
    console.log('??')
    // 탭이 클릭될 때마다 key 값을 변경하여 아이프레임 리랜더링
    setIframeKey((prevKey) => prevKey + 1);
  };

  return (
    <Body>
       {/* 페이지 이동 트래픽 이슈 thisPage => pageIndex */}
      <TabImgWrap>
        {props.data.map((num, index) => (
          <li
            key={index}
            style={{
              border:
                pageIndex == index
                  ? "1px solid var(--black)"
                  : "1px solid var(--boarder)",
            }}
          >
           {/* <Link href={String(index)}> 페이지 이동 트래픽 이슈로 변경*/}
            <button onClick={() => { setPageIndex(index); handleTabClick(); }}>
              {isImageLoaded[index] ? (
                <Image priority={true} width={60} height={60} src={"/" + num.img} alt={num.title} />
              ) : (
                <NoneImg />
              )}
            </button>
          </li>
        ))}
      </TabImgWrap>
      <Title>{props.data[pageIndex].title}</Title>
      {props.data[pageIndex].subTitle && (
        <SubTitle>{props.data[pageIndex].subTitle}</SubTitle>
      )}
      <Contents
        iframeKey={iframeKey}
        contentsIndex={pageIndex}
        contentsCssFile={props.data[pageIndex].cssFile}
        contentsJsFile={props.data[pageIndex].jsFile}
        contentsHtml={props.data[pageIndex].html}
        contentsCss={props.data[pageIndex].css}
        contentsJs={props.data[pageIndex].js}
        contentsDownload={props.data[pageIndex].download}
      ></Contents>
    </Body>
  );
}
