import type { Metadata } from 'next';
import { SidebarProvider } from './components/SidebarContext';
import AICharactersNavigation from './components/AICharactersNavigation';
import ContentWrapper from './components/ContentWrapper';

export const metadata: Metadata = {
  title: 'AI Character Portfolio',
  description: 'Discover a curated cast of expressive, human-centered AI personas',
};

export default function AICharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AICharactersNavigation />
      <ContentWrapper>{children}</ContentWrapper>
    </SidebarProvider>
  );
}
