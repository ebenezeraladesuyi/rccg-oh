/* eslint-disable @typescript-eslint/no-explicit-any */

export interface iAudio {
    _id : string;
    title: string;
    // image: File | null;
    audio?: File | null;
    author: string;
    audioUrl? : string;
}

export interface iFirstTimer {
    _id?: string;
    name: string;
    address: string;
    county: string;
    occupation: string;
    telHome : string;
    telWork : string;
    mobile : string;
    email : string;
    visitOrStay : string;
    prayerRequest : string;
    haveJesus : string;
    pastorVisit : string;
}

export interface iContact {
    reason: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

export interface iGallery {
    _id: string;
    rccgGallImage : string;
    createdAt : any;
}

export interface iBlog {
    _id: string,
    blogImage : string;
    author: string;
    title: string;
    details: string;
    createdAt : any;
}