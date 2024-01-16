"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [size, setSize] = useState("size-pc");
  useEffect(() => {}, []);
  const Container = styled.div`
    width: 100%;
    max-width: 1532px;
    margin: 0 auto;
  `;
  const Row = styled.div`
    padding: 0 16px;
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
  `;
  const DeviceBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: calc(100% - 70px);
  `;
  const Header = styled.header`
    border-bottom: 1px solid var(--boarder);
  `;
  const DeviceBtn = styled.button`
    width: 32px;
    height: 32px;
  `;
  return (
    <Header className={size}>
      <Container>
        <Row>
          <Link href="/">
            <Image width={70} height={18} src="/icon_main_logo.svg" alt="홈" title="홈" />
          </Link>
          <DeviceBtns>
            <DeviceBtn onClick={() => setSize("size-mobile")}>
              <Image width={32} height={32} 
                src={
                  size === "size-mobile"
                    ? "/icon_mobile_on.svg"
                    : "/icon_mobile.svg"
                }
                alt="모바일사이즈"
              />
            </DeviceBtn>
            <DeviceBtn onClick={() => setSize("size-tablet")}>
              <Image width={32} height={32} 
                src={
                  size === "size-tablet"
                    ? "/icon_tablet_on.svg"
                    : "/icon_tablet.svg"
                }
                alt="태블릿사이즈"
              />
            </DeviceBtn>
            <DeviceBtn onClick={() => setSize("size-pc")}>
              <Image width={32} height={32} 
                src={size === "size-pc" ? "/icon_pc_on.svg" : "/icon_pc.svg"}
                alt="PC사이즈"
              />
            </DeviceBtn>
          </DeviceBtns>
        </Row>
      </Container>
    </Header>
  );
}
