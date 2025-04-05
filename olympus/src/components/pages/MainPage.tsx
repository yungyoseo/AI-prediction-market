import { Separator, Container, Grid, For } from "@chakra-ui/react";
import Header from "@/components/layout/Header";
import EventCard from "@/components/layout/EventCard";

const MainPage = () => {

    // imageUrl, subject, yes, no
    const eventInfo = [
        {
            imageUrl: "",
            subject: "우리팀은 2025 seoulana에서 우승할 수 있을까?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fus-recession-in-2025-01ZjnLjvO4a3.jpg&w=96&q=75",
            subject: "US recession in 2025?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Ffed-emergency-rate-cut-in-2025-Qswtta0b_qXR.jpg&w=96&q=75",
            subject: "FED emergency rate cut in 2025?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Ftiktok-banned-again-before-may-60j5h0MSI4Ol.jpg&w=96&q=75",
            subject: "Will TikTok be banned again before May?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "",
            subject: "우리팀은 2025 seoulana에서 우승할 수 있을까?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fus-recession-in-2025-01ZjnLjvO4a3.jpg&w=96&q=75",
            subject: "US recession in 2025?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Ffed-emergency-rate-cut-in-2025-Qswtta0b_qXR.jpg&w=96&q=75",
            subject: "FED emergency rate cut in 2025?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Ftiktok-banned-again-before-may-60j5h0MSI4Ol.jpg&w=96&q=75",
            subject: "Will TikTok be banned again before May?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "",
            subject: "우리팀은 2025 seoulana에서 우승할 수 있을까?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fus-recession-in-2025-01ZjnLjvO4a3.jpg&w=96&q=75",
            subject: "US recession in 2025?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Ffed-emergency-rate-cut-in-2025-Qswtta0b_qXR.jpg&w=96&q=75",
            subject: "FED emergency rate cut in 2025?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Ftiktok-banned-again-before-may-60j5h0MSI4Ol.jpg&w=96&q=75",
            subject: "Will TikTok be banned again before May?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "",
            subject: "우리팀은 2025 seoulana에서 우승할 수 있을까?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fus-recession-in-2025-01ZjnLjvO4a3.jpg&w=96&q=75",
            subject: "US recession in 2025?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Ffed-emergency-rate-cut-in-2025-Qswtta0b_qXR.jpg&w=96&q=75",
            subject: "FED emergency rate cut in 2025?",
            yes: "Yes",
            no: "No",
        },
        {
            imageUrl: "https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Ftiktok-banned-again-before-may-60j5h0MSI4Ol.jpg&w=96&q=75",
            subject: "Will TikTok be banned again before May?",
            yes: "Yes",
            no: "No",
        }
    ]

    return (
        <>
            <Header />
            <Separator />
            <Container>
                <Grid
                templateColumns={{base : "repeat(4, 1fr)"}}
                gap={4}
                paddingTop={4}>
                    <For each={eventInfo}>
                        {(item, index) => (
                            <EventCard 
                                key={index}
                                imageUrl={item.imageUrl}
                                subject={item.subject}
                                yes={item.yes}
                                no={item.no} />
                        )}
                    </For>
                </Grid>
            </Container>

        </>
    )
};

export default MainPage;