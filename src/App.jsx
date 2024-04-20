import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import BookRecords from './Components/BookRecords'
import AuthorRecords from './Components/AuthorRecords'
import CreateBook from './Components/CreateBook'
import EditBook from './Components/EditBook'
import CreateAuthor from './Components/CreateAuthor'
import EditAuthor from './Components/EditAuthor'
import AuthorInfo from './Components/AuthorInfo'


function App() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/books" element={<BookRecords />}></Route>
             <Route path="/author" element={<AuthorRecords />}></Route>
             <Route path="create-book" element={<CreateBook />}></Route>
             <Route path="edit-book" element={<EditBook />}></Route>
             <Route path="create-author" element={<CreateAuthor />}></Route>
             <Route path="edit-author" element={<EditAuthor />}></Route>
             <Route path="authorinfo" element={<AuthorInfo />}></Route>
        </Routes>
        </BrowserRouter>
        
        
        </>
    )
}
export default App;