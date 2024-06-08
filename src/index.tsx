import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routers/index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <>
      <Helmet titleTemplate="%s" defaultTitle="Mioto - Ứng dụng cho thuê xe tự lái và có tài xế 4-7 chỗ">
        <meta name="description" content="Mioto - Ứng dụng cho thuê xe tự lái và có tài xế 4-7 chỗ" />
      </Helmet>

      <Routes />
    </>
  </>
);

reportWebVitals();
