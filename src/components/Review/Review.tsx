import {
    Flex,
    Avatar,
    Text,
    Icon,
    Stack,
    Box,
} from "@chakra-ui/react";
import { IoMdStar } from 'react-icons/io';
import type { Review as ReviewType } from "../../model/ReviewModel";
import { useColorModeValue } from "../ui/color-mode";

type ReviewProps = {
    review: ReviewType;
};

export const Review: React.FC<ReviewProps> = ({ review }) => {
    const { image, name, rating, reviewNote, createdAt, isActive } = review;

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(createdAt);

    const nameColor = useColorModeValue("gray.900", "whiteAlpha.900");
    const dateColor = useColorModeValue("gray.500", "gray.400");
    const noteColor = useColorModeValue("gray.700", "gray.200");
    const inactiveOpacity = isActive ? 1 : 0.5;

    return (
        <Flex
            direction="column"
            gap={3}
            opacity={inactiveOpacity}
            lineHeight="1.6"
        >
            {/* Header: Avatar + Name + Date */}
            <Flex align="center" gap={4}>
                <Avatar.Root colorPalette={pickPalette(name)}>
                    <Avatar.Fallback name={name} />
                    <Avatar.Image src={image} />
                </Avatar.Root>
                <Box>
                    <Text fontWeight="semibold" fontSize="lg" color={nameColor}>
                        {name}
                    </Text>
                    <Text fontSize="sm" color={dateColor}>
                        {formattedDate}
                    </Text>
                </Box>
            </Flex>

            {/* Rating */}
            <Stack direction="row" gap={1}>
                {[...Array(5)].map((_, i) => (
                    <Icon
                        key={i}
                        as={IoMdStar}
                        color={i < rating ? "yellow.400" : dateColor}
                        boxSize={5}
                    />
                ))}
            </Stack>

            {/* Review Text */}
            <Text
                fontSize="md"
                color={noteColor}
                whiteSpace="pre-line"
            >
                {reviewNote}
            </Text>
        </Flex>
    );
};

const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"]

const pickPalette = (name: string) => {
  const index = name.charCodeAt(0) % colorPalette.length
  return colorPalette[index]
}

export default Review;