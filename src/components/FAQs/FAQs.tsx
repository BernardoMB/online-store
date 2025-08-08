import type { FrequentAskedQuestion as FrequentAskedQuestionType } from "@/model/FrequentAskedQuestion";
import { FaqService } from "@/services/FaqService";
import { Accordion, Box, Icon, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const FAQs: React.FC = () => {
    const [faqs, setFaqs] = useState<FrequentAskedQuestionType[]>([]);

    useEffect(() => {
        const allFaqs = FaqService.getAllQuestions();
        setFaqs(allFaqs);
    }, []);

    return (
        <>
            <Accordion.Root multiple size={'lg'} variant={'enclosed'}>
                {faqs.map((question: FrequentAskedQuestionType, index) => (
                    <Accordion.Item key={question.id} value={question.id.toString()}>
                        <Accordion.ItemTrigger cursor={'pointer'}>
                            <Icon fontSize="lg" color="fg.subtle">
                                {question.icon}
                            </Icon>
                            <Box flex={'1'}><Text as='h1'>{question.question}</Text></Box>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <Text as='p'>{question.answer}</Text>
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </>
    );
};

export default FAQs;