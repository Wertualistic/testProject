import { Route, Routes } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts/Posts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostDetails from "./components/Posts/components/PostDetails/PostDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:postId" element={<PostDetails />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
