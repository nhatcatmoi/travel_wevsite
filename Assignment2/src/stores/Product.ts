export interface Product {
    homeStay_ID: number;
    homeStay_Name: string;
    homeStay_Location: string;
    isVip: string;
    rating: {
        score: number;
        description: string;
        reviewCount: number;
    };
    promotion: string;
    nights: number;
    originalPrice: number;
    discountedPrice: number;
    image: string;
    category: number;
}
  