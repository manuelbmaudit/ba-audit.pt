# Publicações

Os conjuntos de slides publicados estão em `publicacoes.json`, do mais recente para o mais antigo. Uma data `null` não é mostrada (pastas `carrossel_*`) e fica depois das entradas com data.

Para acrescentar um conjunto:

1. Criar `publicacoes/img/<id>/` com os slides `1-540.webp`, `1-540.jpg`, `1-1080.webp`, `1-1080.jpg`, e o mesmo para os slides 2 a 6. Proporção 1080×1350.
2. Guardar o PDF em `publicacoes/pdf/<id>.pdf`.
3. Inserir um objeto no topo de `publicacoes.json`:
   - `id`, `date` (`AAAA-MM-DD` ou `null`), `title` (texto do slide 1), `titleEn` (título em inglês, a validar), `summary` (uma ou duas frases copiadas do texto validado), `slides`, `pdf`.

A página inicial, `/publicacoes/` e `/en/insights/` leem este ficheiro. `data.js` repete o mesmo JSON em `window.__BA_PUBS` para a lista aparecer no primeiro ecrã, sem espera. Ao gravar `publicacoes.json`, atualize também `data.js` com o mesmo array.

Uma newsletter usa `kind: "newsletter"`, `href` para a página HTML e, se deve ficar à frente da ordenação por data, `pin: true`. O texto da newsletter não se traduz: em inglês mostra-se o título e a indicação «Published in Portuguese».
