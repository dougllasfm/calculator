import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  &.theme1 {
    background: var(--theme1-background);
  }
  &.theme2 {
    background: var(--theme2-background);
  }
  &.theme3 {
    background: var(--theme3-background);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 440px;
  color: #fff;
  margin-bottom: 15px;

  > span {
    font-size: 22px;
  }

  &.theme2 {
    color: var(--theme2-text);
  }
  &.theme3 {
    color: var(--theme3-text-yellow);
  }
`;

export const ThemeOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.theme1 {
    > button {
      background: var(--theme1-toggle);;
      color: var(--theme1-key-white);
      box-shadow: 1px 1px var(--theme1-key-background);
    }
  }
  &.theme2 {
    > button {
      background: var(--theme2-key-white);
      color: var(--theme2-text);
      box-shadow: 1px 1px var(--theme2-key-white-shadow);
    }
  }
  &.theme3 {
    > button {
      background: var(--theme3-key-dark);
      box-shadow: 1px 1px var(--theme3-key-dark-shadow);
      color: var(--theme3-text-yellow);
    }
  }

  > p {
    margin-left: 30px;
    font-size: 12px;
    text-transform: uppercase;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;
    margin-left: 10px;
    border-radius: 50%;

    cursor: pointer;
  }
`;
