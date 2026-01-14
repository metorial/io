import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import {
  AccordionDoc,
  AlertDoc,
  AttributesDoc,
  AvatarDoc,
  BadgeDoc,
  ButtonDoc,
  CalloutDoc,
  CardLinksDoc,
  CheckboxDoc,
  Colors,
  ControlDoc,
  CopyDoc,
  DatalistDoc,
  UseCopyDoc,
  UseDialogDoc,
  UseAtomDoc,
  UseMutationDoc,
  UseStackDoc,
  UseUnmountDoc,
  UseFormDoc,
  CreateLoaderDoc,
  DatePickerDoc,
  DialogDoc,
  EntityDoc,
  ErrorDoc,
  FlexDoc,
  GroupDoc,
  Home,
  InfoTooltipDoc,
  InlineCopyDoc,
  InputDoc,
  LinkTabsDoc,
  LogoDoc,
  MenuDoc,
  MultiSelectDoc,
  OrDoc,
  PopoverDoc,
  SelectDoc,
  SliderDoc,
  SpacerDoc,
  SpinnerDoc,
  SwitchDoc,
  TableDoc,
  TabsDoc,
  TextArrayInputDoc,
  TextDoc,
  TitleDoc,
  TooltipDoc
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="colors" element={<Colors />} />

          {/* Form Components */}
          <Route path="components/input" element={<InputDoc />} />
          <Route path="components/select" element={<SelectDoc />} />
          <Route path="components/checkbox" element={<CheckboxDoc />} />
          <Route path="components/switch" element={<SwitchDoc />} />
          <Route path="components/slider" element={<SliderDoc />} />
          <Route path="components/datepicker" element={<DatePickerDoc />} />
          <Route path="components/multiselect" element={<MultiSelectDoc />} />
          <Route path="components/textarrayinput" element={<TextArrayInputDoc />} />
          <Route path="components/datalist" element={<DatalistDoc />} />

          {/* Button & Interactive */}
          <Route path="components/button" element={<ButtonDoc />} />

          {/* Display & Text */}
          <Route path="components/text" element={<TextDoc />} />
          <Route path="components/title" element={<TitleDoc />} />
          <Route path="components/badge" element={<BadgeDoc />} />
          <Route path="components/avatar" element={<AvatarDoc />} />
          <Route path="components/spinner" element={<SpinnerDoc />} />
          <Route path="components/logo" element={<LogoDoc />} />

          {/* Feedback */}
          <Route path="components/callout" element={<CalloutDoc />} />
          <Route path="components/alert" element={<AlertDoc />} />
          <Route path="components/error" element={<ErrorDoc />} />

          {/* Overlay */}
          <Route path="components/dialog" element={<DialogDoc />} />
          <Route path="components/menu" element={<MenuDoc />} />
          <Route path="components/popover" element={<PopoverDoc />} />
          <Route path="components/tooltip" element={<TooltipDoc />} />

          {/* Layout */}
          <Route path="components/flex" element={<FlexDoc />} />
          <Route path="components/group" element={<GroupDoc />} />
          <Route path="components/spacer" element={<SpacerDoc />} />
          <Route path="components/accordion" element={<AccordionDoc />} />
          <Route path="components/tabs" element={<TabsDoc />} />
          <Route path="components/linktabs" element={<LinkTabsDoc />} />

          {/* Data & Content */}
          <Route path="components/table" element={<TableDoc />} />
          <Route path="components/entity" element={<EntityDoc />} />
          <Route path="components/attributes" element={<AttributesDoc />} />

          {/* Utility */}
          <Route path="components/copy" element={<CopyDoc />} />
          <Route path="components/inlinecopy" element={<InlineCopyDoc />} />
          <Route path="components/infotooltip" element={<InfoTooltipDoc />} />
          <Route path="components/or" element={<OrDoc />} />
          <Route path="components/cardlinks" element={<CardLinksDoc />} />
          <Route path="components/control" element={<ControlDoc />} />

          {/* Utilities / Hooks */}
          <Route path="utilities/use-copy" element={<UseCopyDoc />} />
          <Route path="utilities/use-dialog" element={<UseDialogDoc />} />
          <Route path="utilities/use-atom" element={<UseAtomDoc />} />
          <Route path="utilities/use-mutation" element={<UseMutationDoc />} />
          <Route path="utilities/use-stack" element={<UseStackDoc />} />
          <Route path="utilities/use-unmount" element={<UseUnmountDoc />} />
          <Route path="utilities/use-form" element={<UseFormDoc />} />
          <Route path="utilities/create-loader" element={<CreateLoaderDoc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
