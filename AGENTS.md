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
- Production is a fully prerendered static site for GitHub Pages (vite.config `pages` + prerender, router trailingSlash "always"); add every new public route to `pages` and add no server functions, because static hosting cannot run them.
- Applications are paused; when restored they must go to an external hosted form service, not a site backend.
- Keep SMS activation informational only and application records permanently distinct from SMS consent to preserve separate enrollment.
