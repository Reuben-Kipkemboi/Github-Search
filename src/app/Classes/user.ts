export class User {
  login: string;
  avatar_url: string;
  bio: string;
  company: string;
  created_at: any;
  followers: number;
  following: number;
  html_url: string;
  location: string;
  twitter_username: string;
  updated_at: any;
  public_repos: number;

  constructor(
    login: string,
    avatar_url: string,
    bio: string,
    company: string,
    created_at: any,
    followers: number,
    following: number,
    html_url: string,
    location: any,
    twitter_username: string,
    updated_at: any,
    public_repos: number
  ) {
    this.login = login;
    this.avatar_url = avatar_url;
    this.bio = bio;
    this.company = company;
    this.created_at =created_at;
    this.followers = followers;
    this.following = following;
    this.html_url = html_url;
    this.location = location;
    this.twitter_username = twitter_username;
    this.updated_at = updated_at;
    this.public_repos = public_repos;
    
  }
}
