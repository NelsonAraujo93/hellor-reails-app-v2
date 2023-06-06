import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const { greeting, status } = useSelector((store) => store.greetings);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'failed') return;
    dispatch(getRandomGreeting());
  }, [dispatch]);

  if(!greeting) {
    return(
      <div>
        <div>loading...</div>
      </div>
    )
  }
  return (
    <div>
      <section className="greeting-container">
        <div>{greeting}</div>
      </section>
    </div>
  );
}

export default Greeting;