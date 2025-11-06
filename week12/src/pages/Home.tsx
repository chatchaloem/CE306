import { Box, Container, Heading, Text, Card, Flex } from "@radix-ui/themes";

function Home() {
    return (
        <Container size="3" py="7" >
            <Box>
                <Heading size="3" mb="4" style={{ fontWeight: 600, textAlign: "center" }}>
                    WELLCOME TO KEYYESS
                </Heading>
                <Text size="4" mb="6" style={{ textAlign: "center", opacity: 0.8 }}>
                    เว็บไซต์แนะนำตัวและประวัติส่วนตัว
                </Text>

                <Flex direction="column" gap="4">
                    <Card variant="surface" style={{backgroundColor: "var(--gray-2)", border: "1px solid var(--gray-4)", boxShadow: "0 2px 6px var(--gray-3)",}}>
                        <Heading size="5" mb="2">
                            เกี่ยวกับเว็บไซต์นี้
                        </Heading>
                        <Text size="3" color="gray">
                            เว็บไซต์นี้สร้างขึ้นเพื่อแสดงเนื้อหาข้อมูลส่วนตัว
                            ประวัติการศึกษาและผลงานทางด้านต่างๆ โดยใช้เทคโนโลยี React, React Router และ Radix UI
                        </Text>
                    </Card>

                    <Card variant="surface" style={{backgroundColor: "var(--gray-2)", border: "1px solid var(--gray-4)", boxShadow: "0 2px 6px var(--gray-3)",}}>
                        <Heading size="5" mb="2">
                            เทคโนโลยีที่ใช้
                        </Heading>
                        <Text size="3" color="gray">
                            • React 19 + TypeScript <br />
                            • React Router สำหรับการจัดการหน้า <br />
                            • Radix UI สำหรับ UI Components <br />
                            • Vite สำหรับ Build Tool
                        </Text>
                    </Card>
                </Flex>
            </Box>
        </Container>
    );
}

export default Home;