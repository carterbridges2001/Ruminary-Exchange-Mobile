// Common types used throughout the app
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
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
  status: 'active' | 'ended' | 'sold';
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

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Main: undefined;
  AuctionList: undefined;
  AuctionDetail: { auctionId: string };
  PlaceBid: { auctionId: string };
  Profile: { userId: string };
  Settings: undefined;
};
