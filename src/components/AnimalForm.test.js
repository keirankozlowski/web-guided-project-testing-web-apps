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
    });
    test("age input should accept text", () => {
        // Arrange
        render(<AnimalForm />);

        // Act
        const ageInput = screen.getByLabelText(/age/i);
        userEvent.type(ageInput, "2");

        // Assert
        expect(ageInput).toHaveValue("2");
    });
    test("notes input should accept text", () => {
        // Arrange
        render(<AnimalForm />);

        // Act
        const notesInput = screen.getByLabelText(/notes/i);
        userEvent.type(notesInput, "is very cute");

        // Assert
        expect(notesInput).toHaveValue("is very cute");
    });
});
