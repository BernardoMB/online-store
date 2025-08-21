import React, { useState, useEffect } from "react";
import { cartService } from "../../services/CartService";
import "./Checkout.css";
import type { CartItem } from "../../model/CartModel";
import { Box, Button, Flex, Grid, Input, Link, Stack, Text, useToken } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/form-control";
import HomePageSection from "../HomePageSection/HomePageSection";
import { useColorModeValue } from "../ui/color-mode";
import { loadStripe } from "@stripe/stripe-js";
import type { CheckoutCardItem } from "@/model/CheckoutModel";
import CheckoutItemCard from "../CheckoutItemCard";

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function groupByIdWithSizes(items: CartItem[]): CheckoutCardItem[] {
  //console.log('Grouping items by productId and sizes', items);
  const grouped: any = {};
  for (const item of items) {
    if (!grouped[item.productId]) {
      // Product is not there
      grouped[item.productId] = { product: item, sizes: Array(item.quantity).fill(item.size) };
    } else {
      // Product is already there
      grouped[item.productId].sizes.push(...Array(item.quantity).fill(item.size));
    }
  }
  return Object.values(grouped);
}

const Checkout: React.FC = () => {
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

  const handlePhoneNumberChange = (e: any) => {
    const raw = e.target.value;

    const error = validateField('phone', raw);
    setErrors((prev) => ({ ...prev, ['phone']: error }));
    if (error) {
      setFormValid(false);
    }

    setPhone(formatPhoneNumber(raw));
  };
  //#endregion

  const [items, setItems] = useState(cartService.getItems());
  const [total, setTotal] = useState(cartService.getTotalPrice());
  const [groupedItems, setGroupedItems] = useState(groupByIdWithSizes(items));

  useEffect(() => {
    const refresh = () => {
      setItems(cartService.getItems());
      setTotal(cartService.getTotalPrice());
      setGroupedItems(groupByIdWithSizes(cartService.getItems()));
    };

    // Wrap cart mutators to trigger re-renders if needed
    const originalAdd = cartService.addItem.bind(cartService);
    const originalRemove = cartService.removeItem.bind(cartService);
    const originalRemoveAll = cartService.removeItemAll.bind(cartService);

    cartService.addItem = (...args) => {
      originalAdd(...args);
      refresh();
    };
    cartService.removeItem = (...args) => {
      originalRemove(...args);
      refresh();
    };
    cartService.removeItemAll = (...args) => {
      originalRemoveAll(...args);
      refresh();
    }

    return () => {
      cartService.addItem = originalAdd;
      cartService.removeItem = originalRemove;
      cartService.removeItemAll = originalRemoveAll;
    };
  }, []);

  const [shipping, setShipping] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: ''
  });

  const [formValid, setFormValid] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: string, value: string): string => {
    if (!value.trim()) return `${toTitleCase(field)} is required`;
    if (field === "zip" && value.trim().length < 5) return "Zip must be at least 5 digits";
    return "";
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.entries({ ...shipping, phone }).forEach(([field, value]) => {
      const error = validateField(field, value);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    const formValid = Object.keys(newErrors).length === 0;
    setFormValid(formValid);
    return formValid;
  };

  const updateShipping = (field: string, value: string) => {
    const newShipping = { ...shipping, [field]: value };
    setShipping(newShipping);

    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    if (error) {
      setFormValid(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Shipping info:", { ...shipping, phone });
    const isValid = validateForm();
    if (isValid) {
      const items = cartService.getItems();
      const requestBody = {
        items,
        shipping: { ...shipping, phone },
      };
      console.log("Create Stripe checkout session -> Request body:", requestBody);
      const sendRequest = true;
      if (sendRequest) {
        // TODO: Load this url from configuration
        const response = await fetch("https://zkys57t35d.execute-api.us-west-2.amazonaws.com/default/OnlineStoreCheckout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });

        const { sessionId } = await response.json();
        // TODO: Load the public key from configuration
        const stripe = await loadStripe("pk_test_51RdN7NPp6ZhE6zwbbcfU87AuamV62hCSymQYAAs7g4Lc1Puyipeta4NCR76mBuRM3TKGMJYMwT544PdyeKhw1Qy000yYh37FgJ");
        stripe?.redirectToCheckout({ sessionId });
      }
    } else {
      console.warn("Form is invalid, cannot proceed to checkout.");
    }
  };

  const removeFromCartOnce = (productId: string, size: number) => {
    cartService.removeItem(productId, size);
    const newItems = cartService.getItems();
    setItems(newItems);
    setTotal(cartService.getTotalPrice());
    setGroupedItems(groupByIdWithSizes(newItems));
  };
  
  const removeAllFromCart = (productId: string) => {
    cartService.removeItemAll(productId);
    const newItems = cartService.getItems();
    setItems(newItems);
    setTotal(cartService.getTotalPrice());
    setGroupedItems(groupByIdWithSizes(newItems));
  };

  const msgColor = useColorModeValue('gray.700', '#c0beb9');
  const backgroundColor = useColorModeValue('white', '#222221');
  const inputClass = useColorModeValue('contact-input-light', 'contact-input-dark');
  const borderColor = useColorModeValue('myAppGlobalBorderColor', '#3b3a37');
  const inputColor = useColorModeValue('gray.700  ', '#7c7b74');

  return (
    <HomePageSection>
      <Grid
        gridTemplateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(2, minmax(0px, 1fr))' }}
        gap={{ base: '2rem', md: '4rem' }}
      >
        <Stack gap={4}>
          <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} textTransform={'uppercase'} letterSpacing={'0.1em'} fontWeight="bold" color="myAccentColor" >Ready to bring home something hoot-worthy?</Text>
          <Text fontSize={'1.875rem'} lineHeight={'2.375rem'} whiteSpace={'pre-line'} textWrap={'balance'} fontWeight={600}>Shipping</Text>
          <Text color={msgColor}>
            Fill out the form below to complete your purchase.
          </Text>
          <Box p={6}
            borderWidth="1px"
            backgroundColor={backgroundColor}
            borderColor={'myAppGlobalBorderColor'}
          >
            <form>
              <Stack gap={'2.5rem'} alignItems={'start'}>
                <Stack gap={'1.25rem'} width={'100%'}>
                  <FormControl isInvalid={!!errors.name}>
                    <Input placeholder="Full Name"
                      className={inputClass}
                      name="fullName"
                      required
                      borderColor={borderColor}
                      borderRadius={'0.125rem'}
                      height={'3rem'}
                      fontSize={'1.125rem'}
                      lineHeight={'1.75rem'}
                      paddingInline={'1rem'}
                      color={inputColor}
                      focusRingColor={'myAccentColor'}
                      outlineOffset={'0px'}
                      outlineStyle={'solid'}
                      value={shipping.name}
                      onChange={(e) => updateShipping("name", e.target.value)}
                    />
                    <Box color={'myErrorColor'}>
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </Box>
                  </FormControl>
                  <FormControl isInvalid={!!errors.address}>
                    <Input placeholder="Street Address"
                      className={inputClass}
                      name="streetAddress"
                      required
                      borderColor={borderColor}
                      borderRadius={'0.125rem'}
                      height={'3rem'}
                      fontSize={'1.125rem'}
                      lineHeight={'1.75rem'}
                      paddingInline={'1rem'}
                      color={inputColor}
                      focusRingColor={'myAccentColor'}
                      outlineOffset={'0px'}
                      outlineStyle={'solid'}
                      value={shipping.address}
                      onChange={(e) => updateShipping("address", e.target.value)}
                    />
                    <Box color={'myErrorColor'}>
                      <FormErrorMessage>{errors.address}</FormErrorMessage>
                    </Box>
                  </FormControl>
                  <FormControl isInvalid={!!errors.city}>
                    <Input placeholder="City"
                      className={inputClass}
                      name="city"
                      required
                      borderColor={borderColor}
                      borderRadius={'0.125rem'}
                      height={'3rem'}
                      fontSize={'1.125rem'}
                      lineHeight={'1.75rem'}
                      paddingInline={'1rem'}
                      color={inputColor}
                      focusRingColor={'myAccentColor'}
                      outlineOffset={'0px'}
                      outlineStyle={'solid'}
                      value={shipping.city}
                      onChange={(e) => updateShipping("city", e.target.value)}
                    />
                    <Box color={'myErrorColor'}>
                      <FormErrorMessage>{errors.city}</FormErrorMessage>
                    </Box>
                  </FormControl>
                  <FormControl isInvalid={!!errors.state}>
                    <Input placeholder="State"
                      className={inputClass}
                      name="state"
                      required
                      borderColor={borderColor}
                      borderRadius={'0.125rem'}
                      height={'3rem'}
                      fontSize={'1.125rem'}
                      lineHeight={'1.75rem'}
                      paddingInline={'1rem'}
                      color={inputColor}
                      focusRingColor={'myAccentColor'}
                      outlineOffset={'0px'}
                      outlineStyle={'solid'}
                      value={shipping.state}
                      onChange={(e) => updateShipping("state", e.target.value)}
                    />
                    <Box color={'myErrorColor'}>
                      <FormErrorMessage>{errors.state}</FormErrorMessage>
                    </Box>
                  </FormControl>
                  <FormControl isInvalid={!!errors.zip}>
                    <Input placeholder="Zip Code"
                      className={inputClass}
                      name="zip code"
                      required
                      borderColor={borderColor}
                      borderRadius={'0.125rem'}
                      height={'3rem'}
                      fontSize={'1.125rem'}
                      lineHeight={'1.75rem'}
                      paddingInline={'1rem'}
                      color={inputColor}
                      focusRingColor={'myAccentColor'}
                      outlineOffset={'0px'}
                      outlineStyle={'solid'}
                      value={shipping.zip}
                      onChange={(e) => updateShipping("zip", e.target.value)}
                    />
                    <Box color={'myErrorColor'}>
                      <FormErrorMessage>{errors.zip}</FormErrorMessage>
                    </Box>
                  </FormControl>
                  <FormControl isInvalid={!!errors.email}>
                    <Input placeholder="Email Address"
                      className={inputClass}
                      name="email address"
                      required
                      borderColor={borderColor}
                      borderRadius={'0.125rem'}
                      height={'3rem'}
                      fontSize={'1.125rem'}
                      lineHeight={'1.75rem'}
                      paddingInline={'1rem'}
                      color={inputColor}
                      focusRingColor={'myAccentColor'}
                      outlineOffset={'0px'}
                      outlineStyle={'solid'}
                      value={shipping.email}
                      onChange={(e) => updateShipping("email", e.target.value)}
                    />
                    <Box color={'myErrorColor'}>
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </Box>
                  </FormControl>
                  <FormControl isInvalid={!!errors.phone}>
                    <Input placeholder="Phone Number"
                      className={inputClass}
                      name="phone number"
                      required
                      borderColor={borderColor}
                      borderRadius={'0.125rem'}
                      height={'3rem'}
                      fontSize={'1.125rem'}
                      lineHeight={'1.75rem'}
                      paddingInline={'1rem'}
                      color={inputColor}
                      focusRingColor={'myAccentColor'}
                      outlineOffset={'0px'}
                      outlineStyle={'solid'}
                      value={phone}
                      onChange={handlePhoneNumberChange}
                    />
                    <Box color={'myErrorColor'}>
                      <FormErrorMessage>{errors.phone}</FormErrorMessage>
                    </Box>
                  </FormControl>
                  <Text fontSize={'0.875rem'} lineHeight={'1.25rem'} color={'myLegendColor'}>
                    Shipping can take up to 15 days. Learn more on our FAQs section{" "}
                    <Link href="/home" color="myAccentColor" textDecoration="underline">
                      here
                    </Link>. You will receive a confirmation email with your order details and tracking information.
                  </Text>
                </Stack>
                <Button
                  type="submit"
                  borderRadius={'0.125rem'}
                  backgroundColor={'myAccentColor'}
                  color={'white'}
                  flexShrink={0}
                  onClick={handleSubmit}
                  width={'100%'}
                  disabled={items.length === 0}
                >
                  Pay
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          {/* {items.map((product: CartItem) => (
            <Box key={`id:${product.productId};size:${product.size}`}>
              {JSON.stringify(product, null, 2)}
            </Box>
          ))} */}
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {/* <ul>
                {items.map((item) => (
                  <li key={`${item.productId};${item.size}`}>
                    <strong>{item.productName}</strong> — ${item.price.toFixed(2)} × {item.quantity}
                    <span style={{ marginLeft: "1rem" }}>
                      = ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul> */}
              <Stack direction={'row'} gap={'0.5rem'} alignItems={'start'} mb={4}>
                <Text 
                  fontSize={'1.875rem'} 
                  lineHeight={'2.375rem'} 
                  whiteSpace={'pre-line'} 
                  textWrap={'balance'} 
                  fontWeight={600}
                  color={msgColor}
                >
                  Total:
                </Text>
                <Text 
                  fontSize={'1.875rem'} 
                  lineHeight={'2.375rem'} 
                  whiteSpace={'pre-line'} 
                  textWrap={'balance'} 
                  fontWeight={600}
                >
                  ${total.toFixed(2)}
                </Text>
              </Stack>
            </>
          )}
          {items.length > 0 && (
            <Grid gridTemplateColumns={'repeat(1, minmax(0px, 1fr))'} borderWidth={'1px'} borderTop={0}>
              {groupedItems.map((card) => (
                <Box key={card.product.productId} mb={'2rem'}>
                  <CheckoutItemCard
                    key={card.product.productId + 'card'}
                    card={card}
                    onRemove={removeFromCartOnce}
                    onRemoveAll={removeAllFromCart}
                  />
                  {/* <Box key={card.product.productId + 'box'} p={4} borderBottomWidth={'1px'}>
                    {JSON.stringify(card, null, 2)}
                  </Box> */}
                </Box>
              ))}
            </Grid>
          )}
        </Box>
      </Grid>
    </HomePageSection>
  );
};

export default Checkout;
