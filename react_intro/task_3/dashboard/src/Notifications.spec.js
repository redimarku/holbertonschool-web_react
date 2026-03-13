import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {

  test('renders the notifications title', () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('renders three list items', () => {
    render(<Notifications />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  test('logs message when close button is clicked', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i });

    fireEvent.click(button);

    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');

    logSpy.mockRestore();
  });

});