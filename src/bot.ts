import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('Токен бота не установлен в .env файле');
    process.exit(1);
}


const bot = new Telegraf(token); 


bot.start((ctx) => {
    console.log('Бот запущен и клиент присоединился!', ctx.from);
    ctx.reply('Добро пожаловать! Задавайте вопросы по вакансии и компании.');
});

bot.help((ctx) => {
    console.log('Пользователь запросил помощь:', ctx.from);
    ctx.reply('Вы можете задавать вопросы о нашей компании');
});

bot.on('text', (ctx) => {
    const userMessage = ctx.message.text;
    console.log('Получено сообщение от пользователя:', userMessage); // Логируем входящее сообщение
    ctx.reply(`Вы сказали: "${userMessage}". Я пока что не могу ответить на вопросы.`);
});

// Запускаем бот
bot.launch()
    .then(() => {
        console.log('Бот запущен и готов к работе!');
    })
    .catch((err) => {
        console.error('Ошибка при запуске бота:', err);
    });

    