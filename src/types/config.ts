import mongoose from 'mongoose';

export interface Config {
	http: {
		port: number;
	};
	mongoose: {
		connection_string: string;
		options: mongoose.ConnectOptions;
	};
}