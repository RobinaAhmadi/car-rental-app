// Raw row from your Express /cars endpoint
export type CarRow = {
    id: number;
    name: string;
    type: string;
    image: string;
    rating: number;
    location: string;
    price: number;
    transmission: string; // e.g. "Automatic"
    fuel?: string;
};

// What your card/list renders
export type CardItem = {
    id: string;
    title: string;
    subtitle?: string;
    rating?: string;
    distance?: string;
    price: string;                  // "$95"
    image: string | number;         // URL or require(...)
};
