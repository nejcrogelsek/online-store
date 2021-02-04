import React from "react";
import styled from "styled-components";

const Stylediframe = styled.iframe`
  width: 100%;
  border: 0;
  overflow: hidden;
  height: 281px;
`;

const InstagramEmbed = () => {
  return (
    <>
      <script src='https://cdn.lightwidget.com/widgets/lightwidget.js'></script>
      <script src='https://cdn.lightwidget.com/widgets/lightwidget.js'></script>
      <Stylediframe
        src='//lightwidget.com/widgets/ab7837f690555adcb04a26e43d6a8ac8.html'
        scrolling='no'
        allowtransparency='true'
        className='lightwidget-widget'></Stylediframe>
    </>
  );
};

export default InstagramEmbed;
