# Lorena Ípsia Advocacia

Landing page institucional estática em Astro, TypeScript e Tailwind CSS. O projeto está isolado em [`site-advocacia/`](./site-advocacia/); consulte o [README do site](./site-advocacia/README.md) para a arquitetura, o histórico das decisões visuais e a preparação para publicação.

## Executar localmente

```bash
cd site-advocacia
npm install
npm run dev
```

O servidor local normalmente abre em `http://localhost:4321/`. Para validar a aplicação, use `npm run check` e `npm run build` dentro de `site-advocacia/`.

## Estado do projeto

A identidade usa azul-marinho e dourado. Nome, logo e contatos foram fornecidos pelo usuário; as fotografias são imagens geradas para esta prévia. Os textos editoriais, as áreas de atuação, a inscrição OAB e os metadados finais devem ser revisados antes da publicação. Não há banco de dados nem formulário ativo.

Ao importar este repositório na Vercel, configure **Root Directory** como `site-advocacia`. O build é `npm run build` e a saída estática é `dist`.
