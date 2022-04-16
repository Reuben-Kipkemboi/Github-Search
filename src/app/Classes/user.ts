export class User {
  pictureUrl: string;
  name: string;
  numberOfFollowers: number;
  numberOfFollowing: number;
  about: string;
  numberOfRepos: number;

  constructor(
    pictureUrl: string,
    name: string,
    numberOfFollowers: number,
    numberOfFollowing: number,
    about: string,
    numberOfRepos: number
  ) {
    this.pictureUrl = pictureUrl;
    this.name = name;
    this.numberOfFollowers = numberOfFollowers;
    this.numberOfFollowing = numberOfFollowing;
    this.about = about;
    this.numberOfRepos = numberOfRepos;
  }
}
