import Link from 'next/link';
import { HeaderStyle, LeftIcon, RightIcon, ItemCount } from './header.style';
import { H1 } from '../../styles/text.style';
import { IconWhiteColor } from '../../styles/icon.style';
import { useSelector } from 'react-redux';
import { getBasketItemsLenghtSelector } from '../../store/data.reducer';

const Header = () => {
  const getBasketItemCount = useSelector(getBasketItemsLenghtSelector);
  return (
    <HeaderStyle>
      <LeftIcon>
        <Link href="/">
          <H1>E-Commerce Web App</H1>
        </Link>
      </LeftIcon>
      <Link href="/checkout">
        <RightIcon>
          <IconWhiteColor>
            <i aria-hidden className="fas fa-shopping-cart fa-3x"></i>
          </IconWhiteColor>
          <ItemCount>{getBasketItemCount}</ItemCount>
        </RightIcon>
      </Link>
    </HeaderStyle>
  );
};

export default Header;
