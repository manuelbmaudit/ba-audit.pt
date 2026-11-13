# Parecer técnico v4: aditamento à Política de Privacidade (newsletter / Brevo)

**Ficheiros conferidos:** `politica_privacidade_aditamento_v4.md`, `README_implementacao_v4.md`, `form_newsletter_v4.html` e `form_footer_compact_v4.html`. Foram comparados com as versões v2 (por `diff`). Para verificar a coerência, conferi também a newsletter em `../v2/` e `../v3/`.
**Data:** 06/11/2026. **Não alterei nenhum original.**
**Decisões do Manuel já incorporadas:** a grafia «Baía» está confirmada e o campo Empresa foi retirado.

> Este parecer é técnico. Não substitui a validação jurídica por advogado, que continua a ser um pré-requisito para a medição com pixel.

## Veredicto

**CONFORME.** Está tudo aplicado: R1, R1-c, R2, R3 e as sugestões S1 a S4. Não há erros novos, e o que estava conforme na v2 continua conforme. A aprovação tem **uma condição de publicação** (ponto 1, R1): a secção «Medição» descreve uma anonimização que a Brevo ainda não confirmou. O texto só pode ser publicado tal como está se a confirmação escrita da Brevo disser exatamente isso. O README v4 já impõe essa condição.

---

## 1. Correções e sugestões da v2

| Ponto | Resultado | Verificação |
|---|---|---|
| R1, «Medição» | ✅ com condição | O texto menciona o pixel e as ligações redirecionadas, a finalidade e a falta de acesso a quem abriu ou clicou. Desapareceu a frase condicional. **Condição:** a v4 diz que os eventos são contados «de forma anónima» e que «não ficam associados ao seu endereço de email nem ao seu endereço IP». A redação que propus limitava esta afirmação aos relatórios. A versão mais forte só é correta se a Brevo confirmar por escrito que a anonimização acontece na recolha. É precisamente esse o 1.º pré-requisito do README v4 (secção «Medição» e lista de pré-requisitos). Se a Brevo não o confirmar nesses termos, deve voltar-se à redação «…não são associados ao seu endereço de email nem ao seu endereço IP **nos relatórios**…» e retirar «anónima» do 2.º período. Se a Brevo permitir desligar tudo, o README já obriga a reescrever a secção e a voltar a aprová-la |
| R1-a / R1-b | ✅ (registados como pendentes) | Estão na lista de pré-requisitos do README v4 e na tabela NÃO PUBLICAR |
| R1-c, README | ✅ | O README diz: «Não enviar nenhuma campanha até haver confirmação técnica e jurídica», e o bloqueio abrange também os testes. Diz ainda «Não presumir que existe […] uma opção para desligar toda a medição» e manda ativar «Anonymous email tracking» antes do 1.º envio, salvo se a desativação total for confirmada, aplicada e verificada |
| R2, «Baía» | ✅ | Está na política (linha 5) e no README v4 (passo 1). Ver o ponto 3 |
| R3, Empresa | ✅ | O campo `COMPANY` saiu do formulário completo. Saíram também as menções na política (abertura e «Dados obrigatórios») e o mapeamento no README (passo 3). O formulário compacto só tinha email |
| S1 | ✅ | «Revisor Oficial de Contas inscrito na OROC sob o n.º 1067» aparece na política e nos dois formulários |
| S2 | ✅ | A secção NÃO PUBLICAR e o README v4 dizem expressamente que só se publica o texto acima de `---` e que a tabela de controlo nunca é copiada |
| S3 | ✅ | Não há `<!--` nem `-->` nos ficheiros v4, e o comentário do JavaScript também foi retirado. As instruções passaram para o README v4 |
| S4 | ✅ | O formulário completo diz: «Vai receber um email de dupla confirmação da subscrição. A subscrição só fica ativa depois dessa confirmação.» Não há «double opt-in» em nenhum texto visível |

## 2. Erros novos e manutenção da conformidade (comparação v2 → v4)
No texto público da política, o `diff` mostra alterações **só** nas linhas 3, 5, 7 e 10, ou seja, R3, S1/R2, R3 e R1. Continuam iguais e conformes:
- o fundamento exclusivo no consentimento (A1/C6);
- o responsável (C1);
- a Brevo SAS e o art. 28.º (A3);
- as transferências internacionais (A4);
- a conservação de 3 anos e a lista de exclusão (A6/C3);
- os direitos e a CNPD (A7);
- a frase sobre o encarregado de proteção de dados (C5).

