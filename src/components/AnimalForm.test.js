import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';


test("renders AnimalForm component without crashing", () => {
    render(<AnimalForm />);
});

describe("AnimalForm should submit a new animal array and display the array on the page", () => {
    test("species input should accept text", () => {
        // Arrange
        render(<AnimalForm />);

        // Act
        const speciesInput = screen.getByLabelText(/species/i);
        userEvent.type(speciesInput, 'dog');

        // Assert
        expect(speciesInput).toHaveValue('dog');

        // create the act/assert steps for the other two inputs and attempt to submit the form
    });
});
