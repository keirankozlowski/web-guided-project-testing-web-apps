import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AnimalForm from './AnimalForm';


test("renders AnimalForm component without crashing", () => {
    render(<AnimalForm />);
});

describe("AnimalForm should submit a new animal array and display the array on the page", () => {
    test("species input should accept text", async () => {
        // Arrange
        render(<AnimalForm />);

        // Act
        const speciesInput = screen.getByLabelText(/species/i);
        const ageInput = screen.getByLabelText(/age/i);
        const notesInput = screen.getByLabelText(/notes/i);
        const button = screen.getByRole('button', { value: /submit!/i });

        // Act
        userEvent.type(speciesInput, 'dog');
        userEvent.type(ageInput, "2");
        userEvent.type(notesInput, "is very cute");
        userEvent.click(button);
        
        // Assert
        const newAnimal = await screen.findByText(/dog/i);
        expect(speciesInput).toHaveValue('dog');
        expect(ageInput).toHaveValue("2");
        expect(notesInput).toHaveValue("is very cute");
        expect(newAnimal).toBeTruthy();
    });
});
