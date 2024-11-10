import { type Config } from './types/config';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let mongooseConnectOptions: mongoose.ConnectOptions = {};

export const config: Config = {
    http: {
		port: Number(process.env.HTTP_PORT || '')
	},
	mongoose: {
		connection_string: process.env.MONGO_CONNECTION_STRING || '',
		options: mongooseConnectOptions
	},
};