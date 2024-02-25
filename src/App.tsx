// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import TableSelection from './TableSelection.module';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return <MantineProvider>{
      // <BrowserRouter>
      // <Routes>
      //   <Route></Route>
      // </Routes>
      // </BrowserRouter>

        <TableSelection></TableSelection>


    }</MantineProvider>;
}