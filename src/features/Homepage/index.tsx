import NextLink from 'next/link';
import { Paragraph, Section } from '@/components';
import { Layout } from '@/layouts';
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '@/components/Bio';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

export const HomePage = () => {
  return (
    <Layout title="Homepage">
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an indie app developer based in Đà Nẵng!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Luong Quy Tan
            </Heading>
            <p>Web Developer ( Podcasters / Developer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/takuya.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I&apos;m is a Web Developer based in Đà Nẵng with a passion for
            building digital services/stuff he wants. He has a knack for all
            things launching products, from planning and designing all the way
            to solving real-life problems with code. When not online, he loves
            hanging out with his camera. Currently, he is living off of his own
            product called
          </Paragraph>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            my={4}
          >
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Gia Lai, Viet Nam.
          </BioSection>

          <BioSection>
            <BioYear>2019</BioYear>
            My entire time learning programming comes from the internet, most of
            the time I learn everything by myself.
          </BioSection>

          <BioSection>
            <BioYear>2020</BioYear>
            Frontend Web Developer at{' '}
            <NextLink href="https://corize.co.jp/en/" passHref>
              <Link target="_blank">Corize</Link>
            </NextLink>
          </BioSection>

          <BioSection>
            <BioYear>2021 to present</BioYear>
            Frontend Web Developer at{' '}
            <NextLink href="https://digitalunicorn.fr/en/" passHref>
              <Link target="_blank">Digital Unicorn</Link>
            </NextLink>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Football, Music, Sleep</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/LuongQuyTan1999" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @luongquytan
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/l%C6%B0%C6%A1ng-q%C3%BAy-t%C3%A2n-91833719a/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @luongquytan
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};
