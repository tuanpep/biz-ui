import type { Preview } from '@storybook/react-vite'
import '../src/lib/styles/storybook.css'
import React from 'react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#0f172a' },
      ],
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: '', color: '#f8fafc' },
        { name: 'dark', class: 'dark', color: '#0f172a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="biz-ui">
        <Story />
      </div>
    ),
  ],
};

export default preview;
