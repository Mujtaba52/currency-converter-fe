import './App.css'
import Home from './Pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
    </>
  )
}

export default App
