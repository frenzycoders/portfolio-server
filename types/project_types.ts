export interface IProject {
    title: string;
    description: string;
    visit_url: string;
    github_url: string;
    save(): unknown
}