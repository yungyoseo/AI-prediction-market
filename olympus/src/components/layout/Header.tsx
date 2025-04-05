import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Container, Stack, Heading } from "@chakra-ui/react"
import { LuPlus } from "react-icons/lu";

import CreateMarketButton from "@/components/layout/CreateMarketButton";

const Header = () => {
    return (
        <Container
        position={'relative'}
        max-width={'8xl'}
        width={'100%'}
        marginInline={'auto'}
        paddingBlock={{base : '4', md : '8' }}
        >
            <Stack
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDirection={'row'}>
                {/* <Logo /> */}
                <Heading size="3xl">
                    Olympus
                </Heading>
                <Stack
                display={'flex'}
                alignItems={'center'}
                flexDirection={'row'}
                >
                    <CreateMarketButton />
                    <WalletMultiButton/>
                    <WalletDisconnectButton />
                </Stack>
            </Stack>
        </Container>
    );
}

export default Header;