import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { IndexPages } from './pages/IndexPage.jsx';
import { EpisodesPages } from './pages/EpisodesPage.jsx';
import { StructureComponent } from './components/StructureComponent/StructureComponent.jsx';
import { EpisodeDetailsPage } from './pages/EpisodeDetailsPages/EpisodeDetailsPage.jsx';
import { FormCharacterPage } from './pages/FormCharacterPage.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route element={<StructureComponent />}>
            <Route path='' element={<IndexPages/>} />
            <Route path='/episodes' element={<EpisodesPages/>} />
            <Route path='/episode/:id' element={<EpisodeDetailsPage/>}/>
            <Route path='/newcharacter' element={<FormCharacterPage/>} />
            <Route path='*' element={<Navigate to= '/' replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
