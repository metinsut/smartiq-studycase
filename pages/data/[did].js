import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  fetchData,
  getDataByArraySelector,
  getDataDetailById,
  addItemToBasket
} from '../../store/data.reducer';
import { useEffect } from 'react';
import { wrapper } from '../../store/store';
import {
  CardDetailWrapper,
  CardDetailImage,
  CardDetailTitle,
  CardDetailSlug,
  CardDetailDesciption,
  CardDetailBody,
  CardDetailPrice,
  CardDetailStock,
  CardDetailAddBasket,
  GoBack
} from '../../styles/dataDetail.style';
import { IconBlackColor } from '../../styles/icon.style';

const CardDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { did } = router.query;
  const data = useSelector(getDataByArraySelector);
  const dataDetail = useSelector(state => getDataDetailById(state, did));
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, []);

  const {
    body = '',
    description = '',
    id = '',
    image = '',
    sale_price = '',
    slug = '',
    stock = '',
    title = ''
  } = dataDetail;

  const addToBasket = () => {
    if (id) {
      dispatch(addItemToBasket({ id, title, sale_price, image }));
    }
  };

  return (
    <>
      <GoBack>
        <Link href="/">
          <IconBlackColor>
            <i aria-hidden className="fas fa-arrow-alt-circle-left fa-3x"></i>
          </IconBlackColor>
        </Link>
      </GoBack>
      <CardDetailWrapper>
        <CardDetailImage src={image}></CardDetailImage>
        <CardDetailTitle>{title}</CardDetailTitle>
        <CardDetailSlug>{slug}</CardDetailSlug>
        <CardDetailDesciption>{description}</CardDetailDesciption>
        <CardDetailBody>{body}</CardDetailBody>
        <CardDetailPrice>Price: {sale_price}</CardDetailPrice>
        <CardDetailStock>Stock: {stock}</CardDetailStock>
        <CardDetailAddBasket onClick={addToBasket}>
          Add Basket
        </CardDetailAddBasket>
      </CardDetailWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ req, res, ...etc }) => {
      await store.dispatch(fetchData());
    }
);

export default CardDetail;
