import { Section, WorkGridItem } from '@/components';
import { Layout } from '@/layouts';
import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import thumbInkdrop from '/public/img/thumbnail.png';

export const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="walknote"
              thumbnail={thumbInkdrop}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              title="The four painters"
              thumbnail={thumbInkdrop}
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="menkiki" thumbnail={thumbInkdrop} title="Menkiki">
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="margelo" thumbnail={thumbInkdrop} title="Margelo">
              A website of the elite app development and contracting agency
              based in Austria
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="modetokyo"
              thumbnail={thumbInkdrop}
              title="mode.tokyo"
            >
              The mode magazine for understanding to personally enjoy Japan
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="styly" thumbnail={thumbInkdrop} title="Styly">
              A VR Creative tools for fashion brands
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="pichu2"
              thumbnail={thumbInkdrop}
              title="Pichu*Pichu"
            >
              Twitter client app for iPhone Safari
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="freedbtagger"
              thumbnail={thumbInkdrop}
              title="freeDBTagger"
            >
              Automatic audio file tagging tool using FreeDB for Windows
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem id="amembo" thumbnail={thumbInkdrop} title="Amembo">
              P2P private file sharing tool with MSN Messenger integration for
              Windows
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
