export type Vendor = {
  type: string;
  data: VendorPick;
  icon: string;
};

export type VendorPick = Pick<
  Data,
  | "id"
  | "rate"
  | "rating"
  | "description"
  | "logo"
  | "backgroundImage"
  | "voteCount"
  | "title"
  | "deliveryFee"
  | "deliveryTime"
  | "isZFExpress"
>;

type Data = {
  id: number;
  vendorCode: string;
  noOrder: boolean;
  title: string;
  description: string;
  rate: number;
  rating: number;
  logo: string;
  defLogo: string;
  taxEnabled: boolean;
  taxIncluded: boolean;
  taxEnabledInProducts: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInDeliveryFee: boolean;
  tax: number;
  serviceFee: number;
  deliveryArea: string;
  discount: number;
  isOpen: boolean;
  minDeliveryFee: number;
  maxDeliveryFee: number;
  deliveryTime: number;
  paymentTypes: number[];
  schedules: Schedule[];
  minOrder: number;
  address: string;
  phone: string;
  website: string;
  status: number;
  lat: number;
  lon: number;
  restaurantClass: string;
  foodTypes: any[];
  restaurantTypes: any[];
  isFavorite: boolean;
  priority: number;
  city: string;
  area: string;
  commentCount: number;
  recommendedFor: string;
  establishment: string;
  mostPopularItems: string;
  costsForTwo: number;
  onlineOrder: boolean;
  voteCount: number;
  discountType: null;
  menuUrl: string;
  discountValue: number;
  discountForAll: boolean;
  containerFee: number;
  deliveryGuarantee: boolean;
  badges: Badge[];
  discountStartHour1: string;
  discountStopHour1: string;
  discountStartHour2: string;
  discountStopHour2: string;
  discountValueForView: number;
  coverPath: string;
  cuisinesArray: CuisinesArray[];
  preOrderEnabled: boolean;
  preorderToday: PreorderToday;
  vendorType: string;
  childType: string;
  budgetClass: string;
  vendorTypeTitle: string;
  isZFExpress: boolean;
  deliveryFee: number;
  backgroundImage: string;
  backgroundImageCustom: string;
  has_coupon: boolean;
  coupon_count: number;
  best_coupon: string;
  is_pro: boolean;
  has_first_coupon: boolean;
  userImage: UserImage[];
  menuImage: any[];
  countReview: number;
  countOfUserImages: number;
  deliveryFeeDiscount: number;
  trendingScore: number;
  delay: string;
  deliver: boolean;
  eta: number;
  min_eta: number;
  max_eta: number;
  open_at_eta: boolean;
  action: string;
  has_delay: boolean;
  delay_time: number;
  total_time: number;
  bid: boolean;
  superTypeAlias: string;
  is_food_party: boolean;
  is_market_party: boolean;
  click_id: null;
  cpc_campaign_hash: null;
  cpc_spot: null;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_grocery_vip: boolean;
  is_grocery_returnable: boolean;
  is_grocery_economic: boolean;
  vendor_status: null;
  status_title: string;
  status_text: string;
  status_description: string;
  has_cashback: boolean;
  new_type: string;
  new_type_title: string;
  is_eco: boolean;
};

type Badge = {
  title: string;
  description: string;
  image: string;
  white_image: string;
};

type CuisinesArray = {
  id: number;
  title: string;
};

type PreorderToday = {
  weekday: string;
  name: string;
  startHour: string;
  intervals: null;
};

type Schedule = {
  type: number;
  weekday: number;
  allDay: boolean;
  startHour: StartHour;
  stopHour: StopHour;
};

enum StartHour {
  The0000 = "00:00",
  The1030 = "10:30",
}

enum StopHour {
  The0200 = "02:00",
  The2359 = "23:59",
}

type UserImage = {
  id: number;
  description: null;
  fileName: string;
  thumbNailSource: string;
  likeCount: number;
  commentCount: number;
  timeDifference: number;
  imageType: string;
  userType: string;
};
