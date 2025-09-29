export type ImageInput = string | number;

export interface CarCardProps {
    id: string;
    title: string;
    subtitle?: string;
    rating?: string;
    distance?: string;
    price: string;
    image: ImageInput;
    onSelect?: (id: string) => void;
}
