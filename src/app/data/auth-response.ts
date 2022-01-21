export interface AuthResponse {
    token: string;
    user: {
        resourceId: number;
        managerId: number;
        resourceName: string;
        noOfProjects: string;
        tasksAssigned: string;
        noOfTasksOpen: string;
        resourceSkills: string;
        designation: string;
        userName: string;
        resourceCreatedDate: string;
        profilePicture: string;
        profilePictureFile: string;
        profilePictureFilebase64: string;
    }
}
