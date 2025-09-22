export type LoginData = {
  email: string;
  password: string;
};

export type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginSignupGuestProps = {
  onLogin?: (data: LoginData) => Promise<void> | void;
  onSignup?: (data: SignupData) => Promise<void> | void;
  onContinueAsGuest?: () => void;
  isLoading?: boolean;
  brandName?: string;
  subtitle?: string;
};

export type Theme = {
  shadow: string;
};
