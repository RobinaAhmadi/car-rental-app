import { ImageSourcePropType } from 'react-native';

export type CarCardProps = {
    id?: string;
    title: string;
    subtitle?: string;
    rating?: string;
    distance?: string;
    price?: string;
    image: ImageSourcePropType; // bedre end "any"
};
