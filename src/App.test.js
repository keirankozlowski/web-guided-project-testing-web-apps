import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("render checks for App component", () => {
    test("the app should render without error", () => {
        render(<App />);
    });
    
    test("the app should render without error and the h1 should have appropriate text", () => {
        // Arrange
        render(<App />);
    
        // Act
        const header = screen.getByText(/add new animal/i);
    
        // Assert
        expect(header).toBeInTheDocument();
        expect(header).toBeTruthy();
        expect(header).toHaveTextContent(/add new animal/i);
    
        // negative assertions
        expect(header).not.toBeFalsy();
        expect(header).not.toHaveTextContent(/lambda school is cool/i);
    });
});

// describe("styling check", () => {

// });
