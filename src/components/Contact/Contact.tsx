import {
    Box,
    Stack,
    Heading,
    Text,
    Input,
    Button,
    Link,
    Textarea,
    Grid
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useState } from "react";
import './Contact.css';

const Contact: React.FC = () => {
    //#region Phone number
    const [phone, setPhone] = useState("");
    const formatPhoneNumber = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 10); // Only digits, max 10
        const parts = [];

        if (digits.length > 0) parts.push("(" + digits.slice(0, 3));
        if (digits.length >= 4) parts.push(") " + digits.slice(3, 6));
        if (digits.length >= 7) parts.push("-" + digits.slice(6, 10));

        return parts.join("");
    };
    const handleChange = (e: any) => {
        const raw = e.target.value;
        setPhone(formatPhoneNumber(raw));
    };
    //#endregion

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);

        // Basic validation
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !phone ||
            !formData.message
        ) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            // Replace with your actual endpoint
            const response = await fetch("https://your-api.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    phone,
                }),
            });

            if (!response.ok) throw new Error("Request failed");

            alert("Your message has been sent!");
            // Optionally reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            });
            setPhone("");
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        }
    };

    //#region Colors
    const msgColor = useColorModeValue('gray.700', '#c0beb9');
    const backgroundColor = useColorModeValue('white', '#222221');
    const borderColor = useColorModeValue('myAppGlobalBorderColor', '#3b3a37');
    const inputClass = useColorModeValue('contact-input-light', 'contact-input-dark')
    const legendColor = useColorModeValue('#82827c', '#7c7b74');
    const inputColor = useColorModeValue('gray.700  ', '#7c7b74');
    //#endregion

    return (
        <>
            <Grid gap={'4rem'} gridTemplateColumns={'repeat(2, minmax(0px, 1fr))'}>
                <Stack gap={4}>
                    <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="bold" color="teal.500" >Contact</Text>
                    <Text fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600}>We’d Love to Hear From You</Text>
                    <Text color={msgColor}>
                        Let us know your thoughts or if you have any questions
                    </Text>
                </Stack>
                <Box p={6} borderWidth="1px" backgroundColor={backgroundColor} borderColor={'myAppGlobalBorderColor'}>
                    <form onSubmit={handleSubmit}>
                        <Stack gap={'2.5rem'} alignItems={'start'}>
                            <Stack gap={'1.25rem'}>
                                <Stack direction={{ base: "column", md: "row" }} gap={'1rem'}>
                                    <Input placeholder="First name"
                                        className={inputClass}
                                        name="firstName"
                                        required
                                        borderColor={borderColor}
                                        borderRadius={'0.125rem'}
                                        height={'3rem'}
                                        fontSize={'1.125rem'}
                                        lineHeight={'1.75rem'}
                                        paddingInline={'1rem'}
                                        color={inputColor}
                                        focusRingColor={'teal.300'}
                                        outlineOffset={'0px'}
                                        outlineStyle={'solid'}
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                    <Input placeholder="Last name"
                                        className={inputClass}
                                        name="lastName"
                                        required
                                        borderColor={borderColor}
                                        borderRadius={'0.125rem'}
                                        height={'3rem'}
                                        fontSize={'1.125rem'}
                                        lineHeight={'1.75rem'}
                                        paddingInline={'1rem'}
                                        color={inputColor}
                                        focusRingColor={'teal.300'}
                                        outlineOffset={'0px'}
                                        outlineStyle={'solid'}
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </Stack>
                                <Input placeholder="Phone number"
                                    className={inputClass}
                                    name="phone number"
                                    type="phone"
                                    required
                                    value={phone}
                                    onChange={handleChange}
                                    maxLength={14}
                                    borderColor={borderColor}
                                    borderRadius={'0.125rem'}
                                    height={'3rem'}
                                    fontSize={'1.125rem'}
                                    lineHeight={'1.75rem'}
                                    paddingInline={'1rem'}
                                    color={inputColor}
                                    focusRingColor={'teal.300'}
                                    outlineOffset={'0px'}
                                    outlineStyle={'solid'}
                                />
                                <Input placeholder="Email"
                                    className={inputClass}
                                    name="email"
                                    type="email"
                                    required
                                    borderColor={borderColor}
                                    borderRadius={'0.125rem'}
                                    height={'3rem'}
                                    fontSize={'1.125rem'}
                                    lineHeight={'1.75rem'}
                                    paddingInline={'1rem'}
                                    color={inputColor}
                                    focusRingColor={'teal.300'}
                                    outlineOffset={'0px'}
                                    outlineStyle={'solid'}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <Textarea placeholder="Your message"
                                    className={inputClass}
                                    name="message"
                                    required
                                    borderColor={borderColor}
                                    borderRadius={'0.125rem'}
                                    height={'3rem'}
                                    fontSize={'1.125rem'}
                                    lineHeight={'1.75rem'}
                                    paddingInline={'1rem'}
                                    color={inputColor}
                                    focusRingColor={'teal.300'}
                                    outlineOffset={'0px'}
                                    outlineStyle={'solid'}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} color={legendColor}>
                                    By submitting, you will receive a response from Hue & Hoot and agree to our{" "}
                                    <Link href="/en/legal/privacy-policy" color="teal.500" textDecoration="underline">
                                        Privacy Policy
                                    </Link>. You can unsubscribe at any time.
                                </Text>
                            </Stack>
                            <Button type="submit" colorScheme="teal" borderRadius={'0.125rem'} backgroundColor={'teal.300'} color={'white'} flexShrink={0}>Request</Button>
                        </Stack>
                    </form>
                </Box>
            </Grid>
        </>
    );
}

export default Contact;