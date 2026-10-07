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

## Website architecture
- Keep each public content page in its own top-level route and shared navigation/footer in the root shell so every page remains directly accessible.
- Validate access applications with a shared Zod schema in the form and server function; store through an anonymous insert-only policy so visitors cannot read application data.
- Keep SMS activation informational only and application records permanently distinct from SMS consent to preserve separate enrollment.
