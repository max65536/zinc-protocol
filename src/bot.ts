import dotenv from 'dotenv'
import { Markup, Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { getDB, connectToDB } from './db';

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN as string);
const SOL_PUBKEY = '57B1p8DjXZ4pBuiY8Y9eyHmC4GjXdBUhqMwFKeGhsAHt'
const ETH_PUBKEY = '0x779AF25b6dd13eFA665dd21D2F9E9f3B9adC71ad'

async function fetchUser(userid:string) {
  const user_collection = getDB().collection('users');
  const data = await user_collection.find({"userid":userid}) 
  return data
}



bot.command('quit', async (ctx) => {
  // Explicit usage
  await ctx.telegram.leaveChat(ctx.message.chat.id)

  // Using context shortcut
  await ctx.leaveChat()
})

bot.command('start', async (ctx) => {
  
  ctx.reply('Welcome to Zinc bot!'
              + '\nYour SOL address:\n  ' + SOL_PUBKEY 
              + '\nYour ETH address:\n  ' + ETH_PUBKEY);
})

bot.command('sol_to_eth', async (ctx) => {
  ctx.reply('Please select a token pair:', Markup.inlineKeyboard([
    Markup.button.callback("sol => usdt", 'swap-sol-usdt'),
    Markup.button.callback("orc => doge", 'swap-orc-doge'),
    Markup.button.callback("orc => usdt", 'swap-orc-usdt'),
  ]));
})

bot.command('eth_to_sol', async (ctx) => {
  ctx.reply('Please select a token pair:', Markup.inlineKeyboard([
    Markup.button.callback("eth => sol", 'swap-eth-usdt'),
    Markup.button.callback("usdt => rol", 'swap-usdt-rol'),
    Markup.button.callback("usdt => orc", 'swap-usdt-orc'),
  ]));
})

bot.action(/swap-(.+)/, (ctx) => {
  const pair = ctx.match[1];
  // return ctx.answerCbQuery("The current price is 0.5");
  ctx.reply("choose the amount", Markup.inlineKeyboard([
    Markup.button.callback("1", 'amount-1'),
    Markup.button.callback("10", 'amount-10'),
    Markup.button.callback("100", 'amount-100'),
  ]));
})

bot.action(/amount-(.+)/, (ctx) => {
  const pair = ctx.match[1];
  // return ctx.answerCbQuery("The current price is 0.5");
  ctx.reply("The current price is 0.5", Markup.inlineKeyboard([
    Markup.button.callback("confirm", 'act-confirm'),
    Markup.button.callback("cancel", 'act-cancel'),
  ]));
})


bot.on(message('text'), async (ctx) => {
  // Explicit usage
  await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

  // Using context shortcut
  await ctx.reply(`Hello ${ctx.state.role}`)
})

bot.on('callback_query', async (ctx) => {
  // Explicit usage
  await ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

  // Using context shortcut
  await ctx.answerCbQuery()
})

bot.on('inline_query', async (ctx) => {
  const result:any = []
  // Explicit usage
  await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)

  // Using context shortcut
  await ctx.answerInlineQuery(result)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
