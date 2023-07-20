import { useSelector } from 'react-redux';
import { Account } from './Account';
import { LangSwitcher } from './LangSwitcher';

export const App = () => {
  const lang = useSelector(state => state.locale.lang);
  return (
    <div>
      <LangSwitcher />
      <hr />
      <div>Current lang: {lang} </div>
      <hr />
      <Account />
    </div>
  );
};

// Модуль7 урок1 2га частина
// https://codesandbox.io/s/goit-react-textbook-lesson-13-redux-toolkit-react75-2q3sf2?file=/src/redux/tasksSlice.js 