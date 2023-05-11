import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './styles/app.scss';
import { ArticleListPage } from './pages/ArticlePages/ArticleListPage/ArticleListPage';
import { VideoPage } from './pages/VideoPage/VideoPage';
import { GalleryPage } from './pages/GalleryPage/GalleryPage';
import { ThreeDEarthPage } from './pages/ThreeDEarthPage/ThreeDEarthPage';
import { ReliefPage } from './pages/ReliefPage/ReliefPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ArticlePage } from './pages/ArticlePages/ArticlePage/ArticlePage';
import { useAppSelector } from './hooks/redux'
import { Stars } from '@react-three/drei'
import {
  ArticleScientificPublications
} from "./pages/ArticlePages/ArticleScientificPublicationsPage/ArticleScientificPublications";

export default function App() {

  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/:time/articles', element: <ArticleListPage /> },
    { path: '/:time/articles/:id', element: <ArticlePage /> },
    { path: '/:time/articles/scientificPublications', element: <ArticleScientificPublications /> },
    { path: '/:time/video', element: <VideoPage /> },
    { path: '/:time/gallery', element: <GalleryPage /> },
    // { path: '/:time/gallery/:id', element: <Gallery /> },
    { path: '/:time/earth', element: <ThreeDEarthPage /> },
    { path: '/:time/relief', element: <ReliefPage /> },
    // { path: '/:time/relief/:id', element: <Relief /> },
    { path: '/*', element: <NotFoundPage /> },
  ];

  const {time: timeState, instrument: instrumentState } = useAppSelector((state) => state.timeLineReducer);

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          {routes.map((obj, i) => {
            return <Route path={obj.path} element={obj.element} key={i} />;
          })}
        </Routes>
      </div>
    </div>
  );
}
