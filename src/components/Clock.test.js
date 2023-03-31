import { render, screen } from '@testing-library/react';
import Clock from './Clock';

describe('time component', ()=>{
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('October 13, 2014 11:13:00'))
      });

      afterAll(() => {
        jest.useRealTimers();
      });

      test('renders current time', ()=>{
        render(<Clock/>);
        expect(screen.getByText(/11/i)).toBeInTheDocument();
        expect(screen.getByText(/13/i)).toBeInTheDocument();
      })
})