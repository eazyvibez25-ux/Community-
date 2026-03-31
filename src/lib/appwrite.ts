import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('69cbb80000360fe42b24');

export const account = new Account(client);
export const databases = new Databases(client);

