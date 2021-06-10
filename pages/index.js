import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getDataByArraySelector, fetchData } from '../store/data.reducer';
import {
  Main,
  CardItem,
  CardImage,
  CardTitle,
  CardPrice
} from '../styles/home.style';
import { wrapper } from '../store/store';

const Home = () => {
  const data = useSelector(getDataByArraySelector);
  return (
    <Main>
      {data?.map(({ title, sale_price, image, id }) => (
        <Link href={`/data/${encodeURIComponent(id)}`} key={id}>
          <CardItem>
            <CardImage src={image} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardPrice>{sale_price}</CardPrice>
          </CardItem>
        </Link>
      ))}
    </Main>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ req, res, ...etc }) => {
      await store.dispatch(fetchData());
    }
);

export default Home;
