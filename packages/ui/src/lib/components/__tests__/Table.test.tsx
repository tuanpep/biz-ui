import * as React from 'react';
import { render, screen } from '../../../test/utils';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableFooter, TableCaption } from '../table';

describe('Table', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('applies sticky header styles when stickyHeader is true', () => {
    render(
      <Table stickyHeader data-testid="table">
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByTestId('table')).toHaveClass('[&_thead_th]:sticky');
  });

  it('does not apply sticky header styles by default', () => {
    render(
      <Table data-testid="table">
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByTestId('table')).not.toHaveClass('[&_thead_th]:sticky');
  });

  it('renders TableHeader with correct styles', () => {
    render(
      <Table>
        <TableHeader data-testid="header">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );

    expect(screen.getByTestId('header')).toHaveClass('[&_tr]:border-b');
  });

  it('renders TableRow with hover styles', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    // TableRow uses hover:bg-muted/50 for hover effect
    expect(screen.getByTestId('row')).toHaveClass('hover:bg-muted/50');
  });

  it('renders TableRow with border styles', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByTestId('row')).toHaveClass('border-b');
    expect(screen.getByTestId('row')).toHaveClass('border-border');
  });

  it('renders TableHead with correct alignment', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="head">Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );

    // TableHead has text-left and font-semibold applied directly
    expect(screen.getByTestId('head')).toHaveClass('text-left');
    expect(screen.getByTestId('head')).toHaveClass('font-semibold');
    expect(screen.getByTestId('head')).toHaveClass('text-muted-foreground');
  });

  it('renders TableCell with correct alignment', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="cell">Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    // TableCell has align-middle applied directly
    expect(screen.getByTestId('cell')).toHaveClass('align-middle');
  });

  it('applies zebra styles when useZebraStyles is true', () => {
    render(
      <Table useZebraStyles data-testid="table">
        <TableBody>
          <TableRow>
            <TableCell>Row 1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByTestId('table')).toHaveClass(
      '[&_tbody_tr:nth-child(even)]:bg-muted/30'
    );
  });

  it('applies size variants to table', () => {
    render(
      <Table size="sm" data-testid="table">
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );

    // Size variants are applied via parent selectors on the table element
    expect(screen.getByTestId('table')).toHaveClass('[&_th]:h-10');
    expect(screen.getByTestId('table')).toHaveClass('text-xs');
  });

  it('renders TableFooter with correct styles', () => {
    render(
      <Table>
        <TableFooter data-testid="footer">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(screen.getByTestId('footer')).toHaveClass('border-t');
    expect(screen.getByTestId('footer')).toHaveClass('bg-muted/50');
  });

  it('renders TableCaption with correct styles', () => {
    render(
      <Table>
        <TableCaption data-testid="caption">A table caption</TableCaption>
      </Table>
    );

    expect(screen.getByTestId('caption')).toHaveClass('text-sm');
    expect(screen.getByTestId('caption')).toHaveClass('text-muted-foreground');
  });

  it('accepts custom className', () => {
    render(
      <Table className="custom-class" data-testid="table">
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );

    expect(screen.getByTestId('table')).toHaveClass('custom-class');
  });

  it('renders selected row with highlight', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row" data-state="selected">
            <TableCell>Selected</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByTestId('row')).toHaveClass('data-[state=selected]:bg-primary/10');
  });
});
