import { NavigatorScreenParams } from '@react-navigation/native';

// Common types used throughout the app
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string | null;
  phoneNumber?: string | null;
  createdAt: number;
  lastLogin: number;
}

export interface AuctionItem {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  currentBid: number;
  highestBidderId?: string;
  sellerId: string;
  sellerName: string;
  images: string[];
  endTime: Date;
  status: 'draft' | 'active' | 'ended' | 'sold' | 'cancelled';
  category: string;
  location?: {
    city: string;
    state: string;
    country: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Bid {
  id: string;
  auctionId: string;
  userId: string;
  userName: string;
  amount: number;
  timestamp: Date;
}

// Navigation Types
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  CreateAuction: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  AuctionDetail: { auctionId: string };
  PlaceBid: { auctionId: string; currentBid: number };
  UserProfile: { userId: string };
  Settings: undefined;
  // Add other screens here as needed
};

// Redux State Types
export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuctionState {
  items: AuctionItem[];
  featured: AuctionItem[];
  categories: string[];
  isLoading: boolean;
  error: string | null;
  selectedAuction: AuctionItem | null;
}

export interface AppState {
  auth: AuthState;
  auction: AuctionState;
}
