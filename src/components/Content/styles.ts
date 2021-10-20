import styled from "styled-components";

export const ContentStyle = styled.div`
  width: 440px;
  max-width: 440px;
  margin-top: 15px;

  padding: 20px;
  border-radius: 10px;

  &.theme1 {
    background: var(--theme1-toggle);

    > div {
      > button {
        background: var(--theme1-key-white);
        color: var(--theme1-text);
        box-shadow: 1px 3px var(--theme1-key-white-shadow);

        &:active {
          box-shadow: 1px 4px var(--theme1-key-white-shadow);
        }
      }
      .dark {
        background: var(--theme1-key-background);
        box-shadow: 1px 3px var(--theme1-key-shadow);
        color: var(--theme1-key-white);
        font-size: 16px;

        &:active {
          box-shadow: 1px 4px var(--theme1-key-shadow);
        }
      }
      .red {
        background: var(--theme1-key-red);
        box-shadow: 1px 3px var(--theme1-key-red-shadow);
        color: var(--theme1-key-white);
        font-size: 16px;

        &:active {
          box-shadow: 1px 4px var(--theme1-key-red-shadow);
        }
      }
    }
  }
  &.theme2 {
    background: var(--theme2-toggle);

    > div {
      > button {
        background: var(--theme2-key-white);
        color: var(--theme2-text);
        box-shadow: 1px 3px var(--theme2-key-white-shadow);

        &:active {
          box-shadow: 1px 4px var(--theme2-key-white-shadow);
        }
      }
      .dark {
        background: var(--theme2-key-background);
        box-shadow: 1px 3px var(--theme2-key-shadow);
        color: var(--theme2-key-white);
        font-size: 16px;

        &:active {
          box-shadow: 1px 4px var(--theme2-key-shadow);
        }
      }
      .red {
        background: var(--theme2-key-orange);
        box-shadow: 1px 3px var(--theme2-key-orange-shadow);
        color: var(--theme2-key-white);
        font-size: 16px;

        &:active {
          box-shadow: 1px 4px var(--theme2-key-orange-shadow);
        }
      }
    }
  }

  &.theme3 {
    background: var(--theme3-toggle);

    > div {
      > button {
        background: var(--theme3-key-dark);
        box-shadow: 1px 3px var(--theme3-key-dark-shadow);
        color: var(--theme3-text-yellow);

        &:active {
          box-shadow: 1px 4px var(--theme3-key-shadow);
        }
      }
      .dark {
        background: var(--theme3-key-background);
        box-shadow: 1px 3px var(--theme3-key-shadow);
        color: var(--theme2-key-white);
        font-size: 16px;

        &:active {
          box-shadow: 1px 4px var(--theme3-key-shadow);
        }
      }
      .red {
        background: var(--theme3-key-secondary);
        box-shadow: 1px 3px var(--theme3-key-secondary);
        color: var(--theme3-key-white);
        font-size: 16px;

        &:active {
          box-shadow: 1px 4px var(--theme3-key-secondary);
        }
      }
    }
  }
  > div {
    display: flex;
    justify-content: center;
    max-width: 440px;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 45px;
      width: 80px;
      font-size: 32px;

      padding: 5px 35px;
      margin: 10px;
      border-radius: 6px;
    }
  }

  .results {
    > button {
      width: 50%;
      padding: 8px 35px;
    }
  }
`;

export const Display = styled.div`
  padding: 20px;
  width: 440px;
  max-width: 440px;
  border-radius: 10px;

  > p {
    margin-right: 10px;
    color: #fff;
    float: right;
  }

  &.theme1 {
    background: var(--theme1-screen);
  }
  &.theme2 {
    background: var(--theme2-screen);
    > p {
      color: var(--theme2-text-white);
    }
  }
  &.theme3 {
    background: var(--theme3-toggle);
    > p {
      color: var(--theme3-text-yellow);
    }
  }
`;
