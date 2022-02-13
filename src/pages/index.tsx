import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  // const { data: locations } = useSWR(SWR_LOCATIONS.locations, getLocations);

  return (
    <Main
      meta={
        <Meta
          title="myLocations App"
          description="This is build over a NextJS boilerplate"
        />
      }
    >
      <h1 className="text-2xl font-bold">
        My locations app made with NextJS boilerplate
      </h1>
    </Main>
  );
};

export default Index;