Nos formulários, os elementos mantêm-se:
- a caixa `OPT_IN` é obrigatória, sem atributo `checked` (só aparece `f.OPT_IN.checked` no JavaScript de validação);
- a ligação para a política, a finalidade e o responsável estão presentes;
- a dupla confirmação está indicada;
- o honeypot continua lá.

**Não encontrei erros novos.** Há apenas dois pormenores de forma, no ponto S5.

## 3. Morada
| Local | Grafia |
|---|---|
| `politica_privacidade_aditamento_v4.md` (linhas 5, 40 e 49) | «Rua São Salvador da Baía, 7, 1D – 2800-201 Almada» ✅ |
| `README_implementacao_v4.md` (linhas 13 e 51) | igual ✅ |
| Formulários v4 | não indicam morada (remetem para a política) ✅ |
| Versões anteriores na pasta `brevo/` (aditamento v2/v3, README v2/v3) | «Baia», mas são versões substituídas e mantidas como histórico. Não se usam |
| Newsletter `../v2/` e `../v3/` (HTML de email e web, `texto_para_revisao.md`, `content_v*.py`, PDF de email v2 e v3) | «Baía» ✅. Só as cópias de arquivo em `_pre_acento/` mantêm «Baia» |

**Para informar o CoS (não é obrigatório corrigir):** a newsletter usa um hífen simples («7, 1D **-** 2800-201») e a política usa um travessão («–»). A diferença é só tipográfica.

## 4. Comentários, notas internas, clientes, IA/bots
✅ Não há comentários HTML. As notas internas estão todas abaixo de `---`, na secção NÃO PUBLICAR. Não há nomes de clientes. Não há referências a IA ou bots no texto público nem nos formulários. A palavra «Support» só aparece nos documentos internos (secção NÃO PUBLICAR e README).

## 5. README v4: bloqueio de envios e iubenda
✅ **Envios bloqueados:** a secção «Medição», o passo 8 e a lista de pré-requisitos dizem que nenhuma campanha sai, nem sequer de teste, sem:
- confirmação escrita da Brevo sobre a anonimização na recolha;
- resposta escrita da Brevo sobre a desativação total;
- parecer de advogado.

Se estas condições não forem cumpridas, a decisão volta ao Manuel.

✅ **iubenda:** o passo 6 e a lista de pré-requisitos exigem o alinhamento efetivo do responsável (Manuel Borges, BA AUDIT, Almada) e da descrição do serviço Brevo e das transferências, antes de os formulários entrarem em funcionamento.

✅ O README usa a newsletter **v3** (`../v3/email_newsletter_2026-11_v3.html`). Conferi que o rodapé da v3 diz só «subscreveu as comunicações da BA AUDIT» e tem `{{ unsubscribe }}`, `{{ mirror }}` e info@ba-audit.pt.

## Sugestões menores (opcionais)

| # | Secção | Texto atual | Texto proposto | Fundamento |
|---|---|---|---|---|
| S5 | `form_footer_compact_v4.html`, linha 12 | «Vai receber um email para confirmar. Só depois da confirmação fica inscrito.» | «Vai receber um email para confirmar. A subscrição só fica ativa depois dessa confirmação.» | Mesma redação do formulário completo e linguagem neutra |
| S6 | `form_newsletter_v4.html`, linhas 14 e 21 | Indentação desalinhada e uma linha vazia onde estava o comentário | Arrumar a indentação | Só estética do código; o funcionamento não muda |

## Continua «a confirmar» antes de publicar ou de enviar
1. **Brevo, por escrito:** se a anonimização ocorre na recolha e se os eventos não ficam associados ao email nem ao IP. Disto depende a redação atual de R1.
2. **Brevo, por escrito:** se, no plano a contratar, é possível desligar totalmente o pixel e o rastreamento de ligações. Se for possível, a secção «Medição» é reescrita e volta a ser aprovada.
3. **Advogado:** se a medição agregada com pixel, sem consentimento separado, é admissível face ao art. 5.º da Lei 41/2004.
4. **iubenda alinhada de facto:** responsável, morada, serviço Brevo e transferências.
5. **Arquivo:** DPA e Anexo 2 da Brevo em vigor à data da adesão, guardados com a data. O email do EPD da Brevo também continua por confirmar.
6. **Integração real:** formulário da Brevo com dupla confirmação e o texto exato da caixa no email de confirmação, com testes feitos só depois de o bloqueio ser levantado.
7. **Aprovação final do Manuel.**

*Parecer técnico de conformidade. Não substitui a validação jurídica por advogado nem a aprovação do Manuel Borges.*
