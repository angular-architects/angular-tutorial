
export interface Flight {
    id: number; 
    from: string;
    to: string;
    date: string;
}

export const initFlight: Flight = {
    id: 0,
    from: '',
    to: '',
    date: ''
};
