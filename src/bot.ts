import { Telegraf } from 'telegraf';

const BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'; // 请替换为你的 Telegram 机器人 token

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there!'));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

