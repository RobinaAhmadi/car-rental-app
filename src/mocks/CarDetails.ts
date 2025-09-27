// mock/carDetails.ts
import { CarDetails } from "../screens/CarDetails/types";

export const carDetailsMock: CarDetails[] = [
    {
        id: "c1",
        name: "Mercedes C-Class",
        pricePerDay: 123,
        images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
            "https://images.unsplash.com/photo-1549921296-3b4a841d6dc5?w=1600&q=80",
            "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=1600&q=80",
        ],
        features: ["Seats", "Hybrid", "AirCondition", "CarPlay", "Bluetooth", "Radio"],
        specs: {
            transmission: "Automatic",
            fuel: "Hybrid",
            doors: 4,
            luggage: 3,
            mpg: 36,
            horsepower: 201,
        },
    },
    // Tilføj flere biler her når du vil
];

export function getCarById(id: string): CarDetails | undefined {
    return carDetailsMock.find(c => c.id === id);
}
