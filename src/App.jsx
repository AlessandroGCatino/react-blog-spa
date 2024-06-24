import HomePage from './pages/HomePage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/CreatePost.jsx';
import ShowPost from './pages/ShowPost.jsx';
import LayoutStandard from './layouts/LayoutStandard.jsx';
import IndexPage from './pages/IndexPage.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayoutStandard/>}>
              <Route index element={<HomePage/>} />
              <Route path="posts">
                  <Route index element={<IndexPage/>}/>
                  <Route path=":slug">
                      <Route index element={<ShowPost/>}/>
                  </Route>
                  <Route path="create" element={<CreatePost/>}/>
              </Route>
          </Route>
      </Routes>
    </BrowserRouter> 
  )
  
}

export default App
