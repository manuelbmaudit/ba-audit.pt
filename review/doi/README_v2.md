# Modelo DOI newsletter BA AUDIT — v2

Trabalho **apenas local**. Estes ficheiros **não** foram criados nem ativados na Brevo. Não ligar ao formulário nem enviar emails sem o OK expresso do Manuel.

Versão: **v2** (aplica A1, A2 e A3 do parecer Support em `parecer_doi.md`). As v1 (`doi_*.html`, `doi_*.txt`, `README.md`, `revisao_support.md`, `preview/` sem `_v2`) mantêm-se intactas.

## Ficheiros v2

| Ficheiro | Conteúdo |
|----------|----------|
| `doi_pt_v2.html` / `doi_pt_v2.txt` | HTML e texto simples PT-PT |
| `doi_en_v2.html` / `doi_en_v2.txt` | HTML e texto simples EN |
| `README_v2.md` | Este ficheiro |
| `revisao_support_v2.md` | Textos PT \| EN lado a lado |
| `preview/*_v2.*` | PNG desktop/mobile e JPG reduzidos |

## Remetente

- Nome: **BA AUDIT**
- Endereço: **newsletter@ba-audit.pt**
- Na Brevo: sender id **2** (já ativo)

Configurar o remetente nas definições do template na Brevo (não no HTML).

## Assuntos e preheaders

### PT
- **Assunto:** Confirme a sua subscrição da newsletter BA AUDIT
- **Preheader:** Para concluir a subscrição, confirme o seu endereço de email. Se não pediu esta subscrição, ignore este email.

### EN
- **Assunto:** Confirm your BA AUDIT newsletter subscription
- **Preheader:** To complete your subscription, please confirm your email address. If you did not request this subscription, you may ignore this email.

## Fonte da citação de consentimento (A1)

A declaração citada no email DOI é **exactamente** o texto do campo OPT_IN do **formulário completo** do site (branch `feat/design-v2-newsletter`), lido de:

- PT: `/workspace/ba-audit.pt/newsletter/index.html` (página `/newsletter/`)
- EN: `/workspace/ba-audit.pt/en/newsletter/index.html` (página `/en/newsletter/`)

HEAD de referência quando a v2 foi preparada: `5f7f838` (confirmar se o texto do formulário mudar).

O formulário compacto (rodapé) está a ser alinhado ao completo; o DOI cita o completo. No HTML do email, «Política de Privacidade» / «Privacy Policy (in Portuguese)» / «Newsletter privacy notice (in English)» podem ser ligações; o texto visível coincide com o do formulário.

## Etiqueta Brevo

```html
href="{{ doubleoptin }}"
```

Documentação: [Create a custom double opt-in (DOI) email template](https://help.brevo.com/hc/en-us/articles/360019540880-Create-a-custom-double-opt-in-DOI-email-template-for-a-sign-up-form-created-in-Brevo). No editor, tipo de ligação **Double opt-in link**. Tag avançada recomendada: `optin`.

Não personalizar com atributos de contacto (FIRSTNAME, etc.).

## Prazo da ligação (opcional B1 — confirmado)

A documentação pública Brevo indica que a ligação de confirmação **caduca ao fim de 30 dias**; sem clique nesse prazo, o contacto não entra na lista.

- Fonte: [Double opt-in (DOI): What it is and how to track user sign-ups](https://help.brevo.com/hc/en-us/articles/208733449-Double-opt-in-DOI-What-it-is-and-how-to-track-user-sign-ups) («…within 30 days… After 30 days, the confirmation link expires.»)
- Incluído na v2: «Esta ligação é válida durante 30 dias.» / «This link is valid for 30 days.»

## Medição de aberturas e cliques (A3) — desligar neste template

Nos HTML locais **não** há pixel nem wrappers de clique para além de `{{ doubleoptin }}`. Em produção, a Brevo **pode** injectar medição de aberturas/cliques.

**Obrigatório na configuração da Brevo (quando o template for criado, após OK do Manuel):** desligar a medição de aberturas (pixel) e de cliques **neste** template DOI (email transacional de confirmação). Verificar nas definições do plano / do template; não inventar o comportamento da conta. Alinhado com a preferência para emails de confirmação e com o percurso de medição da política de privacidade da newsletter.

## Configuração na Brevo (após aprovação)

1. Marketing → Templates → Create Template → Email template.
2. Nomes sugeridos: `DOI Newsletter BA AUDIT PT` / `DOI Newsletter BA AUDIT EN`.
3. Remetente: BA AUDIT \<newsletter@ba-audit.pt\>.
4. Assunto e preview text conforme acima.
5. Tag avançada: `optin`.
6. Colar o HTML v2 (ou reconstruir com o mesmo texto e botão DOI).
7. **Desligar open/click tracking** neste template (A3).
8. Ligar ao formulário «Newsletter BA AUDIT»: Settings → Double confirmation email.
9. **URL de redirecionamento após confirmação:**
   - PT: `https://ba-audit.pt/newsletter/obrigado/`
   - EN: `https://ba-audit.pt/en/newsletter/thank-you/`
   - Só após as páginas estarem publicadas (PR do site).

## Ligações de privacidade

- PT: `https://www.iubenda.com/privacy-policy/47280304`
- EN (aviso newsletter): `https://ba-audit.pt/en/newsletter/privacy-notice/` (**página ainda em preparação** no trabalho local do site). Política completa em português: iubenda.

## Rodapé legal (A2)

Sem NIF.

- PT: `Manuel Borges, ROC, inscrito na OROC sob o n.º 1067` + `BA AUDIT – Rua São Salvador da Baía, 7, 1D - 2800-201 Almada`
- EN: `Manuel Borges, ROC, registered with OROC under no. 1067` + mesma linha de morada

## Estilo

Alinhado com a newsletter v2 (`/workspace/newsletter/2026-11/v2/`): `#0E2744`, `#C4A574`, `#F6F1E8` / `#FAF8F4`; títulos Georgia; corpo Arial; Delivering Trust; ~600px; botão Outlook com VML.

## Fora de âmbito

Criar/activar na Brevo, ligar ao formulário, enviar testes Brevo, alterar formulários — só após OK do Manuel / CoS.
