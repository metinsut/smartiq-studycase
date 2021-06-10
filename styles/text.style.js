import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.color.white};
`;

const Caption = styled.p`
  font-size: 1.6rem;
  color: ${props => props.theme.color.white};
`;

const CaptionBold = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.theme.color.white};
`;

export { H1, Caption, CaptionBold };
