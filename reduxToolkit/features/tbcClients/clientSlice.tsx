import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ClientState {
  clientData: [] | null;
  loading: boolean;
  error: string | null;
}

// // Define the type for your client data (adjust as needed)
// export interface Client {
//   id: number;
//   name: string;
//   // Add other properties as needed
// }

const initialState: ClientState = {
  clientData: null, // Initialize clientData as null
  loading: false,
  error: "",
};

export const getClients = createAsyncThunk("client", async () => {
  try {
    const response = await fetch("http://localhost:3000/clients");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch clients");
  }
});

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getClients.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.clientData = action.payload;
      })
      .addCase(getClients.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        // state.error = "Failed to fetch clients"; // Handle the error here
        state.error = action.payload;
      });
  },
});

export default clientSlice.reducer;
