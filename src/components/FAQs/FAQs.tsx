import type { FrequentAskedQuestion as FrequentAskedQuestionType } from "@/model/FrequentAskedQuestion";
import { FaqService } from "@/services/FaqService";
import { Accordion, Box, Icon, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Divider from "../Divider";
import { useColorModeValue } from "../ui/color-mode";

const FAQs: React.FC = () => {
    const [faqs, setFaqs] = useState<FrequentAskedQuestionType[]>([]);

    useEffect(() => {
        const allFaqs = FaqService.getAllQuestions();
        setFaqs(allFaqs);
    }, []);

    const answerColor = useColorModeValue('gray.700', '#c0beb9');

    return (
        <>
        <Box paddingBlock={'3rem'}>
            <Divider></Divider>
            <Accordion.Root multiple size={'lg'} variant={'enclosed'} border={0} borderRadius={'0rem'}>
                {faqs.map((question: FrequentAskedQuestionType, index) => (
                    <Accordion.Item key={question.id} value={question.id.toString()}>
                        <Accordion.ItemTrigger cursor={'pointer'}>
                            <Icon fontSize="lg" as={question.icon} />
                            <Box flex={'1'}>
                                <Text as='h1'
                                    color={'myAppTextColor'}
                                >
                                    {question.question}
                                </Text>
                            </Box>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <Text as='p' color={answerColor}>{question.answer}</Text>
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
            <Divider></Divider>
        </Box>
        </>
    );
};

export default FAQs;