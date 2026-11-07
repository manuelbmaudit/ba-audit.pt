# Revisão Support — Modelo DOI newsletter BA AUDIT (v2)

Pedido: revalidação rápida após A1, A2 e A3 (+ B1, prazo 30 dias confirmado na doc. pública Brevo).
Pacote: `/workspace/newsletter/2026-11/brevo/doi_template/` (`*_v2*`)
Estado: **só local** — não criado na Brevo. As v1 não foram alteradas.
Parecer anterior: `parecer_doi.md`.

## Metadados

| Campo | PT | EN |
|-------|----|----|
| Remetente | BA AUDIT \<newsletter@ba-audit.pt\> | idem |
| Assunto | Confirme a sua subscrição da newsletter BA AUDIT | Confirm your BA AUDIT newsletter subscription |
| Preheader | Para concluir a subscrição, confirme o seu endereço de email. Se não pediu esta subscrição, ignore este email. | To complete your subscription, please confirm your email address. If you did not request this subscription, you may ignore this email. |
| Botão | Confirmar subscrição | Confirm subscription |
| Href | `{{ doubleoptin }}` | `{{ doubleoptin }}` |
| Prazo | Esta ligação é válida durante 30 dias. | This link is valid for 30 days. |
| Redirect | https://ba-audit.pt/newsletter/obrigado/ | https://ba-audit.pt/en/newsletter/thank-you/ |

## A1 — Citação de consentimento (fonte: formulário completo do site)

Fonte: `feat/design-v2-newsletter` @ `5f7f838` — `newsletter/index.html` e `en/newsletter/index.html`.

| | Texto exacto (sem tags HTML) |
|--|------------------------------|
| **PT** | Aceito receber por email a newsletter mensal e comunicações informativas pontuais da BA AUDIT sobre auditoria, contabilidade e fiscalidade. Posso cancelar a subscrição a qualquer momento através da ligação incluída em cada envio. Os meus dados são tratados nos termos da Política de Privacidade. |
| **EN** | I agree to receive by email the monthly newsletter and occasional informative communications from BA AUDIT on audit, accounting and tax. I may unsubscribe at any time using the link included in each email. My data are processed in accordance with the Privacy Policy (in Portuguese). See the Newsletter privacy notice (in English). |

No HTML, as expressões de privacidade são ligações (mesmo texto visível).

## A2 — Rodapé

| | Texto |
|--|-------|
| **PT** | Manuel Borges, ROC, inscrito na OROC sob o n.º 1067<br>BA AUDIT – Rua São Salvador da Baía, 7, 1D - 2800-201 Almada |
| **EN** | Manuel Borges, ROC, registered with OROC under no. 1067<br>BA AUDIT – Rua São Salvador da Baía, 7, 1D - 2800-201 Almada |

Sem NIF.

## A3 — Medição

Nota no `README_v2.md`: desligar medição de aberturas e cliques neste template DOI na Brevo. HTML locais sem pixel.

## B1 — Prazo 30 dias

Incluído. Fonte: https://help.brevo.com/hc/en-us/articles/208733449-Double-opt-in-DOI-What-it-is-and-how-to-track-user-sign-ups

## Textos lado a lado (restante)

### Saudação
| PT | EN |
|----|----|
| Caro(a) leitor(a), | Dear reader, |

### Pedido de confirmação
| PT | EN |
|----|----|
| Obrigado pelo seu interesse na newsletter mensal da BA AUDIT. Para concluir a subscrição e passar a receber as nossas comunicações, confirme o seu endereço de email através do botão abaixo. | Thank you for your interest in the BA AUDIT monthly newsletter. To complete your subscription and start receiving our communications, please confirm your email address using the button below. |

### Se não pediu
| PT | EN |
|----|----|
| Se não pediu esta subscrição, ignore este email. Sem a confirmação, o seu endereço não será inscrito na lista. | If you did not request this subscription, please ignore this email. Without confirmation, your address will not be added to the list. |

## Pedido ao Support

Confirmar A1/A2/A3/B1 aplicados e revalidar o pacote v2.
