import styled from 'styled-components';

export const ListItemSkeleton = styled.span`
  display: block;
  overflow: hidden;
  position: relative;
  height: 40px;
  width: 100%;
  transform: scale(1, 0.6);
  margin-top: 0;
  border-radius: 4px;
  margin-bottom: 0;
  transform-origin: 0 60%;
  background-color: rgba(0, 0, 0, 0.11);

  &::before {
    content: '';
  }

  &::after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    position: absolute;
    animation: MuiSkeleton-keyframes-wave 1.6s linear 0.5s infinite;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
  }

  @keyframes MuiSkeleton-keyframes-wave {
    0% {
      transform: translateX(-100%);
    }
    60% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @-webkit-keyframes MuiSkeleton-keyframes-wave {
    0% {
      transform: translateX(-100%);
    }
    60% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
