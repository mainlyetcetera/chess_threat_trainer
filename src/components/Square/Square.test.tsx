import { render, RenderResult, screen } from "@testing-library/react";
import { CustomSquareRenderer } from "./Square";

 describe('a square', () => {
    let square: RenderResult;
    let playerC3: HTMLElement;
    let opponentC3: HTMLElement;

    beforeEach(async () => {
        square = render(<CustomSquareRenderer 
	    children={<></>}
	    square='c3'
	    squareColor="white"
	    style={{}}
	/>);

	playerC3 = screen.getByTestId('pl_threat_c3');
	opponentC3 = screen.getByTestId('opp_threat_c3');
    });

    // beforeAll(() => screen.debug(playerC3));

    it('should exist', () => {
        expect(square).toBeTruthy();
    })

    it('renders a square', async () => {
        expect(playerC3).toBeTruthy();
    });

    it('renders player\'s threat counts at starting board, assuming player is white, on c3', async () => {
        expect(playerC3.textContent).toMatch(/\b3\b/);
    });

    it('renders opponent\'s threat counts at starting board, assuming player is white, on c3', async () => {
        expect(opponentC3.textContent).toMatch(/\b0\b/);
    });

    // TODO: next
    // this is probably ready for a commit...
    it.skip('renders player\'s threat counts at starting board, assuming player is white, on c6', async () => {
        expect(playerC3.textContent).toMatch(/\b0\b/);
    });

 })
