import { action } from "easy-peasy";

const App = {
  nilai: 0,
  naik: action((state, payload) => {
    const { nilai } = payload;
    state.nilai = state.nilai + nilai;
  })
};

export default App;
