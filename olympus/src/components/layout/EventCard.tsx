import { Dialog, Button, Card, Stack, Text, Image, Portal, CloseButton } from "@chakra-ui/react"
import { LuCheck, LuX } from "react-icons/lu"

type EventCardProps = {
    imageUrl: string;
    subject: string;
    yes: string;
    no: string;
}

const EventCard = ({ imageUrl, subject, yes, no}: EventCardProps) => {

    return (
        <Dialog.Root>
        <Dialog.Trigger asChild>
            <Card.Root
            width="320px"
            cursor={'pointer'}
            _hover={{
                boxShadow: "lg",
                transform: "translateY(-2px)",
                transition: "all 0.2s ease-in-out",
            }}>
            <Card.Body>
                <Stack mb="6" gap="3">
                    <Image 
                    src={imageUrl}
                    boxSize={ 10 }
                    />
                    <Stack gap="0">
                        <Text fontWeight="semibold" textStyle="sm">
                            {subject}
                        </Text>
                    </Stack>
                </Stack>
            </Card.Body>
            <Card.Footer>
                <Stack
                display={'flex'}
                width={'100%'}>
                    <Stack
                    display={'flex'}
                    width={'100%'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    >
                        <Button
                        variant="subtle"
                        colorPalette="green"
                        flex="1"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}>
                        <LuCheck />
                            Buy {yes}
                        </Button>
                        <Button
                        variant="subtle"
                        colorPalette="red"
                        flex="1"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}>
                        <LuX />
                            Buy {no}
                        </Button>
                    </Stack>
                    <Text
                    fontSize={'sm'}
                    fontWeight={'light'}>$1m Vol.</Text>
                </Stack>
            </Card.Footer>
            </Card.Root>
        </Dialog.Trigger>
        <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
            <Dialog.Content>
                <Dialog.Header>
                <Dialog.Title>
                    
                    {subject}
                </Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </Dialog.Body>
                <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button>Save</Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
                </Dialog.CloseTrigger>
            </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
    )
}
  
export default EventCard;