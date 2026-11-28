# Publicações

Os conjuntos de slides publicados estão em `publicacoes.json`, do mais recente para o mais antigo. Uma data `null` não é mostrada (pastas `carrossel_*`) e fica depois das entradas com data.

Para acrescentar um conjunto:

1. Criar `publicacoes/img/<id>/` com os slides em português: `1-540.webp`, `1-540.jpg`, `1-1080.webp`, `1-1080.jpg`, e o mesmo para os restantes slides. Proporção 1080×1350. Copiar os mesmos ficheiros, já em inglês, para `publicacoes/img-en/<id>/`.
2. Guardar o PDF em português em `publicacoes/pdf/<id>.pdf` e o PDF em inglês em `publicacoes/pdf/<id>-en.pdf`.
3. Inserir um objeto no topo de `publicacoes.json`, já com a versão inglesa completa:
   - `id`, `date` (`AAAA-MM-DD` ou `null`), `title`, `titleEn`, `summary`, `summaryEn`, `slides`, `pdf`, `pdfEn`.
   - `summary` e `summaryEn` têm o mesmo número de parágrafos. O inglês é britânico e fiel: os mesmos factos, números, datas e referências, sem acrescentar nem retirar conteúdo. As siglas portuguesas mantêm-se e explicam-se uma vez, como DLRR ou SAF-T. Terminologia: corporate income tax (IRC), autonomous taxation, VAT, statutory auditor.
   - Em inglês, o carrossel e o botão «Download PDF» usam `img-en` e `pdfEn`. Se `pdfEn` não existir, usam-se as imagens e o PDF em português. O seletor PT/EN conserva o `id` da entrada aberta.
   - Com `slides: 1` basta a imagem `1-*`. A página não mostra setas, contador nem a indicação «conjunto de slides».

Cada publicação nova entra no mesmo pull request com `titleEn`, `summaryEn`, os slides em inglês e `pdfEn`.

A página inicial, `/publicacoes/` e `/en/insights/` leem este ficheiro. `data.js` repete o mesmo JSON em `window.__BA_PUBS` para a lista aparecer no primeiro ecrã, sem espera. Ao gravar `publicacoes.json`, atualize também `data.js` com o mesmo array.

Uma newsletter usa `kind: "newsletter"`, `href` para a página em português, `hrefEn` para a página em inglês, `summary`, `summaryEn` e, se deve ficar à frente da ordenação por data, `pin: true`.
