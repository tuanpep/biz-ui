import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea, ScrollBar } from '../scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm">
            v1.2.0-beta.{i + 1}
            <span className="ml-2 text-muted-foreground">
              {new Date(2024, 0, i + 1).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        <div className="h-[250px] w-[200px] rounded-md bg-muted" />
        <div className="h-[250px] w-[200px] rounded-md bg-muted" />
        <div className="h-[250px] w-[200px] rounded-md bg-muted" />
        <div className="h-[250px] w-[200px] rounded-md bg-muted" />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const BothDirections: Story = {
  render: () => (
    <ScrollArea className="h-72 w-96 rounded-md border">
      <div className="w-max p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 15 }).map((_, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">User {i + 1}</td>
                <td className="px-4 py-2">user{i + 1}@example.com</td>
                <td className="px-4 py-2">Member</td>
                <td className="px-4 py-2">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const ChatList: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border">
      <div className="p-4 space-y-4">
        {[
          { name: 'Alice Johnson', message: 'Hey, how are you?', time: '2m ago' },
          { name: 'Bob Smith', message: 'The meeting is at 3pm', time: '15m ago' },
          { name: 'Carol White', message: 'Can you review my PR?', time: '1h ago' },
          { name: 'David Brown', message: 'Thanks for the help!', time: '2h ago' },
          { name: 'Eve Davis', message: 'Did you see the latest update?', time: '3h ago' },
          { name: 'Frank Miller', message: 'Let me check and get back to you', time: '4h ago' },
          { name: 'Grace Wilson', message: 'Great work on the project!', time: '5h ago' },
          { name: 'Henry Taylor', message: 'I will send the files tomorrow', time: '6h ago' },
          { name: 'Ivy Anderson', message: 'Sounds good to me', time: '7h ago' },
          { name: 'Jack Thomas', message: 'See you at the standup', time: '8h ago' },
        ].map((chat, i) => (
          <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
              {chat.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{chat.name}</span>
                <span className="text-xs text-muted-foreground">{chat.time}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <ScrollArea className="h-80 w-[500px] rounded-md border">
      <div className="p-4 space-y-4">
        <h4 className="text-sm font-medium">Photo Gallery</h4>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-md bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};
