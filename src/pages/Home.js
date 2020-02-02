import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

export const Home = () => {
  const { nilai } = useStoreState(state => state.app);
  const { naik } = useStoreActions(actions => actions.app);

  return (
    <div>
      {nilai}
      <button onClick={() => naik({ nilai: 4 })}>naik 4</button>
    </div>
  );
};
