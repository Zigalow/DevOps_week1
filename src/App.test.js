import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

/*test("new test", () => {
    let usernameField = screen.getByLabelText("username");
    expect(usernameField).toHaveAttribute(
        "placeholder", "indtast brugernavn")
})*/
