import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Bid {
  id: string;
  amount: number;
  bidderId: string;
  bidderName: string;
  timestamp: number;
}

export interface AuctionItem {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  currentBid: number;
  highestBidderId: string | null;
  imageUrl: string;
  endTime: string;
  bids: Bid[];
  sellerId: string;
  sellerName: string;
  status: 'active' | 'ended' | 'sold';
}

interface AuctionState {
  items: AuctionItem[];
  loading: boolean;
  error: string | null;
  selectedAuction: AuctionItem | null;
}

const initialState: AuctionState = {
  items: [],
  loading: false,
  error: null,
  selectedAuction: null,
};

const auctionSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    fetchAuctionsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAuctionsSuccess: (state, action: PayloadAction<AuctionItem[]>) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchAuctionsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    placeBid: (
      state,
      action: PayloadAction<{ auctionId: string; bid: Bid }>
    ) => {
      const { auctionId, bid } = action.payload;
      const auctionIndex = state.items.findIndex((item) => item.id === auctionId);
      
      if (auctionIndex !== -1) {
        state.items[auctionIndex].bids.push(bid);
        state.items[auctionIndex].currentBid = bid.amount;
        state.items[auctionIndex].highestBidderId = bid.bidderId;
      }
    },
    selectAuction: (state, action: PayloadAction<string>) => {
      const auction = state.items.find(item => item.id === action.payload);
      if (auction) {
        state.selectedAuction = auction;
      }
    },
    clearSelectedAuction: (state) => {
      state.selectedAuction = null;
    },
  },
});

export const {
  fetchAuctionsStart,
  fetchAuctionsSuccess,
  fetchAuctionsFailure,
  placeBid,
  selectAuction,
  clearSelectedAuction,
} = auctionSlice.actions;

export default auctionSlice.reducer;
