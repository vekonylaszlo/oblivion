import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../lib/components/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'ghost',
        'link',
        'outline',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon', 'sm', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: 'Button',
    variant: 'default',
    onClick: () => {
      alert("yo");
    }
  }
}


export const Secondary: Story = {
  args: {
    content: 'Button',
    variant: 'secondary',
    onClick: () => {
      alert("yo");
    }
  }
}
