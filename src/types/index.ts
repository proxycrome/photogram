import { OutputFileEntry } from "@uploadcare/blocks";

export interface UserSignIn {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UserLogIn {
    email: string;
    password: string;
}

export interface FileEntry {
    files: OutputFileEntry[];
}

export interface Post {
    caption: string;
    photos: PhotoMeta[];
    likes: number;
    userlikes: string[];
    userId: string | null;
    date: Date; 
}

export interface PhotoMeta {
    cdnUrl: string | null;
    uuid: string | null;
}

export interface DocumentResponse {
    id: string;
    caption: string;
    photos: PhotoMeta[];
    likes: number;
    userlikes: string[];
    userId: string | null;
    date?: Date
}