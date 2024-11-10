import express from 'express';
import mongoose from 'mongoose';
import { config } from './config-manager';

let _connection: mongoose.Connection;

const connection_string = config.mongoose.connection_string;
const options = config.mongoose.options;

export async function connect(): Promise<void> {
	await mongoose.connect(connection_string, options);

	_connection = mongoose.connection;
	_connection.on('error', console.error.bind(console, 'connection error:'));
}

export function connection(): mongoose.Connection {
	return _connection;
}

export function verifyConnected(): void {
	if (!connection()) {
		throw new Error('Cannot make database requets without being connected');
	}
}