import styled from 'styled-components';
import { CaptionBold } from '../../styles/text.style';

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.color.secondary};
`;

const LeftIcon = styled.div`
  cursor: pointer;
  justify-self: flex-start;
`;

const RightIcon = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 1rem;
  cursor: pointer;
`;

const ItemCount = styled(CaptionBold)`
  background-color: ${props => props.theme.color.grey};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
`;

export { HeaderStyle, LeftIcon, RightIcon, ItemCount };
