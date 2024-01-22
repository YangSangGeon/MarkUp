"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
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
const MarkupHeader = styled.header`
  border-bottom: 1px solid var(--boarder);
`;
const DeviceBtn = styled.button`
  width: 32px;
  height: 32px;
`;

export default function Header() {
  const [size, setSize] = useState("size-pc");
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector("header").classList.contains("device-pc")) {
        setSize("size-pc");
        console.log(size);
      } else if (
        document.querySelector("header").classList.contains("device-tablet")
      ) {
        setSize("size-tablet");
        console.log(size);
      } else if (
        document.querySelector("header").classList.contains("device-mobile")
      ) {
        setSize("size-mobile");
        console.log(size);
      }
    }, 100);
  }, [pathname]);
  return (
    <MarkupHeader className={size}>
      <Container>
        <Row>
          <Link href="/">
            <Image
              priority={true}
              width={70}
              height={18}
              src="/image/icon_main_logo.svg"
              alt="홈"
            />
          </Link>
          <DeviceBtns>
            <DeviceBtn
              onClick={() => setSize("size-mobile")}
              className="size-mobile"
            >
              <Image
                priority={true}
                width={32}
                height={32}
                src={
                  size === "size-mobile"
                    ? "/image/icon_mobile_on.svg"
                    : "/image/icon_mobile.svg"
                }
                alt="모바일사이즈"
              />
            </DeviceBtn>
            <DeviceBtn
              onClick={() => setSize("size-tablet")}
              className="size-tablet"
            >
              <Image
                priority={true}
                width={32}
                height={32}
                src={
                  size === "size-tablet"
                    ? "/image/icon_tablet_on.svg"
                    : "/image/icon_tablet.svg"
                }
                alt="태블릿사이즈"
              />
            </DeviceBtn>
            <DeviceBtn onClick={() => setSize("size-pc")} className="size-pc">
              <Image
                priority={true}
                width={32}
                height={32}
                src={
                  size === "size-pc"
                    ? "/image/icon_pc_on.svg"
                    : "/image/icon_pc.svg"
                }
                alt="PC사이즈"
              />
            </DeviceBtn>
          </DeviceBtns>
        </Row>
      </Container>
    </MarkupHeader>
  );
}
