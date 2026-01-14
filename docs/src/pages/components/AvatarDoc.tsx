import { Text } from '@metorial-io/ui';
import type { PropDefinition } from '../../components';
import { ComponentDoc, LiveExample, PropTable, Section } from '../../components';

const avatarProps: PropDefinition[] = [
  {
    name: 'src',
    type: 'string',
    description: 'Image URL for the avatar'
  },
  {
    name: 'alt',
    type: 'string',
    description: 'Alt text for the image'
  },
  {
    name: 'fallback',
    type: 'string',
    description: 'Fallback text/initials when image is not available'
  },
  {
    name: 'size',
    type: "'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'",
    default: "'3'",
    description: 'Size of the avatar'
  },
  {
    name: 'color',
    type: 'ColorType',
    default: 'gray',
    description: 'Background color for fallback'
  }
];

export const AvatarDoc = () => {
  return (
    <ComponentDoc
      title="Avatar"
      description="A circular avatar component for displaying user profile images or initials. Built on Radix UI Avatar with automatic fallback support."
      importStatement="import { Avatar } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Avatars with images.">
        <LiveExample
          code={`<Flex gap="3">
  <Avatar
    entity={{
      imageUrl: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop',
      name: 'User 1'
    }}
  />
  <Avatar
    entity={{
      imageUrl: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=128&h=128&fit=crop',
      name: 'User 2'
    }}  
  />
  <Avatar
    entity={{
      imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=128&fit=crop',
      name: 'User 3'
    }}
  />
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using avatars:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li>
            <strong>Always provide fallback:</strong> Use user initials or a default character
          </li>
          <li>
            <strong>Alt text:</strong> Always include descriptive alt text for accessibility
          </li>
          <li>
            <strong>Consistent sizing:</strong> Use the same size for avatars in a group
          </li>
          <li>
            <strong>Colored fallbacks:</strong> Use different colors to distinguish users
            visually
          </li>
          <li>
            <strong>Square images:</strong> Provide square images (1:1 aspect ratio) for best
            results
          </li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={avatarProps} />
      </Section>
    </ComponentDoc>
  );
};
