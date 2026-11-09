# Plano de SEO, AEO e GEO

## Objetivo

Melhorar a descoberta orgânica do site em buscas locais e tornar as informações da profissional claras, confiáveis e fáceis de localizar por pessoas, mecanismos de busca e assistentes de IA. Nenhuma alteração garante indexação, posição ou citação por uma plataforma.

## Base técnica aplicada nesta etapa

- Metadados em português com serviço, localidade, nome profissional e CRP; URL canônica e prévias de compartilhamento social.
- `robots.txt` padrão, liberando o conteúdo público e apontando para o sitemap.
- `sitemap.xml` com a página pública atual. Como o site é uma landing page, suas âncoras são seções da mesma URL, não páginas independentes.
- `llms.txt` em Markdown na raiz, com resumo factual, links de seção e indicação para não presumir informações ausentes. O alias `llm.txt` também foi incluído para compatibilidade com o nome solicitado.
- Dados estruturados `Person` com identidade profissional e perfis sociais que já aparecem no site.

## Fase 1 — SEO local e confiança profissional

1. Confirmar o domínio canônico definitivo. Se houver domínio próprio, atualizar metadados, sitemap, robots e links do `llms.txt` em conjunto.
2. Revisar nome, CRP, cidade de atendimento e formas de contato em todos os canais públicos. Não publicar endereço residencial ou endereço de consultório sem confirmação.
3. Configurar e verificar Google Search Console e Bing Webmaster Tools; enviar o sitemap e acompanhar cobertura, consultas, cliques e páginas indexadas.
4. Criar ou revisar o Perfil da Empresa no Google somente com informações verdadeiras e compatíveis com o formato do atendimento. Manter consistentes nome, categoria, cidade, telefone e horários publicados.
5. Rever periodicamente dados profissionais e texto de formação, diferenciando cursos concluídos e em andamento.

## Fase 2 — Conteúdo para buscas e respostas diretas (AEO)

1. Criar páginas próprias para psicoterapia de jovens e adultos, psicoterapia infantojuvenil e terapia para casais, cada uma com título, descrição, H1 e chamadas de contato específicas.
2. Responder perguntas reais de forma direta, com contexto e limites claros: como funciona o primeiro atendimento, duração, participação dos responsáveis, sigilo, modalidade, valores e agendamento. Não publicar respostas ainda não confirmadas pela profissional.
3. Manter as perguntas frequentes em texto HTML visível, com títulos descritivos e respostas concisas. Não depender de dados estruturados para que as respostas sejam encontradas.
4. Explicar autoria e revisão profissional, manter o CRP visível e revisar conteúdo clínico com a psicóloga antes de publicar. Evitar promessas de resultado, autodiagnóstico ou afirmações de tratamento não confirmadas.

## Fase 3 — Clareza e citabilidade em busca generativa (GEO)

1. Usar descrições factuais consistentes para nome, profissão, registro, localidade, público atendido e abordagem; alinhar site, perfis sociais e diretórios profissionais.
2. Estruturar cada página com uma pergunta/necessidade por seção, resposta clara, contexto, autoria e links internos para serviços relacionados.
3. Publicar conteúdo original baseado na experiência profissional e revisar a precisão clínica. Evitar páginas genéricas em massa e repetição artificial de palavras-chave.
4. Atualizar `llms.txt` quando surgirem páginas ou informações novas. Tratá-lo como um índice auxiliar; ele não substitui conteúdo indexável, sitemap, links ou ferramentas para webmasters e não garante uso por modelos.
5. Manter imagens relevantes com texto alternativo descritivo e vídeos acompanhados de contexto textual acessível.

## Fase 4 — Medição e melhoria contínua

- Mensal: verificar indexação, erros de rastreamento, consultas, páginas de entrada e cliques em contato no Search Console e Bing Webmaster Tools.
- Trimestral: revisar títulos e descrições com base em consultas reais; atualizar respostas e informações profissionais; conferir links quebrados e dados locais.
- Após criar páginas específicas: incluí-las no sitemap, reforçar links internos e medir cada página separadamente.
- Registrar alterações de conteúdo e comparar períodos equivalentes, sem interpretar variações pequenas como prova de causalidade.

## Próxima prioridade

Depois de confirmar o domínio principal e validar os detalhes locais da profissional, criar as três páginas de serviço da Fase 2. Essa mudança amplia as páginas específicas que podem responder a buscas diferentes; a landing page atual tem apenas uma URL indexável.

## Referências

- [Google Search: fundamentos para recursos generativos](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google Search: criar e enviar um sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Proposta comunitária do formato llms.txt](https://llmstxt.org/)
