import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled from 'styled-components';
import {
  Button,
  Input,
  Select,
  Checkbox,
  Switch,
  Slider,
  DatePicker,
  Text,
  Title,
  Badge,
  Avatar,
  Spinner,
  Callout,
  Dialog,
  Menu,
  Popover,
  Tooltip,
  Accordion,
  Flex,
  Group,
  Spacer,
  Entity,
  Tabs,
  LinkTabs,
  Copy,
  InlineCopy,
  Alert,
  Error as ErrorComponent,
  InfoTooltip,
  Or,
  Attributes,
  Logo,
  MultiSelect,
  TextArrayInput,
  Datalist,
  CardLinks,
  Control,
  showModal,
  ModalRoot,
  theme,
  useCopy,
  useDialog,
  atom,
  useAtom,
} from '@metorial-io/ui';
import { Table, Box, BigButtons, ItemGrid, Hint, SideBox, ID } from '@metorial-io/ui-product';
import { useMutation, useStack, useUnmount, useForm } from '@metorial-io/data-hooks';
import * as RemixIcons from '@remixicon/react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
`;

const PreviewContainer = styled.div<{ $noPadding?: boolean }>`
  padding: ${props => props.$noPadding ? '0' : '30px'};
  background: white;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditorContainer = styled.div`
  background: #f8f8f8;
  border-top: 1px solid #e5e5e5;

  textarea, pre {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
    font-size: 13px !important;
    line-height: 1.6 !important;
  }
`;

const ErrorContainer = styled.div`
  background: #fff5f5;
  color: #c41e3a;
  padding: 15px;
  border-top: 1px solid #fecaca;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
`;

const TitleStyled = styled.div`
  padding: 12px 20px;
  background: #fafafa;
  border-bottom: 1px solid #e5e5e5;
  font-size: 13px;
  font-weight: 500;
  color: #666;
`;

interface LiveExampleProps {
  code: string;
  scope?: Record<string, any>;
  title?: string;
  noPadding?: boolean;
}

export const LiveExample = ({ code, scope = {}, title, noPadding }: LiveExampleProps) => {
  const defaultScope = {
    // UI Components
    Button,
    Input,
    Select,
    Checkbox,
    Switch,
    Slider,
    DatePicker,
    Text,
    Title,
    Badge,
    Avatar,
    Spinner,
    Callout,
    Dialog,
    Menu,
    Popover,
    Tooltip,
    Accordion,
    Flex,
    Group,
    Spacer,
    Entity,
    Tabs,
    LinkTabs,
    Copy,
    InlineCopy,
    Alert,
    Error: ErrorComponent,
    InfoTooltip,
    Or,
    Attributes,
    Logo,
    MultiSelect,
    TextArrayInput,
    Datalist,
    CardLinks,
    Control,
    showModal,
    ModalRoot,
    theme,
    // UI Product Components
    Table,
    Box,
    BigButtons,
    ItemGrid,
    Hint,
    SideBox,
    ID,
    // React Router
    Link,
    // Remix Icons
    ...RemixIcons,
    // React hooks
    useState,
    useRef,
    useEffect,
    // UI Hooks
    useCopy,
    useDialog,
    atom,
    useAtom,
    // Data Hooks
    useMutation,
    useStack,
    useUnmount,
    useForm,
    // Styled Components
    styled,
  };

  return (
    <Container>
      {title && <TitleStyled>{title}</TitleStyled>}
      <LiveProvider code={code.trim()} scope={{ ...defaultScope, ...scope }}>
        <PreviewContainer $noPadding={noPadding}>
          <LivePreview />
        </PreviewContainer>
        <EditorContainer>
          <LiveEditor />
        </EditorContainer>
        <ErrorContainer>
          <LiveError />
        </ErrorContainer>
      </LiveProvider>
    </Container>
  );
};
