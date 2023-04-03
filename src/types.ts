export type SearchResult = {
  alternative_name: string;
  character: number;
  checksum: number;
  collection: number;
  company: number;
  description: string;
  game: number;
  name: string;
  platform: number;
  published_at: number;
  test_dummy: number;
  theme: number;
};

export type Game = {
  age_ratings: number[];
  aggregated_rating: number;
  aggregated_rating_count: number;
  alternative_names: number[];
  artworks: number[];
  bundles: number[];
  // category	Category Enum;
  checksum: number;
  collection: number;
  cover: string;
  created_at: number;
  dlcs: number[];
  expanded_games: number[];
  expansions: number[];
  external_games: number[];
  first_release_date: number[];
  follows: number;
  forks: number[];
  franchise: number;
  franchises: number[];
  game_engines: number[];
  game_localizations: number[];
  game_modes: number[];
  genres: number[];
  hypes: number[];
  involved_companies: number[];
  keywords: number[];
  language_supports: number[];
  multiplayer_modes: number[];
  name: string;
  parent_game: number;
  platforms: number[];
  player_perspectives: number[];
  ports: number[];
  rating: number;
  rating_count: number;
  release_dates: number[];
  remakes: number[];
  remasters: number[];
  screenshots: number[];
  similar_games: number[];
  slug: string;
  standalone_expansions: number[];
  // status	Status Enum	The status of the games release
  storyline: string;
  summary: string;
  tags: number[];
  themes: number[];
  total_rating: number;
  total_rating_count: number;
  updated_at: number;
  url: string;
  version_parent: number;
  version_title: string;
  videos: number[];
  websites: number[];
};

export type Cover = {
  url: string;
  height: number;
  width: number;
}