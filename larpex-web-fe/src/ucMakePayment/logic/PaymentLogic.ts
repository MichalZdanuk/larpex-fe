/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  InitPaymentDto,
  InitPaymentResponse,
  PaymentDto,
  PaymentStatus,
} from "../viewModels/PaymentViewModel";

export const startPayment = async (
  initPaymentDto: InitPaymentDto
): Promise<InitPaymentResponse> => {
  // Mocked API call (replace with actual API call)
  const mockedResponse: InitPaymentResponse = {
    paymentId: 123,
    paymentAmount: 50,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mocked API Response:", mockedResponse);
      resolve(mockedResponse);
    }, 1000); // Simulating a 1-second API call
  });
};

export const makePayment = async (
  paymentDto: PaymentDto
): Promise<{ paymentStatus: PaymentStatus; redirectUrl: string }> => {
  // Mocked API call (replace with actual API call)
  const mockedResponse: { paymentStatus: PaymentStatus; redirectUrl: string } =
    {
      paymentStatus: PaymentStatus.SUCCESS, // Change as needed
      redirectUrl: "https://example.com", // Change as needed
    };

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mocked API Response:", mockedResponse);
      resolve(mockedResponse);
    }, 5000); // Simulating a 5-second API call
  });
};
