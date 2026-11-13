# Materiais para revisão — não publicados

Estes ficheiros acompanham a proposta. Não estão instalados na Brevo, não substituem a política da iubenda e não autorizam envios.

## O que já está aprovado

- Texto da edição de novembro de 2026 em português.
- Página `/newsletter/obrigado/` sem indexação.
- Morada legal no site: `Rua São Salvador da Baía, 7, 1D – 2800-201 Almada`.
- Na ficha de contactos da página inicial mantém-se `Lisboa, Portugal` e a tagline Delivering Trust.

## O que continua em rascunho

- Páginas em inglês da newsletter, incluindo `/en/newsletter/`, `/en/newsletter/2026-11/` e `/en/newsletter/thank-you/`. Estão na proposta para o Manuel ver. Ainda não têm o OK final.
- `newsletter/privacidade/` e `/en/newsletter/privacy-notice/`: rascunho do aviso, com `noindex`. O texto público é o que está acima da linha `---` em `privacidade/politica_privacidade_aditamento_v6.md`. Tudo o que está abaixo dessa linha é controlo interno e não pode ir para a iubenda nem para o site.
- `doi/`: modelos locais do email de dupla confirmação, versão v2, já revistos no Support. Não foram criados nem ligados na Brevo. Não enviar estes ficheiros para a conta.

## Formulário Brevo — o que o código faz

O `action` das cinco cópias do formulário é o URL público completo, incluindo `==` no fim, copiado de `brevo/brevo_form_action_url.txt`.

Campos que a nota de 6 de novembro confirma no formulário «Newsletter BA AUDIT»:

- `EMAIL` (obrigatório)
- `email_address_check` (honeypot vazio)
- `locale` com o valor `pt`, também nas páginas em inglês

`FIRSTNAME` e `OPT_IN` não constam dessa nota. O código não os envia. A caixa de consentimento continua visível e é obrigatória no browser, mas não tem `name`, por isso não entra no pedido. O nome deixou de aparecer no formulário até a conta confirmar o atributo.

Isto não demonstra que a subscrição funciona. Não houve teste de envio, de email de confirmação nem de redirecionamento.

## Bloqueios que só se resolvem na conta Brevo

1. Confirmar se existem, ou não, os atributos `FIRSTNAME` e `OPT_IN`. Se passarem a existir com estes nomes, o formulário pode voltar a enviá-los. Até lá ficam de fora.
2. Confirmar que o campo escondido da conta é mesmo `locale=pt` e que as páginas em inglês devem usar esse valor. Um `locale=en` e um email de confirmação em inglês não estão confirmados.
3. Confirmar o redirecionamento depois da confirmação: `/newsletter/obrigado/` e, se a conta o permitir por língua, `/en/newsletter/thank-you/`.
4. Criar os modelos DOI v2 só depois do OK do Manuel, desligar a medição de aberturas e cliques nesses modelos e ligá-los ao formulário. Este repositório não faz essa configuração.
5. Arquivar o contrato de subcontratação e o Anexo 2 em vigor, e alinhar a iubenda (hoje identifica BA CONSULTING, LDA.) antes de tratar o aviso como política vigente.
6. Verificar na conta se a medição de aberturas e cliques pode ser desligada. O texto de medição do rascunho descreve o que a proposta diz; não confirma uma definição já feita.
7. Só um teste de ponta a ponta autorizado, sem ser esta preparação, pode dizer se a subscrição fica ativa.
