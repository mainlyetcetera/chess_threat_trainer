import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import App from './App';
import { CustomSquareRenderer } from './components/Square/Square';

describe('the app', () => {
    let app: RenderResult;
    // let playerThreatCountA8: HTMLElement;
    let playerThreatCountC3: HTMLElement;
    let opponentThreatCountC3: HTMLElement;
    let playerThreatCountC6: HTMLElement;
    let opponentThreatCountC6: HTMLElement;

    beforeEach(async () => {
        app = render(<App />);
        // app = render(<CustomSquareRenderer 
	    // children={<></>}
	    // square="a8"
	    // squareColor="white"
	    // style={{}}
	// />);
	// screen.debug(await screen.findByTestId('rawr'));
        // playerThreatCountA8 = await screen.findByTestId('pl_threat_a8');
	// screen.debug(playerThreatCountA8);
        // playerThreatCountC3 = await screen.findByTestId('pl_threat_c3');
        // opponentThreatCountC3 = await screen.findByTestId('opp_threat_c3');
        // playerThreatCountC6 = await screen.findByTestId('pl_threat_c3');
        // opponentThreatCountC6 = await screen.findByTestId('opp_threat_c3');
    });

    it('renders an app', () => {
        expect(app).toBeTruthy();
    });

    it.skip('renders threat counts at starting board, assuming player is white', async () => {
        // playerThreatCountA8 = await screen.findByTestId('pl_threat_a8');
        // expect(playerThreatCountA8).toHaveTextContent('3');
	// screen.debug(await screen.findByText('c3'));
	const blah = screen.getByText('rawr')
	// const blah = document.querySelector('#pl_threat_c3');
	console.log({ blah });
	// console.log({ blah });
	if (blah !== null) {
	    screen.debug(blah);
	}
	// if (blah !== null) {
	    // console.log({ blah });
	    // screen.debug(screen.queryByTestId('pl_threat_c3')!);
	    // expect(true).toBeFalsy();
	    // expect(blah).toBe(false);
	// }
        // expect(playerThreatCountC3).toHaveTextContent('3');
        // expect(opponentThreatCountC3).toHaveTextContent('0');
        // expect(playerThreatCountC6).toHaveTextContent('0');
        // expect(opponentThreatCountC6).toHaveTextContent('3');
    });

    it.skip('generates threat counts based on piece threat', () => {
        // build custom position with just these pieces
        // designate pawn, knight, bishop threat on a square
        // designate queen, bishop, on a different square
	// render proper threat counts
    });

    it.skip('renders threat counts at starting board, across board', async () => {
        expect(playerThreatCountC3).toHaveTextContent('3');
        expect(opponentThreatCountC3).toHaveTextContent('0');
        expect(playerThreatCountC6).toHaveTextContent('0');
        expect(opponentThreatCountC6).toHaveTextContent('3');
    });

});
