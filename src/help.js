const help = (prefix) => {
	return `*BOT DISPONIBILIZADO PELO CANAL MS PLAY*
	*LINK DO CANAL:* https://www.youtube.com/msplay
	\n\n
	> *Comandos para figurinhas:* <
Comando : *${prefix}sticker* ou *${prefix}stiker*
Desc : converte imagem/gif/video para figurinha
Uso : Responda imagem/gif/video, ou envie imagem/gif/video com a legenda\n
Comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
Desc : Converte uma imagem para figurinha e remove o fundo
Uso : Responda a imagem ou envie na legenda\n
Comando : *${prefix}toimg*
Desc : Converte figurinha para imagem
Uso : Responda o sticker\n
Comando : *${prefix}tsticker* ou *${prefix}tstiker*
Desc : Converte texto para figurinha
Uso : *${prefix}tsticker Texto aqui*\n
> *Comandos para memes* <
Comando : *${prefix}meme*
Desc : Imagem aleatória de meme [Em ingês]
Uso : Apenas mande o comando\n
Comando : *${prefix}memeindo*
Desc : Imagem aleatória de memes [indo]
Uso : Apenas mande o comando\n
> *Outros comandos* <
Comando : *${prefix}gtts*
Desc : Converte texto para áudio falado
Uso : *${prefix}gtts [cc] [text]*\nExemplo : *${prefix}gtts ja On2-chan*\n
Comando : *${prefix}loli*
Desc : Imagem aleatória de loli
Uso : Apenas envie o comando\n
Comando : *${prefix}nsfwloli*
Desc : Imagem aleatória nsfw loli
Uso : Apenas envie o comando\n
Comando : *${prefix}url2img*
Desc : Tira uma foto da web
Uso : *${prefix}url2img [tipe] [url]*\n
Comando : *${prefix}simi*
Desc : Sua mensagem será respondida pelo simi
Uso : *${prefix}simi sua mensagem*\n
Comando : *${prefix}ocr*
Desc : Transforma texto em imagem
Uso : reply image, or send image with caption\n
Comando : *${prefix}wait*
Desc : Procura anime por imagem [ Que anime é esse/aquele]
Uso : Responda a imagem ou envie na legenda\n
Comando : *${prefix}setprefix*
Desc : Muda o prefixo
Uso : *${prefix}setprefix [Texto|optional]*\nExemplo : *${prefix}setprefix ?*
Nota : Este comando só pode ser usado pelo dono do bot\n
> *Comandos para grupos* <
Comando : *${prefix}add*
Desc : Adciona um menbro ao grupo
Uso : *${prefix}add 62813xxxxx*\n
Nota : Só pode ser usado se o bot for um administrador e o usuário que enviou o comando também!\n
Comando : *${prefix}kick*
Desc : Expulsa um membro do grupo
Uso : *${prefix}kick @tagmember*\n
Nota : Só pode ser usado se o bot for um administrador e o usuário que enviou o comando também!\n
Comando : *${prefix}promote*
Desc : Faz o membro um administrador
Uso : *${prefix}promote @membro*\n
Nota : Só pode ser usado se o bot for um administrador e o usuário que enviou o comando também!\n
Coomando : *${prefix}demote*
Desc : Tornar o admministrador do grupo um membro
Uso : *${prefix}demote @membro*\n
Nota : Só pode ser usado se o bot for um administrador e o usuário que enviou o comando também!\n
Comando : *${prefix}linkgroup*
Desc : Retorna o link do grupo
Uso : Apenas envie o comando
Nota : Só pode ser usado se o bot for um administrador e o usuário que enviou o comando também!\n
Comando : *${prefix}leave*
Desc : O bot sai do grupo
Uso : Apenas envie o comando
Nota : Só pode ser usado pelos administradores e pelo dono do bot\n
Comando : *${prefix}tagall*
Desc : Marca todos os membros do grupo
Uso : Apenas envie o comando
Nota : Este comando pode ser usado se você for um administrador do grupo\n
Comando : *${prefix}simih*
Desc : Ativa o modo simi no grupo
Uso : *${prefix}simih 1* Para ativar o modo simi *${prefix}simih 0* Para desativar o modo simi
Nota : Este comando pode ser usado se você for um administrador do grupo\n`
}

exports.help = help
