import { useSelector } from 'react-redux';
import { selectAllGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const greeting = useSelector(selectAllGreetings);
  return (
    <>
      <h1>{greeting[0]?.content}</h1>
    </>
  );
};

export default Greeting;
