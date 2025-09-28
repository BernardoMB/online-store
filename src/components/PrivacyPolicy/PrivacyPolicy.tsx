import React from "react";
import { Grid, Stack, Text, Image, Box, Card, Link, AspectRatio } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import HomePageSection from "../HomePageSection/HomePageSection";
import Divider from "../Divider";

const PrivacyPolicy: React.FC = () => {
    const msgColor = useColorModeValue('gray.700', '#c0beb9');

    return (
        <>
            <HomePageSection>
                <Grid gap={{ base: '2rem', md: '4rem' }} gridTemplateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(2, minmax(0px, 1fr))' }}>
                    <Stack gap={4}>
                        <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="medium" color="myAccentColor">Legal</Text>
                        <Text fontSize={'2.25rem'} lineHeight={'2.75rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600} letterSpacing={'-0.02rem'}>Privacy Policy</Text>
                        <Text color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} fontSize={'1.125rem'}>
                            Your privacy matters to us at Hue & Hoot. We respect your data across our website.
                        </Text>
                    </Stack>
                </Grid>
            </HomePageSection>
            <Divider></Divider>
            <HomePageSection>
                <Box>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        PERSONAL INFORMATION WE COLLECT
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        When you visit the Site, we do not automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we do not collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”. This website does not collect Device Information.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        Device Information can be collected using the following technologies:
                    </Text>
                    <ul>
                        <li style={{ color: msgColor, lineHeight: '1.75rem', marginBottom: '1rem' }}>
                            “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
                        </li>
                        <li style={{ color: msgColor, lineHeight: '1.75rem', marginBottom: '1rem' }}>
                            “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                        </li>
                        <li style={{ color: msgColor, lineHeight: '1.75rem', marginBottom: '1rem' }}>
                            “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
                        </li>
                    </ul>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information.”
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
                    </Text>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        HOW DO WE USE YOUR PERSONAL INFORMATION?
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
                        Communicate with you;
                        Screen our orders for potential risk or fraud; and
                        When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services. Initialy we have indicated that we will not use your data for this purpose, but this might change in the feature. You will always be able to opt out. If any of this informacion changes we will update this privacy policy.
                    </Text>
                    <Text as="p" color={msgColor} lineHeight={'1.75rem'} whiteSpace={'pre-line'} marginBottom={'1rem'}>
                        We do not use Device Information to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                    </Text>
                    <Text as="h2" fontSize={'1.5rem'} lineHeight={'2rem'} fontWeight={600} marginBottom={'1rem'}>
                        SHARING YOUR PERSONAL INFORMATION
                    </Text>


                    We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.

                    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.

                    BEHAVIORAL ADVERTISING
                    As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.

                    You can opt out of targeted advertising by:
                    FACEBOOK - https://www.facebook.com/settings/?tab=ads
                    GOOGLE - https://www.google.com/settings/ads/anonymous

                    Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/.

                    DO NOT TRACK
                    Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.

                    YOUR RIGHTS
                    If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.

                    Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.

                    DATA RETENTION
                    When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.



                    Third Party Pixels and Cookies Third Party Pixels and Cookies. Notwithstanding anything else in this policy, we and/or our partners may use pixels and pixel tags, and place, read or use cookies the collect information from your device and/or Internet browser. These cookies do not contain personally identifiable information, however, it may be possible for our third-party business partners to combine it with other information in order to identify your email address or other personally identifiable information about you. For example, the cookies may reflect de-identified demographic or other data linked to data you voluntarily have submitted to us, e.g., your email address, which we may share with a data provider solely in hashed, non-human readable form. By using our Service, you agree that us and our third-party partners may store, sell, port, combine with other data, monetize, utilize and otherwise use either (i) the personally indefinable information about you that we share with them, or (ii) the personally identifiable information they discover and/or identify as described above. Visitors can also express their choices for display advertising, through the following platforms: Digital Advertising Alliance opt-out platform or the Network Advertising Initiative opt-out platform. We and/or our partners may also use cookies for delivering personalized advertising emails. These cookies are used to identify the visitors of our advertisers’ websites and send personalized emails based on the visitors’ browsing experience. We and/or our partners use cookies, pixels and other tracking technology to associate certain Internet-related information about you, such as your Internet Protocol address and what Web browser you are using, with certain of your online behaviors, such as opening emails or browsing websites. Such information is used to customize ads or content and may be shared with our partners.


                    CHANGES
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.

                    CONTACT US
                    For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at Support@patrickadairdesigns.com or by mail using the details provided below:

                    Patrick Adair Designs

                    229 Harris Ave S
                    Salt Lake City, Utah 84115

                    This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from PatrickAdairDesigns.com (the “Site”).
                </Box>

            </HomePageSection>
        </>
    );
};

export default PrivacyPolicy;


