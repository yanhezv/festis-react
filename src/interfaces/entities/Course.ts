export interface Course {
   id: number;
   name: string;
   description: string | null;
   slug: string;
   status: CourseStatus | string;
}

export enum CourseStatus {
   Inactive = '0',
   Active = '1',
}
