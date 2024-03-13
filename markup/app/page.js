"use client";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Body = styled.div`
  margin-top: 40px;
  width: calc(100% - 308px);
`;
const Title = styled.h2`
  color: var(--black, #181818);
  font-family: GmarketSansBold;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
`;
const SubTitle = styled.p`
  color: var(--black, #181818);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 8px;
`;
const ReadMeListWrap = styled.ul`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const ReadMeList = styled.li`
  margin-bottom: 4px;
  font-size: 15px;
  color: var(--black);
  list-style-type: disc;
  margin-left: 20px;
  & strong {
    font-weight: 700;
  }
`;
const ReadMeList2 = styled.li`
  margin-bottom: 4px;
  font-size: 15px;
  color: var(--black);
  list-style-type: auto;
  margin-left: 20px;
  & strong {
    font-weight: 700;
  }
`;
const DownBtn = styled.a`
  display: inline-block;
  padding: 8px 24px;
  border-radius: 100px;
  font-size: 16px;
  background-color: var(--black);
  color: #fff;
  &:hover {
    background-color: #3559e0;
  }
`;
const TabWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--boarder);
  margin-bottom: 32px;
`;
const Tab = styled.button`
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  padding: 8px 16px 12px 16px;
  transform: translateY(1px);
`;
const ContentsWrap = styled.div`
  border: 1px solid var(--boarder);
  border-radius: 16px;
  padding: 12px;
  height: 300px;
  display: flex;
  align-items: center;
  transition: max-width 0.7s, padding 0.7s;
  margin: 0 auto;
  overflow: hidden;
  background-color: #323232;
  margin-bottom: 32px;
  .size-pc + .m_container & {
    max-width: 2000px;
  }
  .size-tablet + .m_container & {
    max-width: 900px;
  }
  .size-mobile + .m_container & {
    max-width: 390px;
  }
`;
const Contents = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & p {
    font-size: 32px;
    margin-bottom: 24px;
    font-family: GmarketSansBold;
    color: var(--black, #181818);
    padding: 0 16px;
    text-align: center;
    line-height: 41px;
    transition: all 0.7s;
  }
  .size-tablet + .m_container & p {
    font-size: 28px;
    margin-bottom: 24px;
    line-height: 36px;
  }
  .size-mobile + .m_container & p {
    font-size: 26px;
    margin-bottom: 24px;
    line-height: 36px;
  }
`;
export default function Home() {
  const [index, setIndex] = useState(0);
  const data = [
    {
      id: 0,
      title: "Info",
      description: "0",
    },
    {
      id: 1,
      title: "Update",
      description: "1",
    },
    {
      id: 2,
      title: "Bug",
      description: "2",
    },
    {
      id: 3,
      title: "Supporters",
      description: "3",
    },
  ];
  useEffect(() => {
    // document.querySelector(".device-btn-wrap").style.display = "none"; //디바이스 선택 숨기기
  }, []);

  return (
    <Body>
      <Title>README</Title>
      <TabWrap>
        {data.map((item, innerIndex) => (
          <Tab
            key={innerIndex}
            style={{
              color: index === item.id ? "var(--black)" : "var(--gray)",
              borderBottom:
                index === item.id
                  ? "1px solid var(--black)"
                  : "1px solid var(--boarder)",
            }}
            onClick={() => setIndex(item.id)}
          >
            {item.title}
          </Tab>
        ))}
      </TabWrap>
      {data
        .filter((item) => index === item.id)
        .map((item, innerIndex) =>
          item.id === 0 ? (
            <div key={innerIndex}>
              <ContentsWrap>
                <Contents>
                  <p>Let's Knock The Markup!</p>
                  <DownBtn href="/download/Knock_MarkUp.zip" download>
                    공통코드 다운로드
                  </DownBtn>
                </Contents>
              </ContentsWrap>
              <SubTitle>특징</SubTitle>
              <ReadMeListWrap>
                <ReadMeList>
                  <strong>웹표준, 웹접근성 :</strong> 웹표준과 웹접근성에 맞는
                  마크업파일을 제공합니다.(틀린점있으면 메일부탁드려요😂)
                </ReadMeList>
                <ReadMeList>
                  <strong>빠른 마크업 :</strong> 기초적인 마크업을 빠르게 생성할
                  수 있도록 도와줍니다.
                </ReadMeList>
                <ReadMeList>
                  <strong>라이브러리 의존성 최소화 :</strong> 대부분 바닐라
                  JavaScript로 개발되어 라이브러리 의존성을 최소화했습니다.(단,
                  Swiper, Chart, date 는 전체적으로 외부라이브러리
                  사용했습니다.)
                </ReadMeList>
              </ReadMeListWrap>
              <SubTitle>사용법</SubTitle>
              <ReadMeListWrap>
                <ReadMeList2>
                  공통 코드를 다운로드받아서 적용시킵니다.
                </ReadMeList2>
                <ReadMeList2>code 탭을 클릭하여 코드를 복사합니다.</ReadMeList2>
                <ReadMeList2>
                  원하는 파일에 복사한 코드를 붙여넣기합니다.
                </ReadMeList2>
                <ReadMeList2>
                  필요한 라이브러리가 있다면, 다운로드 버튼을 클릭하거나 해당
                  라이브러리 공식홈페이지를 이용해 첨부합니다.(적용순서가 중요할
                  경우 JS 주석에 적어뒀으니 확인해주세요.)
                </ReadMeList2>
                <ReadMeList2>
                  최상단의 디바이스 크기 조절 버튼을 이용해 preview를
                  확인해보세요 :)
                </ReadMeList2>
              </ReadMeListWrap>
              <SubTitle>업데이트 및 기여</SubTitle>
              <ReadMeListWrap>
                <ReadMeList>
                  새로운 코드 제안은 언제든 환영합니다! 업데이트를 원하는 완성된
                  코드를 보내주시면 정리해서 작성자 아이디와 함께
                  업데이트하겠습니다.
                </ReadMeList>
                <ReadMeList>
                  업데이트 내역 및 버그 제보는 yangsk0526@gmail.com으로
                  보내주세요.😊
                </ReadMeList>
              </ReadMeListWrap>
              <SubTitle>기타</SubTitle>
              <ReadMeListWrap>
                <ReadMeList>
                  마크업 작업 특성상 본 'KNOCK MARKUP' 페이지는 반응형으로
                  제작되지 않았습니다.
                </ReadMeList>
              </ReadMeListWrap>
            </div>
          ) : item.id === 1 ? (
            <div key={innerIndex}>
              <ReadMeListWrap>
                <SubTitle>예정</SubTitle>
                <ReadMeListWrap>
                  <ReadMeList>
                    <strong>Breadcrumb</strong>
                  </ReadMeList>
                  <ReadMeList>
                    <strong>DarkMode</strong>
                  </ReadMeList>
                  <ReadMeList>
                    <strong>Examples</strong>
                  </ReadMeList>
                </ReadMeListWrap>
                <SubTitle>완료</SubTitle>
                <ReadMeListWrap>
                  <ReadMeList>
                    <strong>Scroll Animation : </strong> fade-in, view-left,
                    view-right, view-bottom, view-top, zoom-in, bounce-in,
                    숫자증가
                    {/* (24.02.20)  (24.02.26) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>Board : </strong> Tui그리드 UI수정
                    {/* (24.02.13) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>toolTip</strong>
                    {/* (24.02.08) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>Date : </strong> DatePicker
                    {/* (24.02.06) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>chart : </strong> 가로막대형
                    {/* (24.02.02) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>File : </strong> 싱글,멀티파일 이미지 미리보기,
                    드래그드랍 멀티파일 미리보기
                    {/* (24.01.31)(24.02.01) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>Board : </strong> 갤러리형
                    {/* (24.01.30) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>Select : </strong> 위로 드랍다운
                    {/* (24.01.29) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>Sidebar : </strong> 기본 사이드바
                    {/* (24.01.26) */}
                  </ReadMeList>
                  <ReadMeList>
                    <strong>Haeder(Mobile) : </strong> 사이드형
                    {/* (24.01.22) */}
                  </ReadMeList>
                </ReadMeListWrap>
              </ReadMeListWrap>
            </div>
          ) : item.id === 2 ? (
            <div key={innerIndex}>
              <SubTitle>수정 중</SubTitle>
              <ReadMeListWrap>
                <ReadMeList>-</ReadMeList>
              </ReadMeListWrap>
              <SubTitle>확인 중</SubTitle>
              <ReadMeListWrap>
                <ReadMeList>-</ReadMeList>
              </ReadMeListWrap>
              <SubTitle>수정 완료</SubTitle>
              <ReadMeListWrap>
                <ReadMeList>
                  <strong>Swiper : </strong>웹접근성 미준수(좌우버튼 키보드로
                  조작불가 등)
                  {/* (24.03.03) */}
                </ReadMeList>
                <ReadMeList>
                  <strong>File : </strong> 멀티파일 중복된 파일명 노출
                  {/* (24.01.26) */}
                </ReadMeList>
              </ReadMeListWrap>
            </div>
          ) : (
            <div key={innerIndex}>
              <ReadMeListWrap>
                <ReadMeList>여러분의 메일을 기다리는중!</ReadMeList>
              </ReadMeListWrap>
            </div>
          )
        )}
    </Body>
  );
}
