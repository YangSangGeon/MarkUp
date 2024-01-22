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
display: flex;
justify-content: space-between;
& > div{
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
& li {
  height: 62px;
}
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
  useEffect(() => { 
    // 디바이스 지정
    if (props.data[pageIndex].device) {
      if (props.data[pageIndex].device === 'mobile') {
        document.querySelector('header').classList.remove('size-pc')
        document.querySelector('header').classList.remove('size-tablet')
        document.querySelector('header').classList.add('size-mobile')
        document.querySelector('button.size-pc img').src ='/image/icon_pc.svg'
        document.querySelector('button.size-tablet img').src ='/image/icon_tablet.svg'
        document.querySelector('button.size-mobile img').src ='/image/icon_mobile_on.svg'
      } else if (props.data[pageIndex].device === 'tablet') {
        document.querySelector('header').classList.remove('size-pc')
        document.querySelector('header').classList.add('size-tablet')
        document.querySelector('header').classList.remove('size-mobile')
        document.querySelector('button.size-pc img').src ='/image/icon_pc.svg'
        document.querySelector('button.size-tablet img').src ='/image/icon_tablet_on.svg'
        document.querySelector('button.size-mobile img').src ='/image/icon_mobile.svg'
      } else if (props.data[pageIndex].device === 'pc') {
        document.querySelector('header').classList.add('size-pc')
        document.querySelector('header').classList.remove('size-tablet')
        document.querySelector('header').classList.remove('size-mobile')
        document.querySelector('button.size-pc img').src ='/image/icon_pc_on.svg'
        document.querySelector('button.size-tablet img').src ='/image/icon_tablet.svg'
        document.querySelector('button.size-mobile img').src ='/image/icon_mobile.svg'
      }
    }

  },[])


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
  // const thisPage = props.props.params.id;


  const [iframeKey, setIframeKey] = useState(0);
  const handleTabClick = () => {
    // 탭이 클릭될 때마다 key 값을 변경하여 아이프레임 리랜더링
    setIframeKey((prevKey) => prevKey + 1);
  };



  return (
    <Body>
       {/* 페이지 이동 트래픽 이슈 thisPage => pageIndex */}
      <div>
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
      </div>
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
    </Body>
  );
}
