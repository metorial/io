import {
  Breadcrumbs,
  ExtraHeaderLayout,
  LargePaneLayout,
  SidebarPane
} from '@metorial-io/layout';
import { Logo, Control } from '@metorial-io/ui';
import {
  RiBoxingLine,
  RiCheckboxCircleLine,
  RiHome2Line,
  RiInputMethodLine,
  RiLayoutGridLine,
  RiPaletteLine,
  RiTableLine,
  RiTextSpacing,
  RiCodeLine
} from '@remixicon/react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 40px;
  max-width: 1400px;
`;

const NavWrapper = styled.header`
  padding: 5px 15px 5px 5px;
`;

const NavContent = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  gap: 10px;
  color: #222;

  h1 {
    font-size: 18px;
    margin: 0;
  }
`;

const isExactMatch = (pathname: string, to: string): boolean => {
  return pathname === to;
};

export const DocsNav = () => {
  return (
    <NavWrapper>
      <NavContent>
        <Logo size={30} />
        <h1>Metorial IO</h1>
      </NavContent>
    </NavWrapper>
  );
};

const ToggleWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: flex-start;
`;

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Determine if we're in utilities or components section
  const isUtilities = pathname.startsWith('/utilities/');
  const [activeSection, setActiveSection] = useState<'components' | 'utilities'>(
    isUtilities ? 'utilities' : 'components'
  );

  useEffect(() => {
    setActiveSection(pathname.startsWith('/utilities/') ? 'utilities' : 'components');
  }, [pathname]);

  const handleSectionChange = (section: 'components' | 'utilities') => {
    setActiveSection(section);
    if (section === 'utilities') {
      navigate('/utilities/use-copy');
    } else {
      navigate('/components/button');
    }
  };

  const navigationItems = [
    {
      icon: <RiHome2Line />,
      label: 'Home',
      to: '/',
      isActive: isExactMatch(pathname, '/')
    },
    {
      icon: <RiPaletteLine />,
      label: 'Colors',
      to: '/colors',
      isActive: isExactMatch(pathname, '/colors')
    }
  ];

  const formComponents = [
    {
      icon: <RiInputMethodLine />,
      label: 'Input',
      to: '/components/input',
      isActive: isExactMatch(pathname, '/components/input')
    },
    {
      icon: <RiInputMethodLine />,
      label: 'Select',
      to: '/components/select',
      isActive: isExactMatch(pathname, '/components/select')
    },
    {
      icon: <RiCheckboxCircleLine />,
      label: 'Checkbox',
      to: '/components/checkbox',
      isActive: isExactMatch(pathname, '/components/checkbox')
    },
    {
      icon: <RiCheckboxCircleLine />,
      label: 'Switch',
      to: '/components/switch',
      isActive: isExactMatch(pathname, '/components/switch')
    },
    {
      icon: <RiInputMethodLine />,
      label: 'Slider',
      to: '/components/slider',
      isActive: isExactMatch(pathname, '/components/slider')
    },
    {
      icon: <RiInputMethodLine />,
      label: 'DatePicker',
      to: '/components/datepicker',
      isActive: isExactMatch(pathname, '/components/datepicker')
    }
  ];

  const buttonComponents = [
    {
      icon: <RiBoxingLine />,
      label: 'Button',
      to: '/components/button',
      isActive: isExactMatch(pathname, '/components/button')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Dialog',
      to: '/components/dialog',
      isActive: isExactMatch(pathname, '/components/dialog')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Menu',
      to: '/components/menu',
      isActive: isExactMatch(pathname, '/components/menu')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Popover',
      to: '/components/popover',
      isActive: isExactMatch(pathname, '/components/popover')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Tooltip',
      to: '/components/tooltip',
      isActive: isExactMatch(pathname, '/components/tooltip')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Accordion',
      to: '/components/accordion',
      isActive: isExactMatch(pathname, '/components/accordion')
    }
  ];

  const displayComponents = [
    {
      icon: <RiTextSpacing />,
      label: 'Text',
      to: '/components/text',
      isActive: isExactMatch(pathname, '/components/text')
    },
    {
      icon: <RiTextSpacing />,
      label: 'Title',
      to: '/components/title',
      isActive: isExactMatch(pathname, '/components/title')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Badge',
      to: '/components/badge',
      isActive: isExactMatch(pathname, '/components/badge')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Avatar',
      to: '/components/avatar',
      isActive: isExactMatch(pathname, '/components/avatar')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Spinner',
      to: '/components/spinner',
      isActive: isExactMatch(pathname, '/components/spinner')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Callout',
      to: '/components/callout',
      isActive: isExactMatch(pathname, '/components/callout')
    }
  ];

  const dataComponents = [
    {
      icon: <RiTableLine />,
      label: 'Table',
      to: '/components/table',
      isActive: isExactMatch(pathname, '/components/table')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Entity',
      to: '/components/entity',
      isActive: isExactMatch(pathname, '/components/entity')
    },
    {
      icon: <RiBoxingLine />,
      label: 'Tabs',
      to: '/components/tabs',
      isActive: isExactMatch(pathname, '/components/tabs')
    }
  ];

  const layoutComponents = [
    {
      icon: <RiLayoutGridLine />,
      label: 'Flex',
      to: '/components/flex',
      isActive: isExactMatch(pathname, '/components/flex')
    },
    {
      icon: <RiLayoutGridLine />,
      label: 'Spacer',
      to: '/components/spacer',
      isActive: isExactMatch(pathname, '/components/spacer')
    }
  ];

  const utilityItems = [
    {
      icon: <RiCodeLine />,
      label: 'useCopy',
      to: '/utilities/use-copy',
      isActive: isExactMatch(pathname, '/utilities/use-copy')
    },
    {
      icon: <RiCodeLine />,
      label: 'useDialog',
      to: '/utilities/use-dialog',
      isActive: isExactMatch(pathname, '/utilities/use-dialog')
    },
    {
      icon: <RiCodeLine />,
      label: 'useAtom',
      to: '/utilities/use-atom',
      isActive: isExactMatch(pathname, '/utilities/use-atom')
    },
    {
      icon: <RiCodeLine />,
      label: 'useMutation',
      to: '/utilities/use-mutation',
      isActive: isExactMatch(pathname, '/utilities/use-mutation')
    },
    {
      icon: <RiCodeLine />,
      label: 'useStack',
      to: '/utilities/use-stack',
      isActive: isExactMatch(pathname, '/utilities/use-stack')
    },
    {
      icon: <RiCodeLine />,
      label: 'useUnmount',
      to: '/utilities/use-unmount',
      isActive: isExactMatch(pathname, '/utilities/use-unmount')
    },
    {
      icon: <RiCodeLine />,
      label: 'useForm',
      to: '/utilities/use-form',
      isActive: isExactMatch(pathname, '/utilities/use-form')
    },
    {
      icon: <RiCodeLine />,
      label: 'createLoader',
      to: '/utilities/create-loader',
      isActive: isExactMatch(pathname, '/utilities/create-loader')
    }
  ];

  const componentGroups = [
    { label: 'Documentation', items: navigationItems },
    { label: 'Form Components', items: formComponents },
    { label: 'Buttons & Interactive', items: buttonComponents },
    { label: 'Display & Text', items: displayComponents },
    { label: 'Data & Content', items: dataComponents },
    { label: 'Layout', items: layoutComponents }
  ];

  const utilityGroups = [
    { label: 'Documentation', items: navigationItems },
    { label: 'Hooks', items: utilityItems }
  ];

  const groups = activeSection === 'utilities' ? utilityGroups : componentGroups;

  const allItems = [
    ...navigationItems,
    ...formComponents,
    ...buttonComponents,
    ...displayComponents,
    ...dataComponents,
    ...layoutComponents,
    ...utilityItems
  ];

  const currentItem = allItems.find(item => item.isActive);

  const breadcrumbs: { label: string; to: string }[] = [];

  if (currentItem) {
    if (currentItem.to !== '/') {
      breadcrumbs.push({ label: 'Home', to: '/' });
    }

    if (currentItem.to.startsWith('/components/')) {
      breadcrumbs.push({ label: 'Components', to: '/components' });
    } else if (currentItem.to.startsWith('/utilities/')) {
      breadcrumbs.push({ label: 'Utilities', to: '/utilities' });
    }

    breadcrumbs.push({ label: currentItem.label, to: currentItem.to });
  } else {
    breadcrumbs.push({ label: 'Home', to: '/' });
  }

  const breadcrumbHeader = <Breadcrumbs breadcrumbs={breadcrumbs} />;

  return (
    <LargePaneLayout Nav={DocsNav}>
      <SidebarPane id="main" groups={groups}>
        <ExtraHeaderLayout header={breadcrumbHeader}>
          <ContentWrapper>
            <ToggleWrapper>
              <Control
                value={activeSection}
                onChange={(value) => handleSectionChange(value as 'components' | 'utilities')}
                items={[
                  { id: 'components', label: 'Components' },
                  { id: 'utilities', label: 'Utilities' }
                ]}
              />
            </ToggleWrapper>
            <Outlet />
          </ContentWrapper>
        </ExtraHeaderLayout>
      </SidebarPane>
    </LargePaneLayout>
  );
};
