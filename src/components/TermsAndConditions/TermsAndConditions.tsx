import React from "react";
import { Grid, Stack, Text, Image, Box, Card, Link, AspectRatio } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import HomePageSection from "../HomePageSection/HomePageSection";
import Divider from "../Divider";

const TermsAndConditions: React.FC = () => {
    const msgColor = useColorModeValue('gray.700', '#c0beb9');

    return (
        <>
            <HomePageSection>
                <Grid gap={{ base: '2rem', md: '4rem' }} gridTemplateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(2, minmax(0px, 1fr))' }}>
                    <Stack gap={4}>
                        <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="medium" color="myAccentColor">Current as of October 2025</Text>
                        <Text fontSize={'2.25rem'} lineHeight={'2.75rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600} letterSpacing={'-0.02rem'}>Terms and Conditions</Text>
                        <Text color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} fontSize={'1.125rem'}>
                            By purchasing or using products from this website, you agree to be bound by the following terms and conditions. Please read them carefully before making a purchase.
                        </Text>
                    </Stack>
                </Grid>
            </HomePageSection>
            <Divider></Divider>
            <HomePageSection>
                <Box>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        Delivery Timelines
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        All products are handmade, made to order. Our production timelines vary for each ring based on many things including but not limited to - material availability, labor availability, and order volume. Furthermore, regardless of what you have been told or what has been represented to you, ALL production timelines are merely estimates and are not guarantees. Even if you have ordered a similar ring from us in the past that does not mean the timeline in that order will be the same with this order. We will do our absolute best to get your order shipped within our current estimated timelines but by placing an order, you are acknowledging production delays may occur due to the things listed above or other reasonable delays. These delays can be out of our control and we will do all that we can within our control to get it shipped on time. We will do our best to notify you if any delays do occur. If you have any questions regarding the status of your order or are needing your order sooner than the current estimated timeline, email us at bmondragonbrozon@gmail.com
                    </Text>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        Returns
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        In order to initiate a refund request, please contact bmondragonbrozon@gmail.com within 30 days of the delivery date. Buyers are responsible for return shipping costs. If the item is not returned in its original condition, the buyer is responsible for any loss in value.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        We are unable to process refunds for ANY rings containing precious metals such as Gold, Meteorite, and Opal.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        We are unable to process refunds for any custom rings since every custom ring is made to your specifications.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        If you have any questions on how a custom design will look, please reach out to us. We will not process a refund on a custom order because you do not like how it turns out.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        If you are not completely satisfied with your product upon receiving it, please reach out to us with specifics to see what we can do to accommodate you for a replacement.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        Additional non-returnable items:
                    </Text>
                    <ul>
                        <li style={{ color: msgColor, lineHeight: '1.75rem', marginBottom: '1rem' }}>
                            Gift cards
                        </li>
                        <li style={{ color: msgColor, lineHeight: '1.75rem', marginBottom: '1rem' }}>
                            Downloadable software products
                        </li>
                        <li style={{ color: msgColor, lineHeight: '1.75rem', marginBottom: '1rem' }}>
                            Some health and personal care items
                        </li>
                    </ul>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        To complete your return, we require a receipt or proof of purchase.
                    </Text>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        Cancellations
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        We accept cancellations as long as you contact us within the first 48 hours of your order being placed. This policy is put into place because after the 48 hour period, materiaIs and production will begin for your handmade piece. If you request a cancellation after the 48 hour period, we may cancel your order for a materials and processing fee. *(We are unable to cancel any CUSTOM orders or orders containing GOLD for ANY REASON.)*
                    </Text>
                    {/* If you placed an order for a ring with the "Unsure - Send Ring Sizer First" size option and are looking to cancel your order before we have your size, we may cancel your order for a materials/shipping fee for the ring sizer. */}
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        Refunds (if applicable)
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
                    </Text>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        Late or missing refunds (if applicable)
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        If you haven’t received a refund yet, first check your bank account again.
                        Then contact your credit card company, it may take some time before your refund is officially posted.
                        Next contact your bank. There is often some processing time before a refund is posted.
                        If you’ve done all of this and you still have not received your refund yet, please contact us at bmondragonbrozon@gmail.com.
                    </Text>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        Exchanges (if applicable)
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at bmondragonbrozon@gmail.com and send your item to: 716 Fishburn Rd. Hershey, PA 17033.
                    </Text>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        Shipping
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        To return your product, you should mail your product to: 716 Fishburn Rd. Hershey, PA 17033. You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
                    </Text>
                </Box>
            </HomePageSection>
        </>
    );
};

export default TermsAndConditions;


