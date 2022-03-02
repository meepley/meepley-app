interface IDistributors {
  id: string;
  store_name: string;
  name: string;
  url: string;
  msrp: number;
  updated_at_ago: string;
  stock: number;
  sku: string;
  msrp_text: string;
}

interface IPublishersDesigners {
  id: string;
  num_games: number | null;
  score: number;
  game?: {};
  url: string;
  images: {
    thumb: string | null;
    small: string | null;
    medium: string | null;
    large: string | null;
    original: string | null;
  };
}

export interface IBoardgame {
  id: string;
  handle: string;
  url: string;
  edit_url: string;
  name: string;
  price: string;
  distributors: IDistributors[];
  price_ca: string;
  price_uk: string;
  price_au: string;
  msrp: number;
  msrps: {
    country: string;
    price: number;
  }[];
  discount: string;
  year_published: number;
  min_players: number;
  max_players: number;
  min_playtime: number;
  max_playtime: number;
  min_age: number;
  description: string;
  faq: string;
  thumb_url: string;
  image_url: string;
  matches_specs: null;
  specs: [];
  mechanics: {
    id: string;
    url: string;
  }[];
  categories: {
    id: string;
    url: string;
  }[];
  publishers: IPublishersDesigners[];
  designers: IPublishersDesigners[];
  primary_publisher: {
    id: string;
    name: string;
    url: string;
  };
  primary_designer: {
    id: string;
    name: string;
    url: string;
  };
  developers?: [];
  related_to?: [];
  artists?: string[];
  names?: [];
  rules_url?: string;
  amazon_rank: number;
  official_url?: string;
  comment_count: number;
  num_user_ratings: number;
  average_user_rating: number;
  weight_amount: number;
  weight_units: string;
  size_height: number;
  size_depth: number;
  size_units: string;
  historical_low_prices: {
    country: string;
    date: string;
    price: number;
    isLow: boolean;
  }[];
  active: true;
  num_user_complexity_votes: number;
  average_learning_complexity: number;
  average_strategy_complexity: number;
  visits: number;
  lists: number;
  mentions: number;
  links: number;
  plays: number;
  rank: number;
  type: string;
  sku: string;
  upc: string;
  isbn: string;
  video_links: [];
  availability_status: string;
  num_distributors: number;
  trending_rank: number;
  listing_clicks: number;
  is_historical_low: false;
  msrp_text: string;
  price_text: string;
  tags: string[];
  images: {
    thumb: string;
    small: string;
    medium: string;
    large: string;
    original: string;
  };
  description_preview?: string;
}
