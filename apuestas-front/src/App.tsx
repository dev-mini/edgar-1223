import { BrowserRouter } from 'react-router';
import AppRouter from './routes/AppRouter';
import { Toaster } from '@/components/ui/toast';
import { TooltipProvider } from './components/ui/tooltip';

function App() {
    return (
        <TooltipProvider>
            <BrowserRouter>
                <Toaster />
                <AppRouter />
            </BrowserRouter>
        </TooltipProvider>
    );
}

export default App;
