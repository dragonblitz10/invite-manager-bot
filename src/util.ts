const chalk = require('chalk');
// Discord epoch (2015-01-01T00:00:00.000Z)
const EPOCH = 1420070400000;

export const deconstruct = (snowflake: string) => {
	const BINARY = idToBinary(snowflake).padStart(64, '0');
	return parseInt(BINARY.substring(0, 42), 2) + EPOCH;
};

export function idToBinary(num: string) {
	let bin = '';
	let high = parseInt(num.slice(0, -10), 10) || 0;
	let low = parseInt(num.slice(-10), 10);
	while (low > 0 || high > 0) {
		// tslint:disable-next-line:no-bitwise
		bin = String(low & 1) + bin;
		low = Math.floor(low / 2);
		if (high > 0) {
			low += 5000000000 * (high % 2);
			high = Math.floor(high / 2);
		}
	}
	return bin;
}

export function getShardIdForGuild(guildId: any, shardCount: number) {
	const bin = idToBinary(guildId);
	const num = parseInt(bin.substring(0, bin.length - 22), 2);
	return (num % shardCount) + 1;
}

export function doubles(val: any) {
	return val < 10 ? `0${val}` : val;
}

export function time() {
	const date = new Date(Date.now());
	let hour = date.getHours();
	const min = date.getMinutes();
	let second = date.getSeconds();
	second = doubles(second);
	hour = doubles(hour);
	return `${hour}:${min}:${second}`;
}
export function formatDate(date: any) {
	date = new Date(Date.now());
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 101).toString().substring(1);
	const day = (date.getDate() + 100).toString().substring(1);
	return `${year}-${month}-${day}`;
}

export function packDate() {
	const date = new Date(Date.now());
	const timer = time();
	const formatDat = formatDate(date);
	return `[${formatDat} ${timer}]`;
}

export function log(text: string) {
	return console.log(`${chalk.bgMagenta(packDate())} ${chalk.reset(text)}`);
}
export function debug(text: string) {
	return console.error(`${chalk.bgMagenta(packDate())} ${chalk.yellow('[Debug]')} ${chalk.reset(text)}`);
}
export function error(text: string) {
	return console.error(`${chalk.bgMagenta(packDate())} ${chalk.red('[Error]')} ${chalk.reset(text)}`);
}
