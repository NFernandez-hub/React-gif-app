import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

describe('Prubas en <GiftItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GiftItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagin con el URL y el ALT indicado', () => {
        render(<GiftItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url)
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(src);
        expect(alt).toBe(alt);
    })

    test('debe de mostrar el titulo en el componente', () => {
        render(<GiftItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })

})