import { StrictMode } from 'react'
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { createRoot } from 'react-dom/client'
import { Wallet } from './Wallet.tsx'


createRoot(document.getElementById('root')!).render(
<StrictMode>
    <ChakraProvider>
        <Wallet />
    </ChakraProvider>
</StrictMode>,
)
