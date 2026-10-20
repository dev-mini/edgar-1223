import { BrowserRouter } from 'react-router';
import AppRouter from './routes/AppRouter';
import { Toaster } from '@/components/ui/toast';

function App() {
    return (
        <BrowserRouter>
            <Toaster />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
