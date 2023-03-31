import {screen, fireEvent  } from '@testing-library/react';
import { store } from '../features/store';
import renderWithProviders from '../utils/renderWithProviders';
import ButtonsGrid from './ButtonsGrid';


test('should return class active on button list',()=> {
    
    renderWithProviders(<ButtonsGrid/>);
    const button = screen.getByLabelText('button-list')
    fireEvent.click(button);
    expect(button.getAttribute('class')).toMatch(/active/gi);
})

test('should changed viewGridNews store property',()=> {
    
    renderWithProviders(<ButtonsGrid/>);
    const button = screen.getByLabelText('button-list')
    fireEvent.click(button);
    expect(store.getState().news.viewGridNews).toBe(false);
})

test('should return class active on button grid',()=> {
    
    renderWithProviders(<ButtonsGrid/>);
    const button = screen.getByLabelText('button-grid')
    fireEvent.click(button);
    expect(button.getAttribute('class')).toMatch(/active/gi);
})

test('should changed viewGridNews store property after click grid button',()=> {
    
    renderWithProviders(<ButtonsGrid/>);
    const button = screen.getByLabelText('button-grid')
    fireEvent.click(button);
    expect(store.getState().news.viewGridNews).toBe(true);
})
