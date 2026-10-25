<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the shared site navigation, footer and demo dialog in the root layout so every public page has the same working enquiry entry points.
- Keep verified course facts in the shared site catalog and generate route metadata with the shared SEO helper to prevent inconsistent programme details and sharing previews.
- Staff data access must remain enforced by the existing database role policies; never grant staff privileges from browser state or signup metadata.
