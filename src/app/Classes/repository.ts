export class Repository {
  name: string;
  briefDescription: string;
  languages: string;
  timeOfUpdate: any;
  linkToRepository: string;

  constructor(
    name: string,
    briefDescription: string,
    languages: string,
    timeOfUpdate: any,
    linkToRepository: string
  ) {
    this.name = name;
    this.briefDescription = briefDescription;
    this.languages = languages;
    this.timeOfUpdate = timeOfUpdate;
    this.linkToRepository = linkToRepository;
  }
}
