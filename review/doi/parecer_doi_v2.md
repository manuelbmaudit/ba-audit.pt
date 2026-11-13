# Parecer — email de confirmação DOI newsletter BA AUDIT (v2)

**Data:** 2026-11-06 (Europe/Lisbon)  
**Pedido:** Marketing (revalidação após A1/A2/A3 + B1)  
**Pacote:** `/workspace/newsletter/2026-11/brevo/doi_template/` (`*_v2*`)  
**Parecer anterior:** `parecer_doi.md`  
**Estado do pacote:** só local; não criado nem ativado na Brevo. As v1 não foram alteradas.

## Veredicto

**Validado.** A1, A2 e A3 estão aplicados nos ficheiros; a linha dos 30 dias está correcta e confirma-se na documentação pública da Brevo. Não há regressões materiais face à v1. Não restam correções obrigatórias de texto neste pacote.

A activação na Brevo (criar template, desligar medição, ligar ao formulário, testes) continua **fora de âmbito** e depende do OK do Manuel.

---

## Confirmação ponto a ponto (nos ficheiros, não no resumo)

### A1 — Citação de consentimento = formulário completo @ `5f7f838`

**Confirmado por comparação exacta de strings** (texto visível, sem tags HTML).

| Fonte | Resultado |
|-------|-----------|
| `git show 5f7f838:newsletter/index.html` (OPT_IN) | PT idêntico ao DOI |
| `git show 5f7f838:en/newsletter/index.html` (OPT_IN) | EN idêntico ao DOI |
| Working tree `/workspace/ba-audit.pt/...` (HEAD = `5f7f838`) | Igual |
| `doi_pt_v2.html` / `doi_pt_v2.txt` | Citação PT coincide |
| `doi_en_v2.html` / `doi_en_v2.txt` | Citação EN inclui «(in Portuguese)» e «See the Newsletter privacy notice (in English).» |

**PT (exacto):**  
`Aceito receber por email a newsletter mensal e comunicações informativas pontuais da BA AUDIT sobre auditoria, contabilidade e fiscalidade. Posso cancelar a subscrição a qualquer momento através da ligação incluída em cada envio. Os meus dados são tratados nos termos da Política de Privacidade.`

**EN (exacto):**  
`I agree to receive by email the monthly newsletter and occasional informative communications from BA AUDIT on audit, accounting and tax. I may unsubscribe at any time using the link included in each email. My data are processed in accordance with the Privacy Policy (in Portuguese). See the Newsletter privacy notice (in English).`

No HTML, as expressões de privacidade são ligações; o texto visível é o acima. O home (`nlf.consent` PT/EN em `index.html`) está alinhado com o mesmo texto completo.

### A2 — Rodapé

**Confirmado** em HTML, .txt, previews e `revisao_support_v2.md`:

- PT: `Manuel Borges, ROC, inscrito na OROC sob o n.º 1067` + `BA AUDIT – Rua São Salvador da Baía, 7, 1D - 2800-201 Almada`
- EN: `Manuel Borges, ROC, registered with OROC under no. 1067` + mesma morada
- **Baía** com acento; **sem NIF**

Nota (não bloqueia): a política v5 e os formulários usam a forma longa («Revisor Oficial de Contas» / expansão da OROC em EN). O rodapé DOI usa a forma curta pedida pelo Marketing. A identificação (nome, n.º OROC, morada) é suficiente para este email transacional. Sugestão opcional S1 abaixo.

### A3 — Medição

**Confirmado** em `README_v2.md` (§ «Medição de aberturas e cliques» e passo 7 da configuração): instrução explícita para **desligar** open/click tracking neste template DOI na Brevo.  
Nos HTML v2: **0** tags `<img>`; ligações de confirmação só com `{{ doubleoptin }}` (4 ocorrências por idioma: VML + botão + fallback href + texto do fallback).

### B1 — Prazo 30 dias

**Confirmado nos ficheiros:**  
«Esta ligação é válida durante 30 dias.» / «This link is valid for 30 days.» (HTML, .txt, previews).

**Confirmado na documentação pública Brevo** (consulta directa em 2026-11-06):  
[Double opt-in (DOI): What it is and how to track user sign-ups](https://help.brevo.com/hc/en-us/articles/208733449-Double-opt-in-DOI-What-it-is-and-how-to-track-user-sign-ups) — «…within 30 days… After 30 days, the confirmation link expires.»

---

## Regressões e coerência

| Verificação | Resultado |
|-------------|-----------|
| HTML ↔ .txt (citação, rodapé, 30 dias, ignore, privacidade) | OK (adaptação «botão»↔«ligação» no texto simples — aceitável) |
| Preheader HTML = README / .txt | OK (alinhado; corrigido face à v1) |
| `{{ doubleoptin }}` no botão e fallback | OK |
| Só confirma; sem promocional | OK |
| «Se não pediu… ignore» + sem confirmação não inscrito | OK |
| Privacidade PT → iubenda; EN → aviso EN + iubenda PT | OK |
| pt-PT / inglês britânico («My data are…», «no.») | OK |
| Sem nomes de clientes; sem IA/bots | OK |
| Previews desktop e mobile PT/EN | Sem texto cortado |
| Pixel nos HTML locais | Ausente |

---

## Tabela secção | texto actual | texto proposto | fundamento

| Secção | Texto actual | Texto proposto | Fundamento |
|--------|--------------|----------------|------------|
| Consentimento PT | Coincide com form completo @ `5f7f838` | Manter | A1 cumprido; Brevo: consent text DOI = Opt-in do formulário |
| Consentimento EN | Coincide com form completo @ `5f7f838`, com «(in Portuguese)» e aviso EN | Manter | A1 cumprido |
| Rodapé PT/EN | Forma curta ROC/OROC + Baía + Almada, sem NIF | Manter (ou S1) | A2 cumprido na substância |
| Prazo da ligação | «…30 dias» / «…30 days» | Manter | Doc. pública Brevo DOI overview |
| Medição (README) | Desligar open/click neste template | Manter e executar na Brevo após OK | A3; email transacional |
| Ignore / não inscrito | Presente | Manter | Boa prática DOI |
| Placeholder | `{{ doubleoptin }}` | Manter; tipo «Double opt-in link» + tag `optin` | help.brevo.com DOI custom template |

---

## Sugestões opcionais (não bloqueiam)

| ID | Sugestão |
|----|----------|
| S1 | Alinhar o rodapé à forma longa da política v5 / formulários: PT «Manuel Borges, Revisor Oficial de Contas inscrito na OROC sob o n.º 1067 (BA AUDIT)»; EN com expansão da OROC («Ordem dos Revisores Oficiais de Contas (OROC, the Portuguese institute of statutory auditors)»). |
| S2 | No `README_v2.md`, actualizar a nota «página ainda em preparação»: em `/workspace/ba-audit.pt/en/newsletter/privacy-notice/` a página já existe no trabalho local; continua a depender do merge/publicação no ar. |
| S3 | Após OK do Manuel: criar templates na Brevo, **desligar medição**, ligar ao formulário, testar DOI PT e EN de ponta a ponta (incluindo redirect `/newsletter/obrigado/` e `/en/newsletter/thank-you/`). |

---

## Correções obrigatórias por fazer

**Nenhuma**, neste pacote de texto.

Pendências de **processo** (não são falhas do HTML/txt v2): OK do Manuel → configuração Brevo (A3 em produção) → páginas de redirect e aviso EN publicadas → teste real.

**Não alterei** ficheiros do pacote DOI; apenas este parecer.
