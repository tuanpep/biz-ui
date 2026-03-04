import * as React from 'react';
import { render, screen, fireEvent } from '../../../test/utils';
import { Alert, AlertTitle, AlertDescription } from '../Alert';

describe('Alert', () => {
  it('renders correctly', () => {
    render(<Alert title="Alert">This is an alert</Alert>);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Alert')).toBeInTheDocument();
    expect(screen.getByText('This is an alert')).toBeInTheDocument();
  });

  it('applies info variant styles', () => {
    render(<Alert variant="info" title="Info">Info message</Alert>);
    const alert = screen.getByRole('status');
    expect(alert).toHaveClass('bg-info-muted');
  });

  it('applies success variant styles', () => {
    render(<Alert variant="success" title="Success">Success message</Alert>);
    const alert = screen.getByRole('status');
    expect(alert).toHaveClass('bg-success-muted');
  });

  it('applies warning variant styles', () => {
    render(<Alert variant="warning" title="Warning">Warning message</Alert>);
    const alert = screen.getByRole('status');
    expect(alert).toHaveClass('bg-warning-muted');
  });

  it('applies destructive variant styles', () => {
    render(<Alert variant="destructive" title="Error">Error message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('bg-destructive-muted');
  });

  it('can be closed when closable', () => {
    const onClose = vi.fn();
    render(
      <Alert closable onClose={onClose} title="Closable">
        Close me
      </Alert>
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('renders actions', () => {
    render(
      <Alert
        title="Confirm"
        actions={<button>Confirm</button>}
      >
        Are you sure?
      </Alert>
    );
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    render(<Alert showIcon={false} title="No Icon">No icon here</Alert>);
    const alert = screen.getByRole('status');
    // Check that no svg is present
    expect(alert.querySelector('svg')).not.toBeInTheDocument();
  });
});
