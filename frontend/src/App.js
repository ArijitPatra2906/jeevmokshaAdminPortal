import './App.css';
import { Route, Routes } from "react-router-dom"
import LoginView from './view/LoginView';
import DashboardView from './view/DashboardView';
import FaqView from './view/FaqView';
import CourseView from './view/CourseView';
import ContactView from './view/ContactView';
import BlogView from './view/BlogView';
import CreateBlogView from './view/CreateBlogView';
import BlogDetailsView from './view/BlogDetailsView';
import FaqDetailsView from './view/FaqDetailsView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginView />} />
        {/* <Route path='/register' element={<RegisterView />} /> */}
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path='/blog' element={<BlogView />} />
        <Route path='/createblog' element={<CreateBlogView />} />
        <Route path='/blog/:id' element={<BlogDetailsView />} />
        <Route path="/courseinfo" element={<CourseView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='/faq' element={<FaqView />} />
        <Route path='/faq/:id' element={<FaqDetailsView />} />
      </Routes>
    </div>
  );
}

export default App;
