import styled from "styled-components";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { RouteComponentProps } from "react-router";
import { DatePicker, Button, message } from "./vendors/antd";
import { Provider, KeepAlive } from "react-keep-alive";
import Demo1 from "./demo1";
import { authStore, appStore } from "./stores";

export interface Props extends RouteComponentProps {
  style: any;
}

export default function demo(props: Props) {
  return <Wrapper>demo</Wrapper>;
}
const Wrapper = styled.div``;
