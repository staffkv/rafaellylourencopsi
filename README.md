# Rafaelly Lourenço — Psicologia Clínica

Landing page em Next.js 16, React 19 e TypeScript, criada a partir de `reference.md`, da paleta e dos materiais em `public/`.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para validar: `npm run lint` e `npm run build`.

## Organização

- `src/app/page.tsx`: composição das seções.
- `src/components/header.tsx` e `footer.tsx`: navegação e rodapé.
- `src/components/sections/`: hero, acolhimento, demandas, sobre, abordagem, serviços, vídeo, FAQ e contato.
- `src/components/ui/`: botões de contato, títulos e ícones compartilhados.
- `src/lib/site-content.ts`: contatos, navegação, demandas, formação e perguntas.
- `src/app/globals.css`: tokens de cor, estilos e regras responsivas.

Os componentes são renderizados no servidor; somente o menu e o player de vídeo usam estado no cliente. O FAQ usa o elemento nativo `details`.

## Contato

Os contatos são separados por público: adultos usam `https://wa.me/message/7SQ7PVL4RSOZJ1`; crianças e adolescentes usam o número configurado em `NEXT_PUBLIC_WHATSAPP_NUMBER` (padrão `558391814951`). O Instagram também possui perfis separados para crianças e para adultos/adolescentes.

O CRP informado é **13/13489**, exibido na apresentação e no rodapé. Para alterar os contatos ou o registro, crie `.env.local` usando `.env.example` como modelo:

```dotenv
NEXT_PUBLIC_WHATSAPP_NUMBER=558391814951
NEXT_PUBLIC_CRP=13/13489
```

Reinicie o servidor após alterar variáveis. Os dados informados são usados como padrão quando não há configuração no ambiente. Não foram inventados registros, depoimentos, preços ou modalidades de atendimento.

## Imagens e vídeo

As fotos e a marca são os arquivos fornecidos, em versões WebP leves em `public/images/optimized/`. Os originais foram preservados. Para recriar as imagens:

```bash
node scripts/optimize-assets.mjs
```

O vídeo original de aproximadamente 495 MB foi convertido para H.264/AAC em `public/videos/apresentacao-web.mp4` (aproximadamente 6,9 MB), carregado somente após clicar no player. A capa vem do vídeo original. As legendas visuais presentes no original foram preservadas; não há faixa separada de legendas.

Para recriar o vídeo e a capa, com FFmpeg instalado:

```bash
ffmpeg -i public/videos/video-apresentacao-rafa.MP4 -vf scale=720:-2 -c:v libx264 -preset fast -crf 25 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart public/videos/apresentacao-web.mp4
ffmpeg -ss 2 -i public/videos/video-apresentacao-rafa.MP4 -frames:v 1 -vf scale=720:-2 public/images/optimized/video-poster.webp
```

A imagem HEIC indicada para casais não foi utilizada por incompatibilidade de decodificação. Em seu lugar, foi selecionada outra foto fornecida da profissional.

## Antes da publicação

Revisar os textos institucionais com a profissional. A LP não utiliza rastreadores, formulários ou armazenamento de dados dos visitantes.
