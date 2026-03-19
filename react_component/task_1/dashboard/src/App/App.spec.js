describe('keyboard events', () => {
  let alertMock;

  beforeEach(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  it('calls logOut when Ctrl + H is pressed', () => {
    const logOutMock = jest.fn();

    const wrapper = shallow(<App logOut={logOutMock} />);
    
    // Mount lifecycle manually (IMPORTANT with shallow)
    wrapper.instance().componentDidMount();

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1);

    // Cleanup
    wrapper.instance().componentWillUnmount();
  });

  it('calls alert when Ctrl + H is pressed', () => {
    const wrapper = shallow(<App />);
    
    wrapper.instance().componentDidMount();

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    wrapper.instance().componentWillUnmount();
  });
});