
EM PROGRESSO

<!--- + ## Configuração 

Você pode modificar qualquer tipo de configuração em `src/config.ts`. NÃO altere nenhum arquivo no diretório `dist`, pois todos são arquivos gerados e não devem ser editados manualmente.

---

## Comandos

No modelo, o bot possui 3 comandos básicos: -

1. `help`: Mostra a lista de comandos ou detalhes de um comando específico.
2. `say`: Repete o que o usuário mandar.
3. `ping`: Verifica a conectividade com servidores discord.

Você pode editar esses comandos e/ou adicionar mais em `src/index.ts`. Após criar o comando em `src/index.ts`, vá em `src/commands.ts` e no json, adicione uma nova entrada com o formato
```ts
{
   ...,
   'nome-comando': {
     aliases: ['estes', 'são', 'opcional'],
     descrição: 'Este comando faz xyz...',
     formato: 'nome do comando <meus-args>'
   }
}
```

Aqui, `command-name` é o nome do seu novo comando, `aliases` é um array de aliases (outras formas de invocar este comando). A `descrição` e `formato` são campos obrigatórios para exibir o comando corretamente na ajuda incorporada.

> **NOTA :** Isto é apenas para adicionar o comando ao help embed, isso não afeta em nada o funcionamento dos comandos, apenas adiciona o comando para help embeds.

---

## Hospedagem
FEITA VIA REPLIT

Por fim, depois de terminar de escrever seu bot, o primeiro passo é compilá-lo, para isso, abra o shell do lado direito e execute `npm run build`. Isso irá compilar seu código e prepará-lo para execução. Após isso, basta apertar o botão de executar e seu bot estará online! ![imagem](https://i.postimg.cc/dtbZkvKP/image.png)

Você também pode ativar `Always On` para melhorar ainda mais sua experiência de hospedagem.
+ --->
