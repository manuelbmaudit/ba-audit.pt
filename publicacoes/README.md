# Publicações

Os conjuntos de slides publicados estão em `publicacoes.json`, do mais recente para o mais antigo. Uma data `null` não é mostrada (pastas `carrossel_*`) e fica depois das entradas com data.

Para acrescentar um conjunto:

1. Criar `publicacoes/img/<id>/` com os slides `1-540.webp`, `1-540.jpg`, `1-1080.webp`, `1-1080.jpg`, e o mesmo para os slides 2 a 6. Proporção 1080×1350.
2. Guardar o PDF em `publicacoes/pdf/<id>.pdf`.
3. Inserir um objeto no topo de `publicacoes.json`, já com a versão inglesa completa:
   - `id`, `date` (`AAAA-MM-DD` ou `null`), `title`, `titleEn`, `summary`, `summaryEn`, `slides`, `pdf`.
   - `summary` e `summaryEn` têm o mesmo número de parágrafos. O inglês é britânico e fiel: os mesmos factos, números, datas e referências, sem acrescentar nem retirar conteúdo. As siglas portuguesas mantêm-se e explicam-se uma vez, como DLRR ou SAF-T. Terminologia: corporate income tax (IRC), autonomous taxation, VAT, statutory auditor.
   - Os slides e o PDF ficam em português. A página em inglês mostra a nota «Slides in Portuguese». O seletor PT/EN conserva o `id` da entrada aberta.
   - Com `slides: 1` basta a imagem `1-*`. A página não mostra setas, contador nem a indicação «conjunto de slides».

Cada publicação nova entra no mesmo pull request com `titleEn` e `summaryEn` completos.

A página inicial, `/publicacoes/` e `/en/insights/` leem este ficheiro. `data.js` repete o mesmo JSON em `window.__BA_PUBS` para a lista aparecer no primeiro ecrã, sem espera. Ao gravar `publicacoes.json`, atualize também `data.js` com o mesmo array.

Uma newsletter usa `kind: "newsletter"`, `href` para a página em português, `hrefEn` para a página em inglês, `summary`, `summaryEn` e, se deve ficar à frente da ordenação por data, `pin: true`.
